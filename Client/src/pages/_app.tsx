import "../styles/globals.scss";
import type { AppProps } from "next/app";
import React, { Dispatch } from "redux";
import NavBar from "../components/NavBar/NavBar";
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
    axios.get(`${Url}api/checkLogin`).then((response) => {
      console.log(response.data);
      if (response.data.LoggedIn) {
        store.dispatch({ type: ActionType.LOGIN_IN });
        store.dispatch({
          type: ActionType.USER_DATA,
          PayLoad1: response.data.user[0].UserName,
          PayLoad2: "",
        });
      } else {
        return null;
      }
    });
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
