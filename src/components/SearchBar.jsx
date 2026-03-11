import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {

  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (

    <form
      onSubmit={handleSearch}
      className="flex gap-3 mb-4"
    >

      <input
        type="text"
        placeholder="Search parking by name or area..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded w-full"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>

    </form>

  );

};

export default SearchBar;