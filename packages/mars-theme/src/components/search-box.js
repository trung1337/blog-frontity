import React, { useState } from "react";
import { connect, styled } from "frontity";

const SearchBox = ({ state, actions }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    actions.router.set(`/?s=${encodeURIComponent(searchQuery)}`);
    setSearchQuery("");
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSearch}>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
    </SearchContainer>
  );
};

export default connect(SearchBox);

const SearchContainer = styled.div`
  position: relative;
`;

const SearchForm = styled.form`
  display: flex;
`;

const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchButton = styled.button`
  padding: 8px 16px;
  background-color: blue;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-left: 8px;
  cursor: pointer;
`;