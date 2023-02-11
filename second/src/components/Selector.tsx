import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

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
  list-style: none;
  top: 3rem;
  left: 0;
  width: 100%;
  overflow: hidden;
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

const Selector = () => {
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
    <SelectorWrapper ref={el} onClick={() => setOpen(true)}>
      <Label>{currentValue}</Label>
      <SelectOptions isOpen={isOpen}>
        <Option onClick={handleOnChangeSelectValue}>리액트</Option>
        <Option onClick={handleOnChangeSelectValue}>2학년</Option>
        <Option onClick={handleOnChangeSelectValue}>3학년</Option>
        <Option onClick={handleOnChangeSelectValue}>4학년</Option>
      </SelectOptions>
    </SelectorWrapper>
  );
};

export default Selector;

Selector.defaultProps = {
  option: ["리액트", "자바", "스프링", "리액트네이티브"],
  type: 1,
};
