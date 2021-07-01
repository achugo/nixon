import React from "react";
import styled from "styled-components";
import { AppColors } from "../../../config/AppColor";
import Header from "../../atoms/Header";
import Text from "../../atoms/Text";

const Wrapper = styled.div`
  background: url("/assets/png/service-banner.png"),
    linear-gradient(90.09deg, #5c0000 19.77%, rgba(82, 0, 0, 0.24) 101.01%);
  min-height: 50vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: overlay;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  clear: both;
  top: 10px;
  h1 {
    max-width: 400px;
    margin: 20px auto;
    text-align: center;
  }
`;

const Wrap = styled.div`
  position: relative;
`;

const CustomBanner = ({ header, children }) => {
  return (
    <Wrapper>
      <Wrap>
        <Header color={AppColors.white}>{header}</Header>
        <Text color={AppColors.white}>{children}</Text>
      </Wrap>
    </Wrapper>
  );
};

export default CustomBanner;
