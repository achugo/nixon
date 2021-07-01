import React from "react";
import styled from "styled-components";
import Layout from "../layout/Layout";
import CustomBanner from "../UI/molecules/custom-banner/CustomBanner";
import Billing from "../UI/organisms/billing/Billing";
import Contactform from "../UI/organisms/contact-form/Contactform";
import Faq from "../UI/organisms/faq/Faq";
import Services from "../UI/organisms/services/Services";
import WhyChoseUs from "../UI/organisms/who-chose-us/WhyChoseUs";

const Wrapper = styled.div`
  position: relative;
`;

const Contactus = () => {
  return (
    <Layout>
      <CustomBanner header="Contact our Sales Team">
        If you need our help, have questions about how to use the platform or
        are experiencing <br /> technical difficulties, please do not hesitate
        to contact us.
      </CustomBanner>
      <Contactform />
      <Faq />
    </Layout>
  );
};

export default Contactus;
