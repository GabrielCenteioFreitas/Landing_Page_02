import { createGlobalStyle } from "styled-components";

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

    --white: #FFFFFF;
    --black: #172026;
    --gray: #36485C;
  }

  body {
    font-size: 1.6rem;
    background-color: var(--white);

    main {
      max-width: 144rem;
      margin: 0 auto;

      a {
        text-decoration: none;
      }
    }
  }

  body * {
    font-family: 'Inter', sans-serif;
  }
`