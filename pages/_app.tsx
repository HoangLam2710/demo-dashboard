import Head from "next/head";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../components/common/Layout";
import OpenSidebarContextProvider from "../lib/context/OpenSidebarContext";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType;
  };
};

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      {Component.PageLayout ? (
        <Component {...pageProps} />
      ) : (
        <OpenSidebarContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </OpenSidebarContextProvider>
      )}
    </>
  );
}

export default MyApp;
