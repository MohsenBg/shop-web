import React from "react";
import styles from "./About.module.scss";
import Head from "next/head";
const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About</title>
      </Head>
      <p className={styles.description}>this about page</p>
    </div>
  );
};

export default About;
