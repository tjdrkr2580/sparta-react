import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Detail from "./pages/Detail";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import GlobalStyle from "./style/GlobalStyle";
import AnimatedCursor from "react-animated-cursor";
import Edit from "./components/Edit";
import { useState } from "react";

function App() {
  if (process.env.NODE_ENV === "production") {
    console.log = function no_console() {};
    console.warn = function no_console() {};
  }
  const [visible, setVisible] = useState(false);
  return (
    <BrowserRouter>
      {visible === true && <Edit setVisible={setVisible} />}
      <AnimatedCursor color="100, 92, 187" innerSize={10} outerSize={10} />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diary" element={<Diary setVisible={setVisible} />} />
        <Route path="/diary/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
