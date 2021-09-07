import Button from "../Button";
import styled from "styled-components";
import rem from "styles/utils/rem";
import iconSearch from "assets/icon-search.svg";

const Form = styled.form`
  width: 100%;
  height: ${rem(69)};
  display: flex;
  align-items: center;
  padding-left: ${rem(32)};
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${rem(10)};

  &::before {
    display: block;
    content: "";
    width: ${rem(24)};
    height: ${rem(24)};
    background: center / contain no-repeat url(${iconSearch});
    margin-right: ${rem(24)};
  }

  input {
    font-size: ${rem(18)};
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;

const Search = ({ user, setUser, hasUser = true }) => {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Search GitHub username..." />

      <Wrapper>
        {!hasUser && <p>No results</p>}
        <Button type="submit">Search</Button>
      </Wrapper>
    </Form>
  );
};

export default Search;
