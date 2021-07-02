import React from "react";
import styled from "styled-components";
import { AppColors } from "../../../config/AppColor";
import Header from "../../atoms/Header";
import Text from "../../atoms/Text";
import Collapsible from "react-collapsible";
import { AppFont } from "../../../config/AppFont";

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

        <HeaderSection>
          <Header>Still have questions?</Header>
          <Text color={AppColors.ash}>
            If you cannot find answer to your question in our FAQ, you can
            always contact us. We wil answer to you shortly!
          </Text>
        </HeaderSection>
      </Wrapper>
    </div>
  );
};

export default Faq;
