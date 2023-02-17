import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Detail from "./pages/Detail";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
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
