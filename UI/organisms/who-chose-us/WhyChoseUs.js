import React from "react";
import styled from "styled-components";
import FlexItem from "../../../components/layout/FlexItem";
import FlexWrapper from "../../../components/layout/FlexWrapper";
import { AppColors } from "../../../config/AppColor";
import Header from "../../atoms/Header";
import SubHeader from "../../atoms/SubHeader";
import Text from "../../atoms/Text";

const Wrapper = styled.div`
  background: url("/assets/svg/herocurve.svg");
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: -10vh;
  position: relative;
  text-align: center;
  z-index: 1;

  @media screen and (max-width: 768px) {
    background: none;
    //margin-top: 40vh;
  }
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
          <Header color={AppColors.black}>Why Choose Nixon Express</Header>
          <Text color={AppColors.ash}>
            Our value propositions as top-rated logistics operators are:
          </Text>
        </HeaderSection>
        <FlexWrapper>
          <FlexItem flex={1}>
            <Wrap>
              <SvgWrap>
                <Image src="/assets/svg/responsiveness.svg" alt="responsive" />
              </SvgWrap>
              <SubHeader color={AppColors.black}>
                Timely Delivery Services{" "}
              </SubHeader>
              <Text color={AppColors.ash}>
                Delivery Services with only one thing in mind… the satisfaction
                of our customers.
              </Text>
            </Wrap>
          </FlexItem>
          <FlexItem flex={1}>
            <Wrap>
              <SvgWrap>
                <Image src="/assets/svg/convenience.svg" alt="responsive" />
              </SvgWrap>
              <SubHeader color={AppColors.black}>Convenience</SubHeader>
              <Text color={AppColors.ash}>
                All you need to do is to prepare your parcel and contact us for
                pick-up. You can also drop it off at our office or nearest hub.
              </Text>
            </Wrap>
          </FlexItem>
          <FlexItem flex={1}>
            <Wrap>
              <SvgWrap>
                <Image src="assets/svg/costeffective.svg" alt="responsive" />
              </SvgWrap>
              <SubHeader color={AppColors.black}>Assurance</SubHeader>
              <Text color={AppColors.ash}>
                We treat each customer like the only customer; we value our
                reputation in assuring the safety of your packages
              </Text>
            </Wrap>
          </FlexItem>
          <FlexItem flex={1}>
            <Wrap>
              <SvgWrap>
                <Image src="/assets/svg/assurance.svg" alt="responsive" />
              </SvgWrap>
              <SubHeader color={AppColors.black}>Responsiveness</SubHeader>
              <Text color={AppColors.ash}>
                Our ultimate goal is to make your delivery seamless, fast,
                trackable and affordable while keeping quality in check.
              </Text>
            </Wrap>
          </FlexItem>
        </FlexWrapper>
      </div>
    </Wrapper>
  );
};

export default WhyChoseUs;
