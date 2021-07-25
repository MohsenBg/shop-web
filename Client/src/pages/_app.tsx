import "../styles/globals.scss";
import type { AppProps } from "next/app";
import React, { Dispatch } from "redux";
import NavBar from "../components/NavBar/NavBar";
import StoreContainer from "../components/store/StoreContainer";
import { connect, Provider } from "react-redux";
import { initialState, store } from "../Redux/store";
import { useEffect, useState } from "react";
import { getDataProduct } from "../Redux/AllProductData/ActionsAPD";
import Loading from "../components/Loading/mainLoading/Loading";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    //@ts-ignore
    store.dispatch(getDataProduct());
  }, []);

  return (
    <Provider store={store}>
      <Loading />
      <NavBar />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
