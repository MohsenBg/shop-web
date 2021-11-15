import React, { useState } from "react";
import Image from "next/image";
import styles from "./UserNav.module.scss";
import img from "../../../../public/assets/images/userImg/userDefault.png";
import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { initialState } from "../../../Redux/store";
import { ActionType } from "../../../Redux/userData/ActionTypeUD";
import router from "next/router";

const UserNav = () => {
  const [showBox, setShowBox] = useState(false);
  const userData = useSelector((state: typeof initialState) => state.userData);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch({ type: ActionType.LOGIN_OUT });
    router.push("/", undefined, { shallow: true });
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.userBar} onClick={() => setShowBox(!showBox)}>
          <span className={styles.userName}>
            {userData.userName ? userData.userName : "guest"}
          </span>
          <div className={styles.userImg}>
            <Image src={img} width="55px" height="50px" />
          </div>
          <div className={styles.icon}>
            <MdArrowDropDown />
          </div>
        </div>
        {showBox ? (
          <div className={styles.box}>
            {userData.userName ? (
              <div className={styles.options}>
                <Link href="">
                  <div className={styles.option} onClick={logOut}>
                    LogOut
                  </div>
                </Link>
                <Link href="">
                  <div className={styles.option}>Account</div>
                </Link>
              </div>
            ) : (
              <div className={styles.options}>
                <Link href="/user/Login">
                  <div className={styles.option}>Login</div>
                </Link>
                <Link href="/user/SignUp">
                  <div className={styles.option}>signUp</div>
                </Link>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UserNav;
