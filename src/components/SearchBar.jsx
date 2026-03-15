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
      <FaSearch className="absolute left-3 top-3 text-gray-400" />

      <input
        type="text"
        placeholder="Search parking here..."
        value={query}
        onChange={handleChange}
        className=" border border-gray-100 p-2 rounded-xl w-full focus:outline-none focus:border-2 focus:border-blue-400 bg-gray-100 "
      />
    </div >
  );

};

export default SearchBar;