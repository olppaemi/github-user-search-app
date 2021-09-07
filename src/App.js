import Button from "components/Button";
import Search from "components/Search/index";
import ThemeToggle from "components/ThemeToggle/index";
import { useTheme } from "hooks/useTheme";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/globalStyles";

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 730px;
`;

const App = () => {
  const [theme, mode, toggleTheme] = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Wrapper>
          <GlobalStyle />
          <h1>Hello world</h1>
          <h2>Hello world</h2>
          <h3>Hello world</h3>
          <h4>Hello world</h4>
          <p>Hello world</p>
          <Button>Search</Button>
          <Search />
          <ThemeToggle mode={mode} onChange={toggleTheme} />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
