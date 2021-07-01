import Nav from "../components/nav/Nav";
import React from "react";
import Footer from "../components/footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
