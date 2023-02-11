import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

const SelectorWrapper = styled.div`
  display: flex;
  gap: 3rem;
  position: relative;
  width: 200px;
  padding: 8px;
  border-radius: 12px;
  background-color: #ffffff;
  align-self: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &::before {
    content: "⌵";
    position: absolute;
    top: 1px;
    right: 8px;
    color: #49c181;
    font-size: 20px;
  }
`;
const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
`;
const SelectOptions = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  z-index: 999;
  list-style: none;
  top: 5rem;
  left: 0;
  width: 100%;
  flex-direction: column;
  height: 90px;
  padding: 0;
  display: ${(props) => (props.isOpen === true ? "flex" : "none")};
  border-radius: 8px;
  background-color: #222222;
  color: #fefefe;
`;
const Option = styled.li`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
`;

const Wrapper = styled.div<{ type: number }>`
  position: relative;
  height: 10rem;
  ${(props) =>
    props.type === 1 &&
    css`
      overflow: hidden;
    `}
`;

interface propType {
  type: number;
}

const Selector = ({ type }: propType) => {
  const [currentValue, setCurrentValue] = useState("리액트");
  const handleOnChangeSelectValue = (e: any) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
  };
  const el: any = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const handleCloseModal = (event: any): void => {
    if (!el.current || !el.current.contains(event.target)) setOpen(false);
  };
  useEffect(() => {
    window.addEventListener("click", handleCloseModal);
    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  }, [isOpen]);
  return (
    <Wrapper type={type}>
      <SelectorWrapper ref={el} onClick={() => setOpen((prev) => !prev)}>
        <Label>{currentValue}</Label>
        <SelectOptions isOpen={isOpen}>
          <Option onClick={handleOnChangeSelectValue}>리액트</Option>
          <Option onClick={handleOnChangeSelectValue}>자바</Option>
          <Option onClick={handleOnChangeSelectValue}>스프링</Option>
        </SelectOptions>
      </SelectorWrapper>
    </Wrapper>
  );
};

export default Selector;

Selector.defaultProps = {
  option: ["리액트", "자바", "스프링"],
  type: 1,
};
