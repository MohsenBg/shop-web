import React, { useState } from "react";
import styles from "../../styles/Login.module.scss";
import * as RiIcons from "react-icons/ri";
import Link from "next/link";
import { Url } from "../../Url";
import axios from "axios";
import router from "next/router";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userNameValue, setUserNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const Submit = async () => {
    await axios
      .post(`${Url}api/postLogin`, {
        userName: userNameValue,
        password: passwordValue,
      })
      .then((response) => {
        if (response.data.length > 0) {
          router.push("/Admin/AddProduct", undefined, { shallow: true });
        }
        if (response.data.length <= 0) {
          console.log(`userName or password wrang :${response}`);
        }
      });
  };

  return (
    <div className={styles.Container}>
      <div className={styles.filter}>
        <div className={styles.fromBox}>
          <div className={styles.left}>
            <h1>Login</h1>
            <div className={styles.containerInputs}>
              <div className={styles.containerInput}>
                <span>UserName</span>
                <div className={styles.input}>
                  <input
                    placeholder="UserName"
                    type="text"
                    onChange={(e) => setUserNameValue(e.target.value)}
                  />
                  <div className={styles.iconInput}>
                    <RiIcons.RiUser2Fill />
                  </div>
                </div>
              </div>
              <div className={styles.containerInput}>
                <span>Password</span>
                <div className={styles.input}>
                  <input
                    onChange={(e) => setPasswordValue(e.target.value)}
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                  />
                  <div className={styles.iconInput}>
                    <RiIcons.RiLockPasswordLine />
                  </div>
                  <div className={styles.showPassword}>
                    <input
                      type="checkbox"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                    <span>show Password</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <div className={styles.buttonSubmit} onClick={() => Submit()}>
                Submit
              </div>
            </div>
            <div className={styles.forgetPassword}>
              <span>forget Password</span>
            </div>

            <div className={styles.forgetPassword}>
              <Link href="/user/SingUp">
                <span>SingUp</span>
              </Link>
            </div>
          </div>
          <div className={styles.right}></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
