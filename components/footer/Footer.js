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
  padding: 5em 0;
  background-color: ${AppColors.black};

  .custom {
    max-width: 500px;
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
  @media screen and (min-width: 768px) {
    margin-left: 30px;
  }
  span {
    display: block;
    line-height: 3;
  }
`;

const Wrap1 = styled.div`
  margin-top: 80px;
  span {
    display: block;
    line-height: 1.6;
  }
`;

const CustomFlex = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    max-height: 25px;
    margin-left: 15px;
    cursor: pointer;
  }
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
                  Nixon Express Logistics operates business of packaging,
                  transporting and delivery of goods within Greater Port
                  Harcourt Metropolis, and plans to open additional hubs in
                  other cities with Southeast and South-south Nigeria.,
                </Text>
              </div>
            </FlexItem>

            <FlexItem flex={2}>
              <Wrap1>
                <FooterHeader color={AppColors.white}>Contact</FooterHeader>
                <Text color={AppColors.light}>
                  Suite #306, Emthel Mall, Plot 6c Trans Amadi Industrial Layout
                  Oginigba Junction, Port Harcourt, Rivers State - Nigeria
                </Text>
                <br />
                <Text color={AppColors.light}>
                  {" "}
                  nixonexpresslogistics@gmail.com
                </Text>
                <br />
                <Text color={AppColors.light}>
                  09134446966, 08180044966, 09120117222
                </Text>
              </Wrap1>
            </FlexItem>
            <FlexItem flex={1}>
              <Wrap className="block">
                <FooterHeader color={AppColors.white}>Product</FooterHeader>
                <Text color={AppColors.light}>
                  <Link href="/about">About</Link>
                </Text>
                <Text color={AppColors.light}>
                  <Link href="/services">Services</Link>
                </Text>
                <Text color={AppColors.light}>
                  <Link href="/contact">FAQ</Link>
                </Text>
                <Text color={AppColors.light}>
                  <Link href="/privacy">Privacy Policy</Link>
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
            <div>
              <a
                href="https://facebook.com/nixonXpress"
                target="_blank"
                rel="noreferrer"
              >
                <Logo src="assets/svg/facebook.svg" alt="facebook" />
              </a>

              <a
                href="https://instagram.com/nixonXpress"
                target="_blank"
                rel="noreferrer"
              >
                <Logo src="assets/svg/instagram.svg" alt="instagram" />
              </a>

              <a
                href="https://twitter.com/nixonXpress"
                target="_blank"
                rel="noreferrer"
              >
                <Logo src="assets/svg/twitter.svg" alt="twitter" />
              </a>
            </div>
          </CustomFlex>
        </Bottom>
      </div>
    </Wrapper>
  );
};

export default Footer;
