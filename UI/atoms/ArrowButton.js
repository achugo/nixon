import React from "react";
import styled from "styled-components";
import { AppColors } from "../../config/AppColor";
import { AppFont } from "../../config/AppFont";

const Button = styled.button`
  outline: none;
  border: none;
  background-color: ${AppColors.orange};
  font-family: ${AppFont.REGULAR};
  color: ${AppColors.white};
  padding: 1em 3em;
  font-size: 18px;
  font-weight: bold;
  border-radius: 35px;

  &:focus {
    outline: none;
    border: none;
  }
`;

const Svg = styled.img`
  max-width: 15px;
  position: relative;
  left: 15px;
  top: 2px;
`;

const ArrowButton = ({ children }) => {
  return (
    <Button>
      {children}
      <Svg src="/assets/svg/arrow.svg" />
    </Button>
  );
};

export default ArrowButton;
