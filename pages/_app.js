import "../styles/globals.css";
import React from "react";
import "../scss/style.css";
import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  margin:0 auto;
  padding: 0;
}

body{
  min-height:100vh;
  margin-top:0;
  font-family:Verdana;
}
`;

const theme = {
  colors: {
    primary: "#fafafa",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nixon Express Logistics</title>
        <meta
          name="description"
          content="Limitless, Timeless
Services Everytime."
        />
        <link rel="icon" href="/favicon.png" />
        <meta name="title" content="Limitless, Timeless Services Everytime." />
        <meta
          name="description"
          content="Nixon Express Logistics, a subsidiary of Apex Nixon Ventures Limited, is a company operating a courier delivery service with head office in Port Harcourt, Rivers State, and branches in neighboring cities within southern Nigeria"
        />
        <meta
          name="keywords"
          content="Dispatch riders and services in Port Harcourt,Courier delivery services in Port Harcourt,Delivery companies in Port Harcourt,Dedicated bike delivery service,Apex Nixon Ventures Limited,Nixon Express delivery service,Delivery services provider,Bike riders,Parcel pickup and delivery,Gift delivery service,Food pick-up and delivery service,Home delivery service,Logistics company in Rivers State,Fastfood delivery service in Port Harcourt,Storage service,Bulk parcel delivery service,Package delivery service,Doorstep delivery service,Distribution services,Storage services near me,Grocery delivery service,Supply services,Delivery riders,Nationwide delivery services,Shipping agent and agency,Express delivery service,Same day delivery,Haulage company business,Package delivery service,Fast city courier delivery service,Secure delivery service,Package delivery to from Port Harcourt,Courier delivery companies in Port Harcourt,Courier delivery companies in Rivers State,Courier delivery companies in SS region Nigeria,Courier delivery companies in Nigeria,Courier delivery from Port Harcourt to Owerri,Reliable courier service in Port Harcourt,Bulk mails delivery service,Intra-city express delivery company,Airport cargo pick-up and delivery service,Cargo handling and delivery,Air Freight and courier service delivery,Freight and parcel delivery,Affordable and fast delivery companies in Port-Harcourt,Customer packages for delivery,Fast delivery in port harcourt,Safe storage in Port-Harcourt,Delivery company near me,Delivery estimates for packages,Transporting goods,How can I Store packages in port-harcourt,Best storage company in Port-Harcourt,"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="20 days" />
      </Head>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
