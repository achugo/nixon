import React, { useState } from "react";
import styled from "styled-components";
import { AppColors } from "../../config/AppColor";
import { AppFont } from "../../config/AppFont";
import Link from "next/link";
import { Twirl as Hamburger } from "hamburger-react";

const Wrapper = styled.nav`
  position: relative;
  padding: 30px 0;
  @media screen and (max-width: 768px) {
    position: fixed;
    width: 100%;
    padding: 30px 0 20px 0;
    background-color: ${AppColors.white};
    z-index: 200;
  }

  .hamburger {
    position: relative;
    right: 0;
    display: inline;
    float: right;

    @media screen and (min-width: 768px) {
      display: none;
    }

    .hamburger-react {
      top: -10px;
      position: relative;
      z-index: 90909;
    }
  }
  .mobilenav {
    width: 100%;
    height: fit-content;
    position: fixed;
    background-color: ${AppColors.white};
    padding: 50px 100px;
    position: absolute;
    z-index: 50;
    left: -100%;
    text-align: left;
    top: 0;
    overflow: hidden;
    height: 100vh;
    transition: linear all 0.3s;
    /* opacity: 0.5; */
    //   background-image: url("../../assets/images/floater.svg");
    background-repeat: no-repeat;
    background-position: 20px 101%;

    &.show {
      width: 100%;
      left: -15%;
      display: block;
    }
    .hide {
      /* left: -100%; */
      display: none;
    }

    .links {
      clear: both;
      margin-top: 100px;
      p {
        font-size: 20px;
        line-height: 2;
        font-family: ${AppFont.regular};
      }
    }
  }
`;

const Logo = styled.img`
  max-width: 200px;
  float: left;
  cursor: pointer;

  position: relative;
  bottom: 10px;
`;

const MenuItems = styled.div`
  display: inline-block;
  float: right;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.div`
  float: right;
  padding: 10px 30px;
  font-family: ${AppFont.REGULAR};
  font-weight: bold;
`;

const NavButton = styled.button`
  color: ${AppColors.primary};
  font-weight: bolder;
  font-family: ${AppFont.REGULAR};
  border: 2px solid ${AppColors.primary};
  padding: 15px 25px;
  float: right;
  background-color: transparent;
  border-radius: 25px;
  position: relative;
  bottom: 8px;
  margin-left: 10px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export default function Nav() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Wrapper>
      <div className="container">
        <Link href="/" passhref={true}>
          <Logo src="/assets/svg/logo.svg" alt="nixon logo" />
        </Link>

        <MenuItems>
          <NavButton>Get Nixon App</NavButton>
          <Item>
            <Link href="/contact">Contact</Link>
          </Item>
          <Item>
            <Link href="/services">Services</Link>
          </Item>
          <Item>
            {" "}
            <Link href="/about-us">About</Link>
          </Item>
          <Item>
            <Link href="/">Home</Link>
          </Item>
        </MenuItems>

        <div className="hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div>
          <div className={`${isOpen ? "show" : "hide"} mobilenav`}>
            <div>
              <Link href="/" passhref>
                <Logo
                  className="ham"
                  src="/assets/svg/logo.svg"
                  alt="nixon logo"
                />
              </Link>
            </div>

            <div className="links">
              <p>
                <Link href="/">Home</Link>
              </p>
              <p>
                <Link href="/about-us">About</Link>
              </p>
              <p>
                <Link href="/services">Services</Link>
              </p>
              <p>
                {" "}
                <Link href="/contact">Contact Us</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
