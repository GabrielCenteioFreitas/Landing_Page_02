import { createGlobalStyle } from "styled-components";
import { colors } from "../constants/colors";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    font-size: 62.5%;

    ${Object.keys(colors).map(color => 
      `--${color}: ${colors[color]};`
    )}
  }

  body {
    font-size: 1.6rem;
    background-color: var(--white);

    main {
      max-width: 144rem;
      margin: 0 auto;
    }
  }

  body * {
    font-family: 'Inter', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`