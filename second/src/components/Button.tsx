import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  color: string;
  weight: string;
  onClick?: () => void;
  label?: JSX.Element;
  isType: string;
  children?: ReactNode;
  tc?: string;
}

const ButtonWrapper = styled.button<ButtonProps>`
  border: 0.5rem solid ${(props) => props.color};
  background-color: ${(props) =>
    props.isType === "false" ? props.color : "white"};
  border-radius: 0.625rem;
  font-size: 1.333rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.tc};
  ${(props) =>
    props.weight === "s" &&
    css`
      width: 10rem;
      height: 4rem;
    `}
  ${(props) =>
    props.weight === "m" &&
    css`
      width: 13rem;
      height: 4.5rem;
    `}
  ${(props) =>
    props.weight === "l" &&
    css`
      width: 20rem;
      height: 5rem;
    `}
    &:active {
    filter: brightness(75%);
  }
`;

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <ButtonWrapper
      color={props.color}
      weight={props.weight}
      isType={props.isType}
      onClick={props.onClick}
      tc={props.tc}
    >
      {children}
      {props.label}
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  weight: "m",
  color: "#55EFC4",
  isType: "false",
  label: null,
  tc: "black",
  onClick: () => {},
};

export default Button;
