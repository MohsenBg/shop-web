import "../styles/globals.scss";
import type { AppProps } from "next/app";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Loading from "../components/Loading/mainLoading/Loading";
import Question from "../components/message/Question/Question";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp;
