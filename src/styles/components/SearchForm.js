import styled from "styled-components";
import rem from "styles/utils/rem";
import iconSearch from "assets/icon-search.svg";
import Button from "./Button";
import { breakpointDown } from "styles/utils/breakpoints";

const SearchForm = styled.form`
  width: 100%;
  height: ${rem(69)};
  display: flex;
  align-items: center;
  padding-left: ${rem(32)};
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${rem(10)};
  box-shadow: ${({ theme }) => theme.boxShadow};

  ${breakpointDown.sm`
    padding-left: ${rem(16)};
  `}

  &::before {
    display: block;
    content: "";
    width: ${rem(24)};
    height: ${rem(24)};
    background: center / contain no-repeat url(${iconSearch});
    margin-right: ${rem(24)};

    ${breakpointDown.sm`
      width: ${rem(20)};
      height: ${rem(20)};
      margin-right: ${rem(9)};
    `}
  }

  input {
    font-family: inherit;
    font-size: ${rem(18)};
    letter-spacing: 0;
    color: ${({ theme }) => theme.colors.text};
    width: ${rem(412)};
    height: 100%;
    background: transparent;
    border: none;
    outline: none;

    ${breakpointDown.sm`
      font-size: ${rem(13)};
      width: ${rem(184)};
    `}

    &::placeholder {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  p {
    width: ${rem(92)};
    color: red;

    ${breakpointDown.sm`
      width: ${rem(50)};
      text-align: center;
      line-height: ${rem(16)};
    `}
  }

  ${Button} {
    width: ${rem(106)};
    height: ${rem(50)};
    margin-left: ${rem(24)};
    margin-right: ${rem(10)};

    ${breakpointDown.sm`
      width: ${rem(84)};
      margin: 0 ${rem(4)};
    `}
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;

export default SearchForm;
