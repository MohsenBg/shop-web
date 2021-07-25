import React, { useEffect } from "react";
import HomeComponent from "../components/home/Home";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import styles from "../components/home/Home.module.scss";
import { connect } from "react-redux";
import { getDataProduct } from "../Redux/AllProductData/ActionsAPD";
import { initialState } from "../Redux/store";
import { Dispatch } from "redux";
import Loading from "../components/Loading/mainLoading/Loading";

const Home = ({ fetchProductData, loading, ProductData }: any) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <title>Home</title>
      </Head>

      <Layout>
        <HomeComponent />
      </Layout>
    </>
  );
};
const mapStateToProps = (state: typeof initialState) => {
  return {
    Loading: state.AllProductData.loading,
    ProductData: state.AllProductData.productData,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    //@ts-ignore
    fetchProductData: () => dispatch(getDataProduct()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
