import { createGlobalStyle } from "styled-components";
import { breakpointDown } from "styles/utils/breakpoints";
import rem from "styles/utils/rem";

const Typography = createGlobalStyle`
  h1 {
    font-size: ${rem(26)};
    font-weight: bold;
    line-height: ${rem(38)};
    color: ${({ theme }) => theme.colors.h1};

    ${breakpointDown.sm`
      font-size: ${rem(16)};
      line-height: ${rem(24)};
    `}

  }

  h2 {
    font-size: ${rem(22)};
    font-weight: bold;
    line-height: ${rem(33)};
    color: ${({ theme }) => theme.colors.h2};

    ${breakpointDown.sm`
      font-size: ${rem(16)};
    `}
  }

  h3 {
    font-size: ${rem(16)};
    font-weight: normal;
    line-height: ${rem(24)};
    color: ${({ theme }) => theme.colors.h3};

    ${breakpointDown.sm`
      font-size: ${rem(13)};
    `}
  }

  h4 {
    font-size: ${rem(13)};
    font-weight: normal;
    line-height: ${rem(20)};
    color: ${({ theme }) => theme.colors.h4};

    ${breakpointDown.sm`
      font-size: ${rem(11)};
    `}
  }

  body {
    font-size: ${rem(15)};
    font-weight: normal;
    line-height: ${rem(25)};
    color: ${({ theme }) => theme.colors.text};

    ${breakpointDown.sm`
      font-size: ${rem(13)};
    `}
  }
`;

export default Typography;
