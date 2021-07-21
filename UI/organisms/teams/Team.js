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
              <TeamMember photo="/assets/njideka.jpg" name="Njideka">
                <Text color={AppColors.ash}>
                  is an energetic Economics graduate with strong
                  entrepreneurship and team-building skills, with sales and
                  marketing experience in previous roles as Business Development
                  and Sales Manager of retailing firms.
                </Text>
              </TeamMember>
            </div>
          </FlexItem>
          <FlexItem flex={1}>
            <div className="padleft">
              <TeamMember photo="/assets/chioma.jpg" name="Chioma">
                <Text color={AppColors.ash}>
                  is an astute HR Professional, a certified competence assessor,
                  recruiter, training expert, and counselor with over 15 yrs
                  experience in consulting and oil/gas sectors. She is
                  experienced in leading, driving, and implementing people
                  strategies to support organizational growth and business
                  objectives. Also, a certified Life Coach and Transformational
                  Speaker with the John Maxwell team, an internationally
                  recognized team of leadership experts, where she is a Quality
                  Counselor.
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
              <TeamMember photo="/assets/ebere.gif" name="Ebere">
                <Text color={AppColors.ash}>
                  is an engineer with nearly 30 yrs of cognate experience in the
                  oil and gas industry (ex-Shell), with previous roles in skills
                  management (including training), petroleum engineering studies
                  & operations, portfolio assessment, project management, and
                  assurance. Is widely recognized as an assurance champion, good
                  people manager, coach, trainer and mentor.
                </Text>
              </TeamMember>
            </div>
          </FlexItem>
          <FlexItem flex={1}>
            <div className="padleft">
              <TeamMember photo="/assets/magret.jpeg" name="Meg">
                <Text color={AppColors.ash}>
                  is a solicitor, public servant, publisher and experienced
                  administrator. She is the Acting GM of Imo Newspapers Owerri,
                  and Manager/Head of Chamber of Owerri Office of Emeka Ozoani
                  SAN & Co.
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
