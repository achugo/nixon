import React from "react";
import styled from "styled-components";
import FlexItem from "../../../components/layout/FlexItem";
import FlexWrapper from "../../../components/layout/FlexWrapper";
import { AppColors } from "../../../config/AppColor";
import Header from "../../atoms/Header";
import SubHeader from "../../atoms/SubHeader";
import Text from "../../atoms/Text";

const Wrapper = styled.div`
  background-color: ${AppColors.pinkish};
  position: relative;
  text-align: center;

  .container {
    padding-top: 20vh;
  }
`;
const HeaderSection = styled.div`
  margin: 20px 0;
`;

const SvgWrap = styled.div`
  margin: 30px auto;
`;
const Image = styled.img`
  position: relative;
  max-width: 100%;
`;

const Wrap = styled.div`
  padding: 20px;
`;

const WhyChoseUs = () => {
  return (
    <Wrapper>
      <div className="container">
        <HeaderSection>
          <Header color={AppColors.black}>Our Values</Header>
          <Text color={AppColors.ash}>
            We strive to redefine the standard of excellence.
          </Text>
        </HeaderSection>
        <FlexWrapper>
          <FlexItem flex={1}>
            <Wrap>
              <SvgWrap>
                <Image src="/assets/svg/responsiveness.svg" alt="responsive" />
              </SvgWrap>
              <SubHeader color={AppColors.black}>Honesty & Integrity</SubHeader>
              <Text color={AppColors.ash}>
                We treat each customer as only a customer; we value our
                reputation in assuring you a safe delivery.
              </Text>
            </Wrap>
          </FlexItem>
          <FlexItem flex={1}>
            <Wrap>
              <SvgWrap>
                <Image src="/assets/svg/responsiveness.svg" alt="responsive" />
              </SvgWrap>
              <SubHeader color={AppColors.black}>Customer-focus</SubHeader>
              <Text color={AppColors.ash}>
                We are focused on exceeding customer expectations through
                competitive pricing and just-in-time delivery.
              </Text>
            </Wrap>
          </FlexItem>
          <FlexItem flex={1}>
            <Wrap>
              <SvgWrap>
                <Image src="assets/svg/responsiveness.svg" alt="responsive" />
              </SvgWrap>
              <SubHeader color={AppColors.black}>Teamwork</SubHeader>
              <Text color={AppColors.ash}>
                We imbue a sense of urgency to pick up and deliver important
                packages within 24 hours within a local.
              </Text>
            </Wrap>
          </FlexItem>
        </FlexWrapper>
      </div>
    </Wrapper>
  );
};

export default WhyChoseUs;
