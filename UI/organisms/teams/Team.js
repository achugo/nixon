import React from "react";
import styled from "styled-components";
import FlexItem from "../../../components/layout/FlexItem";
import FlexWrapper from "../../../components/layout/FlexWrapper";
import { AppColors } from "../../../config/AppColor";
import Header from "../../atoms/Header";
import Text from "../../atoms/Text";
import TeamMember from "../../molecules/team-member/TeamMember";

const Wrapper = styled.div`
  margin-top: 5em;

  .padleft {
    margin-left: 1em;
  }
  .padright {
    margin-right: 1em;
  }
`;

const HeaderWrap = styled.div`
  text-align: left;
  max-width: 400px;
`;

const Members = styled.div`
  margin-top: 20px;
`;

const Wrap = styled.div`
  position: relative;
  padding-right: 2em;
`;

const Team = () => {
  return (
    <Wrapper className="container">
      <HeaderWrap>
        <Header>Meet Our Team</Header>
        <Text color={AppColors.ash}>
          We have a team of professional individuals who are passionate about
          their work and have a good work ethics.
        </Text>
      </HeaderWrap>

      <Members>
        <FlexWrapper>
          <FlexItem flex={1}>
            <div className="padright">
              <TeamMember photo="/assets/png/shape.png" name="Njideka">
                <Text color={AppColors.ash}>
                  is an energetic Economics graduate with strong
                  entrepreneurship and team-building skills, with sales and
                  marketing experience in previous roles as Business Development
                  and Sales Managementrs of retailing firms.
                </Text>
              </TeamMember>
            </div>
          </FlexItem>
          <FlexItem flex={1}>
            <div className="padleft">
              <TeamMember photo="/assets/png/shape.png" name="Njideka">
                <Text color={AppColors.ash}>
                  is an energetic Economics graduate with strong
                  entrepreneurship and team-building skills, with sales and
                  marketing experience in previous roles as Business Development
                  and Sales Managementrs of retailing firms.
                </Text>
              </TeamMember>
            </div>
          </FlexItem>
        </FlexWrapper>
      </Members>

      <Members>
        <FlexWrapper>
          <FlexItem flex={1}>
            <div className="padright">
              <TeamMember photo="/assets/png/shape.png" name="Njideka">
                <Text color={AppColors.ash}>
                  is an energetic Economics graduate with strong
                  entrepreneurship and team-building skills, with sales and
                  marketing experience in previous roles as Business Development
                  and Sales Managementrs of retailing firms.
                </Text>
              </TeamMember>
            </div>
          </FlexItem>
          <FlexItem flex={1}>
            <div className="padleft">
              <TeamMember photo="/assets/png/shape.png" name="Njideka">
                <Text color={AppColors.ash}>
                  is an energetic Economics graduate with strong
                  entrepreneurship and team-building skills, with sales and
                  marketing experience in previous roles as Business Development
                  and Sales Managementrs of retailing firms.
                </Text>
              </TeamMember>
            </div>
          </FlexItem>
        </FlexWrapper>
      </Members>
    </Wrapper>
  );
};

export default Team;
