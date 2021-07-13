import React from "react";
import styled from "styled-components";
import FixedFlexItem from "../../../components/layout/FixedFlexItem";
import FlexItem from "../../../components/layout/FlexItem";
import FlexWrapper from "../../../components/layout/FlexWrapper";
import { AppColors } from "../../../config/AppColor";
import { AppFont } from "../../../config/AppFont";
import Header from "../../atoms/Header";

const Wrapper = styled.div`
  background-color: ${AppColors.pinkish};
  padding-top: 7em;
  padding-bottom: 7em;
  margin-bottom: 5em;
`;

const Wrap = styled.div`
  margin-bottom: 30px;
`;

const Content = styled.span`
  font-family: ${AppFont.REGULAR};
  color: ${AppColors.ash};
  span {
    font-family: ${AppFont.BOLD};
    color: ${AppColors.black};
  }
`;

const Icon = styled.i`
  color: ${AppColors.orange};
`;

const WrapImage = styled.div`
  text-align: center;
  position: absolute;

  @media screen and (max-width: 768px) {
    position: relative;
  }
`;
const Image = styled.img`
  position: relative;
  max-width: 100%;
`;

const Billing = () => {
  return (
    <Wrapper className="padLeftContainer marginRightContainer">
      <FlexWrapper>
        <FlexItem flex={1}>
          <Header>Affordable Billing</Header>
          <Wrap>
            <FlexWrapper>
              <FixedFlexItem flex={1}>
                <Icon>✓</Icon>
              </FixedFlexItem>
              <FixedFlexItem flex={20}>
                <Content>
                  <span>Single cargo billing</span>: <br /> We offer transparent
                  but competitive pricing <br />
                  that is dependent on the distance between <br /> pick-off and
                  drop-off points.
                </Content>
              </FixedFlexItem>
            </FlexWrapper>
          </Wrap>
          <Wrap>
            <FlexWrapper>
              <FixedFlexItem flex={1}>
                <Icon>✓</Icon>
              </FixedFlexItem>
              <FixedFlexItem flex={20}>
                <Content>
                  <span>Discounted Billing:</span>: <br /> We offer discounted
                  billing rates for our <br /> frequent customers and bulk
                  merchants <br />
                  Our Customer Care lines for attractive offers
                </Content>
              </FixedFlexItem>
            </FlexWrapper>
          </Wrap>
        </FlexItem>
        <FlexItem flex={1}>
          <WrapImage>
            <Image src="/assets/png/man-holding-box.png" alt="hold box" />
          </WrapImage>
        </FlexItem>
      </FlexWrapper>
    </Wrapper>
  );
};

export default Billing;
