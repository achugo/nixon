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
              Listing more than one? Enjoy full control over your
              advertisements, manage your entire space. Once you list a property
              on our platform, you only have to sit back and watch the world
              want it.
            </p>
            <p>
              If you’re looking for a real estate service that will operate as
              an extension to your family - stay with us and see!
            </p>
          </ContentSection>
          <ContentSection>
            <Header>Our Mission</Header>
            <p>
              Listing more than one? Enjoy full control over your
              advertisements, manage your entire space. Once you list a property
              on our platform, you only have to sit back and watch the world
              want it.
            </p>
            <p>
              If you’re looking for a real estate service that will operate as
              an extension to your family - stay with us and see!
            </p>
          </ContentSection>
        </FlexItem>
        <FlexItem flex={7}>
          <WrapImage>
            <Image src="/assets/png/thumbs-up.png" alt="man holding book" />
          </WrapImage>
        </FlexItem>
      </FlexWrapper>
    </Wrapper>
  );
};

export default Aboutsection3;
