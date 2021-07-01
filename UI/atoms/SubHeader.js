import React from "react";
import styled from "styled-components";
import { AppFont } from "../../config/AppFont";

const Span = styled.h1`
  font-family: ${AppFont.BOLD};
  font-size: 23px;
  color: ${({ color }) => color};
`;

const SubHeader = ({ children, color }) => {
  return <Span color={color}>{children}</Span>;
};

export default SubHeader;
