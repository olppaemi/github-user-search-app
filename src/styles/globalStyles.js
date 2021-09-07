import { createGlobalStyle } from "styled-components";
import rem from "./utils/rem";

export const GlobalStyle = createGlobalStyle`
  // colors
  :root {
    --deep-sky-blue: #0079ff;
    --crystal-blue: #60ABFF;
    --greyish-blue: #697c9a;
    --kashmir-blue: #4b6a9b;
    --gunmetal: #2b3442;
    --zircon: #f6f8ff;
    --romance: #fefefe;
    --white: #fff;
    --mirage: #141D2F;
    --blue-zodiac: #1e2a47;
  }

  // boilerplate
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

  // typography
  h1 {
    font-size: ${rem(26)};
    font-weight: bold;
    line-height: ${rem(38)};
    color: ${({ theme }) => theme.colors.h1};
  }

  h2 {
    font-size: ${rem(22)};
    font-weight: bold;
    line-height: ${rem(33)};
    color: ${({ theme }) => theme.colors.h2};
  }

  h3 {
    font-size: ${rem(16)};
    font-weight: normal;
    line-height: ${rem(24)};
    color: ${({ theme }) => theme.colors.h3};
  }

  h4 {
    font-size: ${rem(13)};
    font-weight: normal;
    line-height: ${rem(20)};
    color: ${({ theme }) => theme.colors.h4};
  }

  body {
    font-size: ${rem(15)};
    font-weight: normal;
    line-height: ${rem(25)};
    color: ${({ theme }) => theme.colors.text};
  }

`;
