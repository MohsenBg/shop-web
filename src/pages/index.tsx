import React, { useEffect } from "react";
import HomeComponent from "../components/home/Products/ProductsHome";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

import { connect } from "react-redux";
import { getDataProduct } from "../Redux/AllProductData/ActionsAPD";
import { initialState } from "../Redux/store";
import { Dispatch } from "redux";
import HeaderHome from "../components/home/Hearder/HeaderHome";
import Offers from "../components/home/Offers/Offers";
import PopularProducts from "../components/home/BestProduct/PopularProducts";

const Home = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <title>Home</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.HeaderHome}>
          <HeaderHome />
        </div>
        <div className={styles.Products}>
          <div className={styles.Offers}>
            <Offers />
          </div>
          <div className={styles.PopularProducts}>
            <PopularProducts />
          </div>
        </div>
        {
          //<div className={styles.ProductsHome}>
          //<HomeComponent />
          //</div>
        }
      </div>
    </>
  );
};

export default Home;
