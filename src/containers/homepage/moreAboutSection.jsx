import React from "react";
import { SectionTitle } from "../../components/sectionTitle";
import styled from "styled-components";
import { Element } from "react-scroll";
import AboutImgUrl from "../../asserts/illustrations/rocket_launch_.png";

const MoreAboutContainer = styled(Element)`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
`;

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1000px;

  @media screen and (max-width: 480px) {
    max-width: 100%;
    flex-direction: column-reverse;
  }
`;

const AboutText = styled.p`
  font-size: 21px;
  color: #2f2f2f;
  font-weight: normal;
  line-height: 1.4;
`;

const AboutImg = styled.img`
  width: 600px;
  height: 500px;
  margin-left: 2em;

  @media screen and (max-width: 480px) {
    width: 370px;
    height: 290px;
    margin-left: 0;
  }
`;

export function MoreAboutSection(props) {
  return (
    <MoreAboutContainer>
      <SectionTitle>More About Beema</SectionTitle>
      <AboutContainer>
        <AboutText>
          Beema ia about designing,building and delivering best quality software
          for your company.{<br />} {<br />}We make sure that you get the best
          software infrastructure and set applications to ensure the best
          experience for our clients. {<br />}
          {<br />}So whether you are handling thousands of payment transactions
          or you are just starting out, you are at the right place.
        </AboutText>
        <AboutImg src={AboutImgUrl} />
      </AboutContainer>
    </MoreAboutContainer>
  );
}
