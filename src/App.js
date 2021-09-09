import { useTheme } from "hooks/useTheme";
import { ThemeProvider } from "styled-components";
import Search from "components/Search/index";
import HeaderSection from "sections/HeaderSection";
import GlobalStyles from "styles/GlobalStyles";
import UserInfoSection from "sections/UserInfoSection";
import { useQuery } from "@apollo/client";
import { GET_USER_INFO } from "services/queries";
import { useState } from "react";

const App = () => {
  const [theme, mode, toggleTheme] = useTheme();
  const [username, setUsername] = useState("octocat");

  const { loading, error, data } = useQuery(GET_USER_INFO, {
    variables: { username },
    skip: username === "",
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles>
        <HeaderSection mode={mode} onChange={toggleTheme} />
        <Search
          username={username}
          onSubmit={setUsername}
          loading={loading}
          data={data}
        />
        <UserInfoSection loading={loading} error={error} data={data} />
      </GlobalStyles>
    </ThemeProvider>
  );
};

export default App;
