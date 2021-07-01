import React from "react";
import Layout from "../layout/Layout";
import AboutBrief from "../UI/organisms/about-brief/AboutBrief";
import Billing from "../UI/organisms/billing/Billing";
import Hero from "../UI/organisms/hero/Hero";
import Services from "../UI/organisms/services/Services";
import WhyChoseUs from "../UI/organisms/who-chose-us/WhyChoseUs";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <WhyChoseUs />
      <Services />
      <AboutBrief />
      <Billing />
    </Layout>
  );
}
