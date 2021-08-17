import "../styles/globals.scss";
import type { AppProps } from "next/app";
import React, { Dispatch } from "redux";
import NavBar from "../components/NavBar/NavBar/NavBar";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import { useEffect } from "react";
import { getDataProduct } from "../Redux/AllProductData/ActionsAPD";
import Loading from "../components/Loading/mainLoading/Loading";
import axios from "axios";
import { Url } from "../Url";
import { ActionType } from "../Redux/userData/ActionTypeUD";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    axios.defaults.withCredentials = true;
    //@ts-ignore
    store.dispatch(getDataProduct());
  }, []);

  useEffect(() => {
    if (store.getState().userData.userName !== "") {
      store.dispatch({ type: ActionType.LOGIN_IN });
    }
  });

  return (
    <Provider store={store}>
      <Loading />
      <div className="NavBarM">
        <NavBar />
      </div>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
