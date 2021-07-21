import React from "react";
import styled from "styled-components";
import FixedFlexItem from "../../../components/layout/FixedFlexItem";
import FlexItem from "../../../components/layout/FlexItem";
import FlexWrapper from "../../../components/layout/FlexWrapper";
import { AppColors } from "../../../config/AppColor";
import { AppFont } from "../../../config/AppFont";
import Header from "../../atoms/Header";
import Text from "../../atoms/Text";

const Wrapper = styled.div`
  position: relative;
`;

const WrapImage = styled.div`
  position: relative;
  margin: 4em;
`;

const Image = styled.img`
  max-width: 100%;
`;

const ContentSection = styled.div`
  padding-top: 3em;
  p {
    margin-top: 1em;
    font-family: ${AppFont.REGULAR};
    color: ${AppColors.ash};
  }
`;

const Wrap = styled.div`
  margin: 2em 0;
`;

const Aboutsection3 = () => {
  return (
    <Wrapper className="container">
      <FlexWrapper>
        <FlexItem flex={5}>
          <ContentSection>
            <Header>Our Mission</Header>
            <p>
              To establish a world-class courier and delivery services company
              that provides a wide range of courier and delivery services at
              affordable prices to the residents of Port Harcourt metropolis,
              Owerri and other major cities in SE and SS regions of Nigeria.
            </p>
          </ContentSection>
          <ContentSection>
            <Header>Our Vision</Header>
            <p>
              To build a top-class courier and delivery services company that
              would be the first-choice service provider in the Greater Port
              Harcourt Area, and across entire SE and SS Nigeria
            </p>
          </ContentSection>
        </FlexItem>
        <FlexItem flex={7}>
          <WrapImage>
            <Image src="/assets/girl-with-helmet.jpg" alt="helmet girl" />
          </WrapImage>
        </FlexItem>
      </FlexWrapper>
    </Wrapper>
  );
};

export default Aboutsection3;
