import React from "react";
import { Toaster } from "react-hot-toast";

import "@component/styles/globals.css";
import { Layout } from "@component/components";
import { StateContext } from "@component/context/StateContext";

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
