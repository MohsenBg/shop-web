import React, { Children } from "react";
import styles from "./Layout.module.scss";
import Head from "next/head";
const Layout = ({ children }: any) => {
  return (
    <div className={styles.Layout}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
      </Head>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>made by Mohsen Bg</footer>
    </div>
  );
};

export default Layout;
