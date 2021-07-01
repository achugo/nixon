import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const FlexWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default FlexWrapper;
