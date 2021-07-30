import React, { useState } from "react";
import styles from "../../styles/Login.module.scss";
import * as RiIcons from "react-icons/ri";
import Link from "next/link";
import { Url } from "../../Url";
import axios from "axios";
import router from "next/router";
import Error from "../../components/message/Error/Error";
import { useDispatch, useSelector } from "react-redux";
import { ActionType } from "../../Redux/userData/ActionTypeUD";
import { initialState } from "../../Redux/store";
import { sha256 } from "crypto-hash";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userNameValue, setUserNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [textLogin, setTextLogin] = useState("");
  const [hiddenError, setHiddenError] = useState(true);
  const [countBtnError, setCountBtnError] = useState(0);
  const [iconError, setIconError] = useState("");

  const dispatch = useDispatch();
  const loginStatus = useSelector(
    (state: typeof initialState) => state.userData.loginStatus
  );
  const Submit = async () => {
    const hash = await sha256(passwordValue);
    await axios
      .post(`${Url}api/postLogin`, {
        userName: userNameValue,
        password: hash,
      })
      .then((response) => {
        if (response.data.length > 0) {
          setIconError("message");
          setCountBtnError(0);
          setTextLogin(`welcome ${response.data[0].UserName}`);
          setHiddenError(false);
          setTimeout(() => {
            router.push("/Admin/AddProduct", undefined, { shallow: true });
            setTimeout(() => {
              dispatch({ type: ActionType.LOGIN_IN });
              dispatch({
                type: ActionType.USER_DATA,
                PayLoad01: response.data[0].UserName,
                PayLoad02: "",
              });
            }, 1000);
          }, 4000);
        }
        if (response.data.length <= 0) {
          setIconError("error");
          setCountBtnError(1);
          setTextLogin(`userName or password wrong`);
          setHiddenError(false);
        }
      });
  };

  return (
    <>
      <div className={styles.Container}>
        {loginStatus ? (
          <Error
            title={"login"}
            text={"you are already Login"}
            hidden={false}
            countButton={1}
            btn1={"Logout"}
            icon={"error"}
            getValueBtn={(value: any) =>
              dispatch({ type: ActionType.LOGIN_OUT })
            }
          />
        ) : (
          <>
            <Error
              title={"login"}
              text={textLogin}
              hidden={hiddenError}
              countButton={countBtnError}
              btn1={"ok"}
              fontSize={textLogin.includes("welcome") ? "25px" : "16px"}
              icon={iconError}
              getValueBtn={(value: any) => setHiddenError(true)}
            />
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
                    <div
                      className={styles.buttonSubmit}
                      onClick={() => Submit()}
                    >
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
          </>
        )}
      </div>
    </>
  );
};

export default Login;
