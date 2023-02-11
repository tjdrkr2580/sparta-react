import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 6rem;
  padding: 0.3rem 0.8rem;
  display: flex;
  justify-content: space-around;

  h1 {
    font-size: 2.5rem;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>To do!</h1>
    </HeaderWrapper>
  );
};

export default Header;
