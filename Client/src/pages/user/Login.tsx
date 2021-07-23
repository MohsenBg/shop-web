import React, { useState } from "react";
import styles from "../../styles/Login.module.scss";
import * as RiIcons from "react-icons/ri";
import Link from "next/link";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

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
                  <input placeholder="UserName" type="text" />
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
              <div className={styles.buttonSubmit}>Submit</div>
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
