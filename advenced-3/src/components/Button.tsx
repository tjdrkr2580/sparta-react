import React from "react";
import styled, { css } from "styled-components";
import { boxShadow, flexCenter } from "../style/mixin";
import { ButtonProps } from "../types/type";

const CustomButton = styled.button<{ size: string }>`
  ${flexCenter}
  cursor: pointer;
  background-color: ${(props) => props.theme.btnColor};
  border-radius: 1rem;
  font-size: 1.6rem;
  border: none;
  color: white;
  ${boxShadow}
  ${(props) =>
    props.size === "m" &&
    css`
      width: 10rem;
      height: 4rem;
    `}
  ${(props) =>
    props.size === "l" &&
    css`
      width: 12rem;
      height: 4.5rem;
    `}
  ${(props) =>
    props.size === "s" &&
    css`
      width: 8rem;
      height: 3.5rem;
    `}
    &:hover {
    filter: brightness(95%);
    transform: scale(0.98);
  }
`;

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <CustomButton size={props.size} onClick={props.onClick}>
      {children}
    </CustomButton>
  );
};

export default Button;

Button.defaultProps = {
  size: "m",
  onClick: () => {},
};
