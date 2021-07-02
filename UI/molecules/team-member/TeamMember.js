import React from "react";
import styled from "styled-components";
import FixedFlexItem from "../../../components/layout/FixedFlexItem";
import FlexWrapper from "../../../components/layout/FlexWrapper";
import { AppColors } from "../../../config/AppColor";
import SubHeader from "../../atoms/SubHeader";
import Text from "../../atoms/Text";

const Wrapper = styled.div`
  position: relative;
`;
const ImageWrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  top: 12px;
  position: relative;
`;

const Image = styled.img`
  position: relative;
`;

const Wrap = styled.div`
  padding-left: 10px;
`;

const TeamMember = ({ photo, name, children }) => {
  return (
    <Wrapper>
      <FlexWrapper>
        <FixedFlexItem flex={1}>
          <ImageWrap>
            <Image src={photo} alt="team member" />
          </ImageWrap>
        </FixedFlexItem>
        <FixedFlexItem flex={3}>
          <Wrap>
            <SubHeader>{name}</SubHeader>
            <p>
              <Text color={AppColors.ash}>{children}</Text>
            </p>
          </Wrap>
        </FixedFlexItem>
      </FlexWrapper>
    </Wrapper>
  );
};

export default TeamMember;
