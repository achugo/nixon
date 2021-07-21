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
  margin-top: 7em;
`;

const WrapImage = styled.div`
  position: relative;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 600px;
  border-radius: 15px;
`;

const ContentSection = styled.div`
  padding: 3em;
  p {
    margin-top: 1em;
    font-family: ${AppFont.REGULAR};
    color: ${AppColors.ash};
  }
`;

const Icon = styled.i`
  color: ${AppColors.darkwine};
`;

const Content = styled.span`
  font-family: ${AppFont.REGULAR};
  color: ${AppColors.ash};
`;

const Wrap = styled.div`
  margin: 2em 0;
`;

const Aboutsection2 = () => {
  return (
    <Wrapper className="container">
      <FlexWrapper>
        <FlexItem flex={5}>
          <WrapImage>
            <Image src="/assets/rider.jpeg" alt="rider" />
          </WrapImage>
        </FlexItem>
        <FlexItem flex={7}>
          <ContentSection>
            <Header>Our Purpose</Header>
            <p>
              Operate a safe and trackable courier delivery service within major
              cities in SS and SE Nigeria. And Operate as carriers and
              transporters of goods and packages. While Supporting marketing and
              distribution of various goods and effects, and leveraging
              transportation facilities and internet technology.
            </p>

            <Header>Our Core Values are:</Header>
            <Wrap>
              <FlexWrapper>
                <FixedFlexItem flex={1}>
                  <Icon>✓</Icon>
                </FixedFlexItem>
                <FixedFlexItem flex={20}>
                  <Content>
                    <b>Honesty & Integrity:</b> We treat each customer as only a
                    customer; we value our reputation in assuring you a safe
                    delivery.
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
                    <b>Customer-focus:</b> We are focused on exceeding customer
                    expectations through competitive pricing and just-in-time
                    delivery.
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
                    <b>Teamwork:</b> We imbue a sense of urgency to pick up and
                    deliver important packages within 24 hours within a local.
                    delivery.
                  </Content>
                </FixedFlexItem>
              </FlexWrapper>
            </Wrap>
          </ContentSection>
        </FlexItem>
      </FlexWrapper>
    </Wrapper>
  );
};

export default Aboutsection2;
