import React from "react";
import styled from "styled-components";
import { AppColors } from "../../../config/AppColor";
import Header from "../../atoms/Header";
import Text from "../../atoms/Text";
import Collapsible from "react-collapsible";
import { AppFont } from "../../../config/AppFont";
import Link from "next/link";
import FlexItem from "../../../components/layout/FlexItem";
import FlexWrapper from "../../../components/layout/FlexWrapper";

const Wrapper = styled.div`
  position: relative;
  //background: #e5e5e5;
  padding-top: 0em;
  max-width: 900px;
  margin: 0px auto;

  .Collapsible {
    background: #ffffff;
    box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.03);
    border-radius: 8px;
    padding: 1.5em 1.5em;
    margin: 1em 0;
    font-size: 18px;
    cursor: pointer;
    line-height: 1.7;
    font-family: ${AppFont.REGULAR};

    .Collapsible__trigger {
      font-family: ${AppFont.BOLD};
    }
    p {
    }
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin: 3em 0;
`;

const ContactBox = styled.div`
  border: 1px solid rgba(137, 0, 0, 0.15);
  padding: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
`;

const Wrap = styled.div`
  position: relative;
  text-align: center;

  svg {
    display: block;
  }
  h4 {
    font-family: ${AppFont.BOLD};
  }
`;

const Image = styled.img`
  position: relative;
`;

const Faq = () => {
  return (
    <div className="container">
      <Wrapper>
        <HeaderSection>
          <Header>Frequently Asked Question</Header>
          <Text color={AppColors.ash}>
            Get All Your Questions Answered About NEL Logistics
          </Text>
        </HeaderSection>

        <Collapsible trigger="What is your return policy?">
          <p>
            If for any reason you are not entirely satisfied with our services,
            you may request for a refund. If there are confirmed issues with
            your delivery, we will make a refund. The amount refunded will
            depend on the issue. This guarantee is valid from the day the order
            is made on our website or via any of our communication channels and
            covers all customer categories.
          </p>
        </Collapsible>

        <Collapsible trigger=" What payment methods do you accept?">
          <p>
            We accept all local debit cards, cash payments and occasionally,
            transfers.
          </p>
        </Collapsible>

        <Collapsible trigger="Do you offer an affiliate program?">
          <p>
            Yes! You can refer a client to get instant rewards. Please contact
            us to tell us about your referral. We will do our best to reward
            you.
          </p>
        </Collapsible>
        <Collapsible trigger="What are your hours of operation?">
          <p>
            General hours are: 9:00am to 5:00pm, Monday to Saturday. We can also
            make deliveries on Sundays on special arrangements.
          </p>
        </Collapsible>
        <Collapsible trigger="Do you offer an affiliate program?">
          <p>
            Yes! You can refer a client to get instant rewards. Please contact
            us to tell us about your referral. We will do our best to reward
            you.
          </p>
        </Collapsible>
        <Collapsible trigger="Do you ship nationwide or internationally?">
          <p>
            At this time, we only ship within Nigeria. However, we may leverage
            the services of our Partners beyond Greater Port Harcourt City Area
            or overseas. We will make sure we get your package to the right
            destination. you.
          </p>
        </Collapsible>
        <Collapsible trigger="Do you ship large items?">
          <p>
            Yes, but client would need to indicate need for a different delivery
            mode besides motorbikes. Your description of cargo will enable us
            determine special cargo handling requirements.
          </p>
        </Collapsible>

        <Collapsible trigger=" Where can I find your Terms and Conditions?">
          <p>
            You can view our Terms and Conditions page{" "}
            <Link href="/terms">here</Link>.
          </p>
        </Collapsible>

        <Collapsible trigger="For NEL Partner, what documents are required for sign-up?">
          <p>
            We will request Client representative to provide the following
            minimum requirements: – Certificate of Incorporation (for Corporate
            entities) – Bank account Number – Business Name – Valid means of
            identification of one of the directors – Phone number and email.
          </p>
        </Collapsible>

        <HeaderSection>
          <Header>Still have questions?</Header>
          <Text color={AppColors.ash}>
            If you cannot find answer to your question in our FAQ, you can
            always contact us. We wil answer to you shortly!
          </Text>
        </HeaderSection>

        <FlexWrapper>
          <FlexItem flex={1}>
            <ContactBox>
              <Wrap>
                <Image src="/assets/svg/phone.svg" alt="phone" />
                <h4>
                  {" "}
                  <a href="tel:+2347069663058">07069663058</a>{" "}
                </h4>
                <Text color={AppColors.ash}>We are happy to help</Text>
              </Wrap>
            </ContactBox>
          </FlexItem>
          <FlexItem flex={1}>
            <ContactBox>
              <Wrap>
                <Image src="/assets/svg/email.svg" alt="email" />
                <h4>nixonexpresslogistics@gmail.com</h4>
                <a href="mailto:nixonexpresslogistics@gmail.com">
                  <Text color={AppColors.ash}>
                    nixonexpresslogistics@gmail.com
                  </Text>
                </a>
              </Wrap>
            </ContactBox>
          </FlexItem>
        </FlexWrapper>
      </Wrapper>
    </div>
  );
};

export default Faq;
