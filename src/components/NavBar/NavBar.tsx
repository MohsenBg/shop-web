import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.scss";
import ContactBtn from "../Btn/Contact/ContactBtn";

const NavBar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.navbarContactBox}>
          <Link href="/">
            <div>
              <div className={styles.brandItem}>
                <img src="/assets/images/suit.svg" alt="brand" />
                <p>Shop</p>
              </div>
            </div>
          </Link>
          <Link href="/">
            <a>
              <li className={styles.navbarContact}>Home</li>
            </a>
          </Link>
          <Link href="/about">
            <div>
              <li className={styles.navbarContact}>About</li>
            </div>
          </Link>
          <Link href="/about">
            <div>
              <li className={styles.navbarContactBtn}>
                <ContactBtn />
              </li>
            </div>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
