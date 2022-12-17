import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import Button from "../button";
import { Logo } from "../Logo";
import { Marginer } from "../marginer";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1f1f1f;
  position: relative;
`;

const MotivationalText = styled.h1`
  margin: 0;
  font-size: 25px;
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
`;

const AccessibilityContainer = styled.div`
  display: flex;
  border-top: 1px solid #cdcdcd;
  width: 80%;
  padding-top: 12px;
  padding-left: 10px;
  padding-right: 10px;
  color: #fff;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    width: 90%;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const PrivacyContainer = styled.div`
  display: flex;
`;

const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  color: #fff;
  font-size: 20px;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 11px;

    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }

  &:hover {
    color: #adadad;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Link = styled.a`
  color: #fff;
  transition: all 200ms ease-in-out;
  margin-right: 11px;
  cursor: pointer;
  font-size: 14px;

  &:not(:last-of-type) {
    margin-right: 11px;

    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }

  &:hover {
    color: #adadad;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

const RightsReserved = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 12px;
`;

export function Footer(props) {
  return (
    <FooterContainer>
      <Marginer direction="verticle" margin="4em" />
      <Logo small />
      <Marginer direction="verticle" margin="1em" />
      <MotivationalText>Just say the magical word</MotivationalText>
      <MotivationalText>and we will do the rest</MotivationalText>
      <Marginer direction="verticle" margin="1em" />
      <Button>Start your Project</Button>
      <Marginer direction="verticle" margin="5em" />
      <AccessibilityContainer>
        <PrivacyContainer>
          <Link>Privacy Policy</Link>
          <Link>Terms of Service</Link>
          <Link>Contact</Link>
        </PrivacyContainer>
        <SocialContainer>
          <SocialIcon>
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialIcon>
        </SocialContainer>
      </AccessibilityContainer>
      <RightsReserved>&copy; 2022 All rights reserved</RightsReserved>
    </FooterContainer>
  );
}
