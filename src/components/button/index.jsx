import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const ButtonWrapper = styled.button`
  padding: ${({ small }) => (small ? small + "5px 8px" : "7px 15px")};
  background-color: ${theme.primary};
  font-weight: bold;
  font-size: ${({ small }) => (small ? small + "12px" : "16px")};
  color: #fff;
  border-radius: 5px;
  outline: none;
  border: 2px solid transparent;
  transition: all 220ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    border: 2px solid ${theme.primary};
  }
`;
export default function Button(props) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}
