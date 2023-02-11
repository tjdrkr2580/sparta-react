import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Input from "./components/Input";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import GlobalStyle from "./utils/GlobalStyle";

const RootWrapper = styled.section`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

function App() {
  return (
    <RootWrapper>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </RootWrapper>
  );
}

export default App;
