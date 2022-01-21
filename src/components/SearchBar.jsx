import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleOnSearch() {
    onSearch(search);
    setSearch("");
  }

  return (
    <div>
      <input
        autoComplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") handleOnSearch();
        }}
      />
      <button onClick={handleOnSearch}>Agregar</button>
    </div>
  );
}
