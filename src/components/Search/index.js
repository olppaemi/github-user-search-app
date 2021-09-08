import { useState } from "react";
import Button from "styles/components/Button";
import SearchForm, { Wrapper } from "styles/components/SearchForm";

const Search = ({ username, onSubmit, hasUser = true }) => {
  const [searchText, setSearchText] = useState(username);

  const handleChange = (e) => setSearchText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchText);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search GitHub username…"
        value={searchText}
        onChange={handleChange}
      />

      <Wrapper>
        {!hasUser && <p>No results</p>}
        <Button type="submit">Search</Button>
      </Wrapper>
    </SearchForm>
  );
};

export default Search;
