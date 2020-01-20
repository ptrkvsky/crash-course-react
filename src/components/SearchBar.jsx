import React, { useState } from "react";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const handleChange = e => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <input onChange={handleChange} value={searchText} />
      Input value {searchText}
    </div>
  );
}
