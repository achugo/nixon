import React from "react";
import styled from "styled-components";
import FlexItem from "../../../components/layout/FlexItem";
import FlexWrapper from "../../../components/layout/FlexWrapper";
import { AppColors } from "../../../config/AppColor";
import HeroText from "../../atoms/HeroText";
import Text from "../../atoms/Text";

const Wrapper = styled.div`
  background: linear-gradient(
    180deg,
    rgba(250, 251, 251, 0.0001) 0%,
    #f8fcff 100%
  );
  top: 100px;
  padding-top: 100px;
  clear: both;
  height: 70vh;
  min-height: 70vh;
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media screen and (max-width: 768px) {
    padding-top: 30px;
    height: auto;
  }
`;

const SubCaption = styled.div`
  line-height: 1.7;
  span {
    font-size: 20px;
  }
`;

const AppDownload = styled.div`
  margin-top: 40px;
`;

const AppImage = styled.img`
  margin-right: 20px !important;
  max-width: 150px;
  cursor: pointer;
`;

const RightSection = styled.div`
  background: url("/assets/png/ovalbg.png");
  height: 68vh;
  width: 50vw;
  min-height: 50vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media screen and (min-width: 1600px) {
    height: 70vh;
  }

  @media screen and (max-width: 768px) {
    background: ${AppColors.primary};
    width: 100%;
    min-height: inherit;
    height: auto;
    margin-top: 150px;
    margin-bottom: 20vh;
  }
`;

const Imagep = styled.img`
  position: absolute;
  bottom: 50px;
  z-index: 3;
  max-width: 60%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    position: relative;
    bottom: 100px;
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <FlexWrapper>
        <FlexItem flex={1}>
          <div className="padLeftContainer">
            <HeroText>
              Fast & accurate <br /> delivery services
            </HeroText>
            <SubCaption>
              <Text>
                Manages on-demand and scheduled deliveries <br />
                for a variety of user segments.
              </Text>
            </SubCaption>
            <AppDownload>
              <AppImage
                src="/assets/png/app-store.png"
                alt="app store"
                width="130px"
                height="40px"
              />
              <AppImage
                src="/assets/png/play-store.png"
                alt="app store"
                width="130px"
                height="40px"
              />
            </AppDownload>
          </div>
        </FlexItem>
        <FlexItem flex={1}>
          <RightSection>
            <Imagep src="/assets/png/app-design.png" alt="app design" />
          </RightSection>
        </FlexItem>
      </FlexWrapper>
    </Wrapper>
  );
};

export default Hero;
