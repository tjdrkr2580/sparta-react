import React from "react";
import styled, { keyframes } from "styled-components";
import AnimatedComponents from "../components/AnimatedComponents";
import Button from "../components/Button";

const blurAnimation = keyframes`
  0% {
    filter: blur(0.5rem);
  }
  100% {
    filter: blur(0);
  }
`;

const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - 20rem);
  color: ${(props) => props.theme.color};
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  animation: ${blurAnimation} 0.5s ease-in-out forwards;
  p {
    font-size: 2.5rem;
  }
`;

const Home = () => {
  return (
    <AnimatedComponents>
      <HomeWrapper>
        <p>당신의 오늘의 한 줄을 기록해주세요.</p>
        <Button size="l">시작하기</Button>
      </HomeWrapper>
    </AnimatedComponents>
  );
};

export default Home;
