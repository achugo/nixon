import React from "react";
import styled from "styled-components";
import FlexItem from "../../../components/layout/FlexItem";
import FlexWrapper from "../../../components/layout/FlexWrapper";
import { AppColors } from "../../../config/AppColor";
import { AppFont } from "../../../config/AppFont";
import Header from "../../atoms/Header";
import Text from "../../atoms/Text";

const Wrapper = styled.div`
  position: relative;
  padding-top: 10em;
  background: url("/assets/svg/herocurve.svg");
  background-size: contain;
  width: 100vw;
  background-repeat: no-repeat;
  margin-top: -10vh;
`;

const TinyHeading = styled.h4`
  color: ${AppColors.darkwine};
  font-family: ${AppFont.BOLD};
`;

const Paragraphs = styled.div`
  p {
    margin-top: 3em;
  }

  .first {
    margin-top: 4.5em !important;
  }
`;

const Aboutsection1 = () => {
  return (
    <Wrapper>
      <div className="container">
        <FlexWrapper>
          <FlexItem flex={5}>
            <TinyHeading>ABOUT US</TinyHeading>
            <Header>
              We provide enterprises <br />
              with innovative <br /> technology for small to <br /> space
              enterprises
            </Header>
          </FlexItem>
          <FlexItem flex={7}>
            <Paragraphs>
              <p className="first">
                <Text color={AppColors.ash}>
                  Nixon Express Logistics, a subsidiary of Apex Nixon Ventures
                  Limited, is a company operating a courier delivery service
                  with head office in Port Harcourt, Rivers State, and branches
                  in neighboring cities within southern Nigeria.
                </Text>
              </p>

              <p>
                <Text color={AppColors.ash}>
                  Nixon Express Logistics operates services of transporting,
                  warehousing, and maintaining goods, and plans also to
                  establish depots and associated facilities in different cities
                  within regions of operation. It supports the marketing and
                  distribution of various goods and effects, leveraging
                  transportation facilities and internet technology. Nixon
                  Express Logistics is also poised to support the business of
                  travel and tourism.
                </Text>
              </p>
              <p>
                <Text color={AppColors.ash}>
                  We have a Head Office servicing Port Harcourt Metropolis, and
                  is supported by hubs and branches in other major cities in SE
                  & SS Nigeria with online mobile capability, where customers
                  can make their orders and requests, and also make payments.
                </Text>
              </p>
            </Paragraphs>
          </FlexItem>
        </FlexWrapper>
      </div>
    </Wrapper>
  );
};

export default Aboutsection1;
