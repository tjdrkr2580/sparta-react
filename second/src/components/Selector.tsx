import React, { useState } from "react";
import styled from "styled-components";

const SelectorWrapper = styled.select`
  padding: 0.8rem;
  width: 22rem;
  height: 4rem;
  border-radius: 1rem;
  font-size: 1.5rem;
  border: 1px solid rgba(221, 221, 221);
  &:focus {
    outline: none;
  }
`;

interface SelectorWrapper {
  option: string[];
  type: number;
}

const Selector = ({ option, type }: SelectorWrapper) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <SelectorWrapper></SelectorWrapper>
    </>
  );
};

export default Selector;

Selector.defaultProps = {
  option: ["리액트", "자바", "스프링", "리액트네이티브"],
  type: 1,
};
