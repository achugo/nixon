import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { AppColors } from "../../config/AppColor";
import FooterHeader from "../../UI/atoms/FooterHeader";
import Text from "../../UI/atoms/Text";
import FlexItem from "../layout/FlexItem";
import FlexWrapper from "../layout/FlexWrapper";

const Wrapper = styled.footer`
  margin-top: 10em;
  position: relative;
  padding: 5em 0;
  background-color: ${AppColors.black};

  .custom {
    span {
      line-height: 1.8;
    }
  }
`;

const Top = styled.div`
  margin: 20px 0;
`;

const Bottom = styled.div`
  border-top: 1px solid ${AppColors.light};
  padding: 1em 0;
  margin-top: 7em;
`;

const LogoSection = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

const Logo = styled.img`
  max-width: 150px;
`;

const Wrap = styled.div`
  margin-top: 80px;
  span {
    display: block;
    line-height: 3;
  }
`;

const CustomFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <Top>
          <FlexWrapper>
            <FlexItem flex={6}>
              <LogoSection>
                <Logo src="/assets/svg/logo.svg" alt="logo" />
              </LogoSection>
              <div className="custom">
                <Text color={AppColors.light}>
                  Nixon Express Logistics operates services of transporting,{" "}
                  <br /> warehousing, and maintaining goods, and plans also to{" "}
                  <br /> establish depots and associated.
                </Text>
              </div>
            </FlexItem>
            <FlexItem flex={1}>
              <Wrap>
                <FooterHeader color={AppColors.white}>Product</FooterHeader>
                <Text color={AppColors.light}>Nixon App</Text>
                <Text color={AppColors.light}>Services</Text>
                <Text color={AppColors.light}>Pricing</Text>
                <Text color={AppColors.light}>
                  <Link href="/contact">FAQ</Link>
                </Text>
              </Wrap>
            </FlexItem>
            <FlexItem flex={1}>
              <Wrap>
                <FooterHeader color={AppColors.white}>Product</FooterHeader>
                <Text color={AppColors.light}>
                  <Link href="/about">About</Link>
                </Text>
                <Text color={AppColors.light}>Terms </Text>
                <Text color={AppColors.light}>
                  <Link href="/privacy">Privacy Policy</Link>
                </Text>
                <Text color={AppColors.light}>
                  <Link href="/contact">Contact Us</Link>
                </Text>
              </Wrap>
            </FlexItem>
          </FlexWrapper>
        </Top>
        <Bottom>
          <CustomFlex>
            <div>
              <Text color={AppColors.light}>
                Copyright © 2021. Nixon Express Logistics
              </Text>
            </div>
            <div>socials</div>
          </CustomFlex>
        </Bottom>
      </div>
    </Wrapper>
  );
};

export default Footer;
