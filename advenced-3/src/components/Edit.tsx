import { motion } from "framer-motion";
import React, { FormEvent, useRef, useState } from "react";
import styled from "styled-components";
import { flexCenter } from "../style/mixin";
import { cuxios } from "../utils/cuxios";
import Button from "./Button";
import Input from "./Input";

const EditWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  ${flexCenter}
  z-index: 999;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const EditLayout = styled(motion.form)`
  padding: 3rem;
  width: 30rem;
  height: 30rem;
  border-radius: 1rem;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  button {
    align-self: flex-end;
  }
`;

const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Edit = ({ setVisible }: any) => {
  const outSection = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState({
    id: Date.now(),
    user: "",
    title: "",
    content: "",
  });
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.title.length < 10) alert("제목은 10자 이상 입력해주세요!");
    else {
      await cuxios.post("/diarys", value);
      setValue({
        id: Date.now(),
        user: "",
        title: "",
        content: "",
      });
      setVisible(false);
    }
  };
  return (
    <EditWrapper
      onSubmit={onSubmit}
      ref={outSection}
      onClick={(e) => {
        if (outSection.current === e.target) {
          setVisible(false);
        }
      }}
    >
      <EditLayout>
        <InputWrapper>
          <Input
            wh={"m"}
            placeholder="작성자"
            value={value.user}
            onChange={(e) => setValue({ ...value, user: e.target.value })}
          />
          <Input
            wh={"l"}
            placeholder="제목"
            value={value.title}
            onChange={(e) => setValue({ ...value, title: e.target.value })}
          />
          <Input
            wh={"l"}
            placeholder="한 줄."
            value={value.content}
            onChange={(e) => setValue({ ...value, content: e.target.value })}
          />
        </InputWrapper>
        <Button size="l">제출</Button>
      </EditLayout>
    </EditWrapper>
  );
};

export default Edit;
