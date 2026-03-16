import { useDispatch } from "react-redux";
import { setSearchQuery } from "../features/parkingSlice";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {

  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleChange = (e) => {

    const value = e.target.value;

    setQuery(value);

    dispatch(setSearchQuery(value));

  };

  return (
    <div className="relative">
      <FaSearch className="absolute left-4 top-3 text-gray-400" />

      <input
        type="text"
        placeholder="Search parking here..."
        value={query}
        onChange={handleChange}
        className="pl-10 pr-4 py-2 border border-gray-100 p-2 rounded-xl w-full focus:outline-none focus:border-1 focus:border-blue-200 bg-gray-100 focus:bg-white transition"
      />
    </div >
  );

};

export default SearchBar;