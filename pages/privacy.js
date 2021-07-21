import React from "react";
import styled from "styled-components";
import Layout from "../layout/Layout";
import CustomBanner from "../UI/molecules/custom-banner/CustomBanner";
import Privacy from "../UI/organisms/privacy/Privacy";

const Wrapper = styled.div`
  position: relative;
`;

const PrivacyPolicy = () => {
  return (
    <Layout>
      <CustomBanner header="Privacy Policy"></CustomBanner>
      <Privacy />
    </Layout>
  );
};

export default PrivacyPolicy;
