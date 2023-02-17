import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Detail from "./pages/Detail";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import GlobalStyle from "./style/GlobalStyle";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <BrowserRouter>
      <AnimatedCursor color="100, 92, 187" innerSize={10} outerSize={10} />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/diary/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
