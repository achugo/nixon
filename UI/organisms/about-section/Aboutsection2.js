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
            <Image src="/assets/png/book-man.png" alt="man holding book" />
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
            <Wrap>
              <FlexWrapper>
                <FixedFlexItem flex={1}>
                  <Icon>✓</Icon>
                </FixedFlexItem>
                <FixedFlexItem flex={20}>
                  <Content>
                    Operate services of transporting, warehousing, cargo
                    handling and associated facilities in different cities
                    within regions of operation.
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
                    Operate services of transporting, warehousing, cargo
                    handling and associated facilities in different cities
                    within regions of operation.
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
