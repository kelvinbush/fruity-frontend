import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --lightGrey: #FAFAFE;
    --blackStrong: #000000;
    --medOrange: #F9A109;
    --white: #ffffff
  }

  * {
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
    font-size: 1.5rem;
  }

  body {
    background-color: var(--ligthGrey);
    margin: 0;
    padding: 0;
  }
`;
