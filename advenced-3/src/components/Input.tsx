import { ChangeEvent } from "react";
import styled, { css } from "styled-components";
import { inputProps } from "../types/type";

const CustomInput = styled.input<inputProps>`
  border-radius: 1rem;
  font-weight: 500;
  padding: 0.8rem;
  &:focus {
    outline: none;
  }
  border: none;
  ${(props) =>
    props.wh === "m" &&
    css`
      width: 15rem;
      height: 3.5rem;
      font-size: 1.5rem;
    `}
  ${(props) =>
    props.wh === "s" &&
    css`
      width: 8rem;
      height: 3rem;
      font-size: 1.4rem;
    `}
  ${(props) =>
    props.wh === "l" &&
    css`
      width: 25rem;
      height: 4.5rem;
      font-size: 1.3rem;
    `}
`;

const Input = ({ ...props }: inputProps) => {
  return (
    <CustomInput
      wh={props.wh}
      onChange={props.onChange}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
};

export default Input;

Input.defaultProps = {
  wh: "m",
  onChange: (e: ChangeEvent<HTMLInputElement>) => {},
  placeholder: "input...",
  value: "",
};
