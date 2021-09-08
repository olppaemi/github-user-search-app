import styled from "styled-components";
import rem from "styles/utils/rem";
import iconSearch from "assets/icon-search.svg";
import Button from "./Button";

const SearchForm = styled.form`
  width: 100%;
  height: ${rem(69)};
  display: flex;
  align-items: center;
  padding-left: ${rem(32)};
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${rem(10)};
  box-shadow: ${({ theme }) => theme.boxShadow};

  &::before {
    display: block;
    content: "";
    width: ${rem(24)};
    height: ${rem(24)};
    background: center / contain no-repeat url(${iconSearch});
    margin-right: ${rem(24)};
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

    &::placeholder {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  p {
    width: ${rem(92)};
    color: red;
    margin-left: ${rem(24)};
  }

  ${Button} {
    width: ${rem(106)};
    height: ${rem(50)};
    margin-left: ${rem(24)};
    margin-right: ${rem(10)};
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
