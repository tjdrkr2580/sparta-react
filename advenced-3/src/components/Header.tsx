import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem 1rem;
  height: 6rem;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  h1 {
    font-size: 3rem;
  }
`;

const LinkWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 1.85rem;
`;

const CustomLink = styled(Link)`
  font-weight: 500;
  font-size: 2rem;
  color: ${(props) => props.theme.textColor};
  &:hover {
    letter-spacing: 0.12rem;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>한줄 일기.</h1>
      <LinkWrapper>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/diary">Diary</CustomLink>
      </LinkWrapper>
    </HeaderWrapper>
  );
};

export default Header;
