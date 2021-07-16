import React from "react";
import HomeComponent from "../components/home/Home";
import Layout from "../components/Layout/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
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
}
