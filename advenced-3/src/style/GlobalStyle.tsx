import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 10px;
    font-family: Pretendard;
    list-style: none;
    text-decoration: none;
    transition: 0.25s filter, 0.25s letter-spacing, 0.25s transform;
 }
`;

export default GlobalStyle;
