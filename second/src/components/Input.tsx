import React from "react";
import styled from "styled-components";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  value: string | number;
  type: string;
}

const InputWrapper = styled.section`
  font-size: 1.45rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const CustomInput = styled.input`
  width: 22.6rem;
  height: 4.4rem;
  border-radius: 0.8rem;
  font-size: 1.5rem;
  border: 1px solid "#464646";
  &:focus {
    border: 2px solid black;
  }
`;

const Input = ({ onChange, label, type }: InputProps) => {
  return (
    <InputWrapper>
      {label}
      <CustomInput type={type} onChange={onChange} />
    </InputWrapper>
  );
};

export default Input;

Input.defaultProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  label: "",
  value: "",
  type: "text",
};
