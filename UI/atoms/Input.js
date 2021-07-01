import React from "react";
import styled from "styled-components";
import { AppFont } from "../../config/AppFont";

const Wrap = styled.input`
  outline: none;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 1.2em;
  width: 100%;
  font-family: ${AppFont.REGULAR};

  &:focus {
    outline: none;
    border: 1px solid #dbdbdb;
  }

  &:placholder {
    color: rgba(168, 168, 168, 1);
  }
`;

const Label = styled.label`
  display: block;
  font-family: ${AppFont.BOLD};
  margin-bottom: 10px;
  text-align: left;
`;

const Input = ({ type, label, placeholder }) => {
  return (
    <>
      <Label>{label}</Label>
      <Wrap placeholder={placeholder} type={type} />
    </>
  );
};

export default Input;
