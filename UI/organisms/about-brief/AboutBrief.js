import Link from "next/link";
import React from "react";
import styled from "styled-components";
import FlexItem from "../../../components/layout/FlexItem";
import FlexWrapper from "../../../components/layout/FlexWrapper";
import { AppColors } from "../../../config/AppColor";
import ArrowButton from "../../atoms/ArrowButton";
import Header from "../../atoms/Header";
import Text from "../../atoms/Text";

const Wrapper = styled.div`
  position: relative;
  background: url("/assets/svg/herocurve.svg");
  /* background-size: cover; */
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: -12vh;
  padding-top: 200px;
  margin-bottom: 100px;
`;

const WrapImage = styled.div`
  position: relative;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
  .firstImage {
    position: absolute;
    z-index: 1;

    @media screen and (max-width: 768px) {
      position: relative;
    }
  }
  .secondImage {
    position: absolute;
    left: 200px;
    top: 100px;

    @media screen and (max-width: 768px) {
      position: relative;
      left: 0px;
      top: 10px;
    }
  }
`;

const Image = styled.img`
  max-width: 100%;
`;

const AboutDesc = styled.div`
  padding-top: 40px;
  margin-bottom: 30px;
  max-width: 400px;
  line-height: 1.6;
`;

const AboutBrief = () => {
  return (
    <Wrapper>
      <div className="container">
        <FlexWrapper>
          <FlexItem flex={1}>
            <WrapImage>
              <Image
                className="firstImage"
                src="/assets/png/delivery-man.png"
                alt="delivery man"
              />
              <Image
                className="secondImage"
                src="/assets/png/delivery-man2.png"
                alt="delivery man"
              />
            </WrapImage>
          </FlexItem>
          <FlexItem flex={1}>
            <AboutDesc>
              <Header>
                Logistics Solution <br /> for every business
              </Header>
              <Text color={AppColors.ash}>
                Nixon Express Logistics, a subsidiary of Apex Nixon <br />
                Ventures Limited, is a company operating a courier <br />{" "}
                delivery service with head office in Port Harcourt, Rivers{" "}
                State, and branches in neighboring cities within southern{" "}
                Nigeria. Nixon Express Logistics operates services of{" "}
                transporting, warehousing, and maintaining goods, and plans also
                to establish depots...
              </Text>
            </AboutDesc>
            <ArrowButton link="about-us">Learn More</ArrowButton>
          </FlexItem>
        </FlexWrapper>
      </div>
    </Wrapper>
  );
};

export default AboutBrief;
