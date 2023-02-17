import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const HomeWrapper = styled.main`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  color: ${(props) => props.theme.color};
  transform: translate(-50%, -50%);
  align-items: center;
  gap: 2.5rem;
  p {
    font-size: 2.5rem;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <p>당신의 오늘의 한 줄을 기록해주세요.</p>
      <Button size="l">시작하기</Button>
    </HomeWrapper>
  );
};

export default Home;
