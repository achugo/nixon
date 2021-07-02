import React from "react";
import styled from "styled-components";
import Layout from "../layout/Layout";
import CustomBanner from "../UI/molecules/custom-banner/CustomBanner";
import Aboutsection1 from "../UI/organisms/about-section/Aboutsection1";
import Aboutsection2 from "../UI/organisms/about-section/Aboutsection2";
import Aboutsection3 from "../UI/organisms/about-section/Aboutsection3";
import Services from "../UI/organisms/services/Services";
import Team from "../UI/organisms/teams/Team";
import WhyChoseUs from "../UI/organisms/who-chose-us/WhyChoseUs";

const Wrapper = styled.div`
  position: relative;
`;

const Aboutpage = () => {
  return (
    <Layout>
      <CustomBanner header="Experience you can trust">
        From year to year we strive to invent the most innovative technology
        <br /> that is used by both small enterprises and space enterprises.
      </CustomBanner>
      <Aboutsection1 />
      <Aboutsection2 />
      <Aboutsection3 />
      <Team />
    </Layout>
  );
};

export default Aboutpage;
