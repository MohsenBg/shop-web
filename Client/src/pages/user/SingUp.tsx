import React, { useState } from "react";
import styles from "../../styles/SingUp.module.scss";
import * as RiIcons from "react-icons/ri";
import Link from "next/link";
import axios from "axios";
import { Url } from "../../Url";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userNameValue, setUserNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [PasswordValue, setConfirmPasswordValue] = useState("");

  const submit = () => {
    axios.post(`${Url}api/postUserData`, {
      userName: userNameValue,
      password: passwordValue,
    });
  };

  return (
    <div className={styles.Container}>
      <div className={styles.filter}>
        <div className={styles.fromBox}>
          <div className={styles.left}></div>
          <div className={styles.right}>
            <h1>SingUp</h1>
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
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPasswordValue(e.target.value)}
                  />
                  <div className={styles.iconInput}>
                    <RiIcons.RiLockPasswordLine />
                  </div>
                </div>
              </div>
              <div className={styles.containerInput}>
                <span>Confirm Password</span>
                <div className={styles.input}>
                  <input
                    placeholder="Confirm Password"
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setConfirmPasswordValue(e.target.value)}
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
              <div className={styles.buttonSubmit} onClick={() => submit()}>
                Submit
              </div>
            </div>
            <div className={styles.forgetPassword}>
              <Link href="/user/Login">
                <span>Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
