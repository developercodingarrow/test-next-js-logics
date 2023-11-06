import React, { useState } from "react";

const SearchBar = ({ placeholder, onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
