import { createGlobalStyle } from "styled-components";

const Boilerplate = createGlobalStyle`
  html {
    font-size: 100%;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Space Mono', monospace;
    background: ${({ theme }) => theme.colors.background};
  }
`;

export default Boilerplate;
