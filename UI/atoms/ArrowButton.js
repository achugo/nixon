import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { AppColors } from "../../config/AppColor";
import { AppFont } from "../../config/AppFont";

const Button = styled.div`
  .link {
    outline: none;
    border: none;
    background-color: ${AppColors.orange};
    font-family: ${AppFont.REGULAR};
    color: ${AppColors.white};
    padding: 1em 3em;
    font-size: 18px;
    font-weight: bold;
    border-radius: 35px;
    cursor: pointer;

    &:focus {
      outline: none;
      border: none;
    }

    &:hover {
      text-decoration: none;
    }
  }
`;

const Svg = styled.img`
  max-width: 15px;
  position: relative;
  left: 15px;
  top: 2px;
`;

const ArrowButton = ({ link, children }) => {
  return (
    <Button>
      <a className="link" href={`/${link}`} passHref>
        <>
          {children}
          <Svg src="/assets/svg/arrow.svg" />
        </>
      </a>
    </Button>
  );
};

export default ArrowButton;
