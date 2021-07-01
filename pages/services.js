import React from "react";
import styled from "styled-components";
import Layout from "../layout/Layout";
import CustomBanner from "../UI/molecules/custom-banner/CustomBanner";
import Billing from "../UI/organisms/billing/Billing";
import Services from "../UI/organisms/services/Services";
import WhyChoseUs from "../UI/organisms/who-chose-us/WhyChoseUs";

const Wrapper = styled.div`
  position: relative;
`;

const Servicespage = () => {
  return (
    <Layout>
      <CustomBanner header="We Match Our Customers Needs">
        We have different packages for your individual needs. Ranging <br />
        from Regular delivery, express delivery and bulk delivery.
      </CustomBanner>
      <WhyChoseUs />
      <Services />
      <Billing />
    </Layout>
  );
};

export default Servicespage;
