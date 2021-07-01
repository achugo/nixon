import React from "react";
import styled from "styled-components";
import { AppColors } from "../../../config/AppColor";
import SubHeader from "../../atoms/SubHeader";
import Text from "../../atoms/Text";

const Wrapper = styled.div`
  position: relative;
`;

const Dot = styled.img`
  position: relative;
  margin-bottom: 15px;
  max-width: 25px;
`;
const ServiceName = styled.div`
  margin-top: 5px;
  h1 {
    margin: 5px;
  }
`;

const WrapText = styled.div`
  position: relative;
  margin-top: 10px;
`;

const Service = ({ service, bracket, children }) => {
  return (
    <Wrapper>
      <Dot src="/assets/svg/dot.png" />
      <ServiceName>
        <SubHeader color={AppColors.white}>{service}</SubHeader>
        <SubHeader color={AppColors.white}>{bracket}</SubHeader>
      </ServiceName>
      <WrapText>
        <Text color={AppColors.white}>{children}</Text>
      </WrapText>
    </Wrapper>
  );
};

export default Service;
