import React, { useState } from "react";
import Link from "next/link";
import styles from "./NavBar.module.scss";
import { navItem } from "../../../Items/NavItem";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import ContactBtn from "../../Btn/Contact/ContactBtn";
import UserNav from "../UserNav/UserNav";
import SearchNav from "../SearchNav/SearchNav";

const NavBar = () => {
  const [menuStatus, setMenuStatus] = useState<any>("none");

  const menuHandler = () => {
    if (menuStatus === "none") {
      setMenuStatus("open");
    }
    if (menuStatus === "open") {
      setMenuStatus("close");
    }
    if (menuStatus === "close") {
      setMenuStatus("open");
    }
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarContactBox}>
          <div className={styles.menuIcon} onClick={menuHandler}>
            <HiOutlineMenuAlt1 />
          </div>
          <div className={styles.ContactBtn}>
            <UserNav />
          </div>
          <div className={styles.searchNav}>
            <SearchNav />
          </div>
        </div>
        <div
          className={
            menuStatus === "none"
              ? `${styles.boxContainerNav}`
              : menuStatus === "close"
              ? `${styles.boxContainerNav} ${styles.boxDiActive}`
              : menuStatus === "open"
              ? `${styles.boxContainerNav} ${styles.boxActive}`
              : `${styles.boxContainerNav}`
          }
        >
          <div className={styles.NavCardContainer}>
            {navItem.map((item: any) => {
              return (
                <Link key={item.id} href={item.link}>
                  <div className={styles.navCard}>
                    <div className={styles.iconNav}>
                      <item.icon />
                    </div>
                    <div className={styles.nameNav}>
                      <span>{item.name}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
/*
     <Link href="/">
            <div>
              <div className={styles.brandItem}>
                <img src="/assets/images/suit.svg" alt="brand" />
                <p>Shop</p>
              </div>
            </div>
          </Link>
*/
