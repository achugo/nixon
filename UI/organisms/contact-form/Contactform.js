import React from "react";
import styled from "styled-components";
import FlexItem from "../../../components/layout/FlexItem";
import FlexWrapper from "../../../components/layout/FlexWrapper";
import { AppColors } from "../../../config/AppColor";
import { AppFont } from "../../../config/AppFont";
import Header from "../../atoms/Header";
import Input from "../../atoms/Input";
import SubHeader from "../../atoms/SubHeader";
import Text from "../../atoms/Text";
import TextArea from "../../atoms/textarea";

const Wrapper = styled.div`
  background-image: url("/assets/svg/herocurve.svg");
  background-color: #e5e5e5;
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: -10vh;
  position: relative;
  z-index: 1;

  p {
    padding: 0 1em;
  }

  @media screen and (max-width: 768px) {
    background: none;
    //margin-top: 40vh;
  }
  .container {
    padding-top: 20vh;
  }
`;
const FormWrapper = styled.form`
  padding: 3em;
  position: relative;
  top: -20vh;
  z-index: 10;
  background: #ffffff;
  box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  max-width: 800px;
  margin: 0px auto;
`;

const Wrap = styled.div`
  padding: 1em;
`;

const Submit = styled.button`
  background-color: ${AppColors.darkwine};
  color: ${AppColors.white};
  font-family: ${AppFont.BOLD};
  outline: none;
  border: none;
  padding: 1.3em 2em;

  &:focus {
    outline: none;
    border: none;
  }
`;

const Contactform = () => {
  return (
    <Wrapper>
      <div className="container">
        <FormWrapper>
          <FlexWrapper>
            <FlexItem flex={1}>
              <Wrap>
                <Input type="text" label="Your name*" placeholder="Your name" />
              </Wrap>
            </FlexItem>
            <FlexItem flex={1}>
              <Wrap>
                <Input
                  type="email"
                  label="Your name*"
                  placeholder="Your name"
                />
              </Wrap>
            </FlexItem>
          </FlexWrapper>

          <FlexWrapper>
            <FlexItem flex={1}>
              <Wrap>
                <Input
                  type="text"
                  label="Company name*"
                  placeholder="Company Name"
                />
              </Wrap>
            </FlexItem>
            <FlexItem flex={1}>
              <Wrap>
                <Input
                  type="text"
                  label="Your Country*"
                  placeholder="Your Country"
                />
              </Wrap>
            </FlexItem>
          </FlexWrapper>

          <FlexWrapper>
            <FlexItem flex={1}>
              <Wrap>
                <TextArea
                  label="Your message*"
                  placeholder="Type your message"
                />
              </Wrap>
            </FlexItem>
          </FlexWrapper>
          <p>
            <Text>
              By submitting this form you agree to our terms and conditions and
              our Privacy Policy which explains how we may collect, use and
              disclose your personal information including to third parties.
            </Text>
          </p>
          <Submit>Contact Sales</Submit>
        </FormWrapper>
      </div>
    </Wrapper>
  );
};

export default Contactform;
