import React from "react";
import styled from "styled-components";
import FlexItem from "../../../components/layout/FlexItem";
import FlexWrapper from "../../../components/layout/FlexWrapper";
import { AppColors } from "../../../config/AppColor";
import Header from "../../atoms/Header";
import Text from "../../atoms/Text";
import Service from "../../molecules/service/Service";

const Wrapper = styled.div`
  padding: 3em 0;

  background-image: url("/assets/svg/wave.svg");
  /* background-size: cover; */
  background-size: contain;
  background-repeat: no-repeat;
  min-height: 10vh;
  .container {
    position: relative;
    /* top: -10vh; */
  }
`;

const ColorWrap = styled.div`
  position: relative;
  top: 5vh;
  background-color: ${AppColors.darkwine};
  margin-top: 2em;
  padding-bottom: 7em;
`;

const HeaderSection = styled.div`
  text-align: center;
  padding: 3em 0;
`;

const ServicesSection = styled.div`
  position: relative;
`;
const AlignRight = styled.div`
  text-align: right;
  padding: 1em 3em;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const ImageWrap = styled.div`
  padding: 10px;
  text-align: center;
`;

const Image = styled.img`
  position: relative;
  max-width: 100%;
`;

const AlignLeft = styled.div`
  text-align: left;
  padding: 1em 3em;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Services = () => {
  return (
    <Wrapper>
      <ColorWrap>
        <div className="container">
          <HeaderSection>
            <Header color={AppColors.white}>We Match Our Customer Needs</Header>
            <Text color={AppColors.white}>
              We have different packages for your individual needs. Ranging from{" "}
              <br />
              Regular delivery, express delivery and bulk delivery.
            </Text>
          </HeaderSection>
          <ServicesSection>
            <FlexWrapper>
              <FlexItem flex={1}>
                <AlignRight>
                  <Service
                    service="Regular Delivery"
                    bracket={`(24hr & Same-day Services)`}
                  >
                    To have your items delivered the same day, contact us before
                    3 PM Mondays to Saturdays to schedule an express pick-up.
                  </Service>
                </AlignRight>

                <AlignRight>
                  <Service
                    service="Express Delivery"
                    bracket={`(PrioritySame Day Service)`}
                  >
                    To have your items delivered on priority basis, contact us
                    2-3hrs before the expected delivery timing
                  </Service>
                </AlignRight>

                <AlignRight>
                  <Service service="" bracket={`Bulk Delivery (Bulk Mail)`}>
                    We’ll deliver your Bulk Mails such as Office mails,
                    Invitations to events or special occasions, group attires
                    such as Calendars, Aso-Ebi, Souvenirs & Special Packages
                  </Service>
                </AlignRight>
              </FlexItem>
              <FlexItem flex={1}>
                <ImageWrap>
                  <Image src="/assets/png/iphone-x.png" alt="iphone nixon" />
                </ImageWrap>
              </FlexItem>
              <FlexItem flex={1}>
                <AlignLeft>
                  <Service
                    service="Gift Delivery
                   "
                    bracket={`(Customized Packages)`}
                  >
                    To have your items delivered the <br /> same day, contact us
                    before 3 PM <br /> Mondays to Saturdays to schedule <br />
                    an express pick-up.
                  </Service>
                </AlignLeft>

                <AlignLeft>
                  <Service
                    service="Dedicated Service 
                   "
                    bracket={`(Frequent Delivery)`}
                  >
                    We can have a bike and rider dedicated to your operations if
                    you generate a large volume of cargo traffic, ensuring that
                    your delivery needs are met promptly.
                  </Service>
                </AlignLeft>

                <AlignLeft>
                  <Service
                    service="Prospective Investors
               "
                    bracket={`(Partners)`}
                  >
                    We can manage your bikes for profit margins, with bike
                    maintenance also covered (Terms & Conditions apply).
                  </Service>
                </AlignLeft>
              </FlexItem>
            </FlexWrapper>
          </ServicesSection>
        </div>
      </ColorWrap>
    </Wrapper>
  );
};

export default Services;
