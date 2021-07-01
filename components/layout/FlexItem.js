import react from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: ${({ flex }) => flex};

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const FlexItem = ({ children, flex }) => {
  return <Wrapper flex={flex}>{children}</Wrapper>;
};

export default FlexItem;
