import React, { useEffect, useState } from "react";
import styles from "../../styles/SignUp.module.scss";
import * as RiIcons from "react-icons/ri";
import Link from "next/link";
import axios from "axios";
import { Url } from "../../Url";
import { sha256 } from "crypto-hash";
import Error from "../../components/message/Error/Error";
import router from "next/router";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import Spinner from "../../components/Loading/spinner/Spinner";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userNameValue, setUserNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  //Error
  const [hiddenError, setHiddenError] = useState(true);
  const [textError, setTextError] = useState("");
  const [iconError, setIconError] = useState("");
  const [textBtn, setTextBtn] = useState<any>("");

  //Check all
  const [checkChartPassword, setCheckChartPassword] = useState<any>("none");
  const [checkConfirmPassword, setConfirmPassword] = useState<any>("none");
  const [checkQuinicUserName, setCheckQuinicUserName] = useState<any>("none");
  const [checkChartUserName, setCheckChartUserName] = useState<any>("none");

  //ConfirmPassword
  useEffect(() => {
    if (confirmPasswordValue.length >= 1) {
      if (passwordValue === confirmPasswordValue) {
        setConfirmPassword("correct");
      } else {
        setConfirmPassword("wrong");
      }
    } else {
      setConfirmPassword("none");
    }
  }, [confirmPasswordValue, passwordValue]);

  //checkUserNameChart
  useEffect(() => {
    if (userNameValue.length >= 1) {
      if (userNameValue.length >= 5) {
        setCheckChartUserName("correct");
      } else {
        setCheckChartUserName("wrong");
      }
    } else {
      setCheckChartUserName("none");
    }
  }, [userNameValue]);

  //userQuinic
  useEffect(() => {
    if (userNameValue.length >= 5) {
      axios
        .post(`${Url}api/checkQuinicName`, {
          userName: userNameValue,
        })
        .then((response) => {
          if (response.data.length >= 1) {
            setCheckQuinicUserName("wrong");
          } else {
            setCheckQuinicUserName("correct");
          }
        });
    } else {
      setCheckQuinicUserName("none");
    }
  }, [userNameValue]);

  //checkPasswordChart
  useEffect(() => {
    if (passwordValue.length >= 1) {
      if (passwordValue.length >= 8) {
        setCheckChartPassword("correct");
      } else {
        setCheckChartPassword("wrong");
      }
    } else {
      setCheckChartPassword("none");
    }
  }, [passwordValue]);

  const submit = async () => {
    if (
      checkChartPassword === "correct" &&
      checkConfirmPassword === "correct" &&
      checkQuinicUserName === "correct" &&
      checkChartUserName === "correct"
    ) {
      const hash = await sha256(passwordValue);
      await axios
        .post(`${Url}api/postUserData`, {
          userName: userNameValue,
          password: hash,
        })
        .then((response) => {
          setTextError("you are successfully SingUp");
          setIconError("message");
          setTextBtn("login");
          setHiddenError(false);
        });
    } else {
      setTextError("singUP failed make sure all condition check");
      setIconError("error");
      setTextBtn("OK");
      setHiddenError(false);
    }
  };

  const ErrorHandlerBtn = (btn: any) => {
    if (btn === "OK") {
      setHiddenError(true);
    }
    if (btn === "login") {
      router.push("/user/Login", undefined, { shallow: true });
    }
  };

  return (
    <div className={styles.Container}>
      <Error
        title={"SingUp"}
        text={textError}
        hidden={hiddenError}
        countButton={1}
        btn1={textBtn}
        icon={iconError}
        getValueBtn={(value: any) => ErrorHandlerBtn(value)}
      />
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
        <div className={styles.warningBox}>
          <ul>
            <li
              className={
                checkChartUserName === "correct"
                  ? styles.correctValue
                  : checkChartUserName === "wrong"
                  ? styles.wrongValue
                  : styles.none
              }
            >
              {checkChartUserName === "correct" ? (
                <>
                  <div className={styles.iconChecker}>
                    <BsCheckCircle />
                  </div>
                </>
              ) : checkChartUserName === "wrong" ? (
                <div className={styles.iconChecker}>
                  <AiFillCloseCircle />
                </div>
              ) : checkChartUserName === "none" ? (
                <div className={styles.spinner}>
                  <Spinner />
                </div>
              ) : null}
              userName should have 5 character
            </li>
            <li
              className={
                checkQuinicUserName === "correct"
                  ? styles.correctValue
                  : checkQuinicUserName === "wrong"
                  ? styles.wrongValue
                  : styles.none
              }
            >
              {checkQuinicUserName === "correct" ? (
                <>
                  <div className={styles.iconChecker}>
                    <BsCheckCircle />
                  </div>
                </>
              ) : checkQuinicUserName === "wrong" ? (
                <div className={styles.iconChecker}>
                  <AiFillCloseCircle />
                </div>
              ) : checkQuinicUserName === "none" ? (
                <div className={styles.spinner}>
                  <Spinner />
                </div>
              ) : null}
              userName should be quinic
            </li>
            <li
              className={
                checkChartPassword === "correct"
                  ? styles.correctValue
                  : checkChartPassword === "wrong"
                  ? styles.wrongValue
                  : styles.none
              }
            >
              {checkChartPassword === "correct" ? (
                <>
                  <div className={styles.iconChecker}>
                    <BsCheckCircle />
                  </div>
                </>
              ) : checkChartPassword === "wrong" ? (
                <div className={styles.iconChecker}>
                  <AiFillCloseCircle />
                </div>
              ) : checkChartPassword === "none" ? (
                <div className={styles.spinner}>
                  <Spinner />
                </div>
              ) : null}
              Password should have 8 character
            </li>
            <li
              className={
                checkConfirmPassword === "correct"
                  ? styles.correctValue
                  : checkConfirmPassword === "wrong"
                  ? styles.wrongValue
                  : styles.none
              }
            >
              {checkConfirmPassword === "correct" ? (
                <>
                  <div className={styles.iconChecker}>
                    <BsCheckCircle />
                  </div>
                </>
              ) : checkConfirmPassword === "wrong" ? (
                <div className={styles.iconChecker}>
                  <AiFillCloseCircle />
                </div>
              ) : checkConfirmPassword === "none" ? (
                <div className={styles.spinner}>
                  <Spinner />
                </div>
              ) : null}
              Confirm Password
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
