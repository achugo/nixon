import React from "react";
import styled from "styled-components";
import { AppFont } from "../../config/AppFont";

const Span = styled.span`
  font-family: ${AppFont.REGULAR};
  font-size: 17px;
  color: ${({ color }) => color};
`;

const Text = ({ children, color }) => {
  return <Span color={color}>{children}</Span>;
};

export default Text;
