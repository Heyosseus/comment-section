import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background: #F2F2F2;
        font-family: 'Rubik', sans-serif;;
    }
`;