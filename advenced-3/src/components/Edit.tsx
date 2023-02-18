import { motion } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";
import { flexCenter } from "../style/mixin";
import Button from "./Button";
import Input from "./Input";

const EditWrapper = styled.section`
  z-index: 999;
  width: 100vw;
  height: 100vh;
  position: absolute;
  ${flexCenter}
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const EditLayout = styled(motion.div)`
  width: 30rem;
  height: 30rem;
  border-radius: 1rem;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Edit = () => {
  const outSection = useRef<HTMLDivElement>(null);
  return (
    <EditWrapper ref={outSection}>
      <EditLayout>
        <InputWrapper>
          <Input wh={"m"} />
          <Input wh={"l"} />
          <Input wh={"s"} />
        </InputWrapper>
        <Button size="l">제출</Button>
      </EditLayout>
    </EditWrapper>
  );
};

export default Edit;
