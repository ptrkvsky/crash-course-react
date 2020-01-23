import React, { useState } from "react";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const handleChange = e => {
    setSearchText(e.target.value);
  };

  return (
    <div className="row">
      <div className="col8">
        <input
          className="form-control input-lg"
          type="text"
          onChange={handleChange}
          value={searchText}
          placeholder="Choisissez un film"
        />
      </div>
    </div>
  );
}
