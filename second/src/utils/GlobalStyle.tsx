import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 10px;
        list-style: none;
    }
    button {
        padding: 0.4rem 0.8rem;
        cursor: pointer;
    }
    input {
        padding: 0.4rem 0.8rem;
        &:focus {
            outline: none;
        }
    }
`;

export default GlobalStyle;
