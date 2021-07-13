import React from "react";
import styled from "styled-components";
import { AppFont } from "../../config/AppFont";

const Span = styled.h1`
  font-family: ${AppFont.BOLD};
  font-size: 45px;

  @media screen and (min-width: 1600px) {
    font-size: 60px;
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroText = ({ children }) => {
  return <Span>{children}</Span>;
};

export default HeroText;
