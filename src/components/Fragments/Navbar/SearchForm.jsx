import { Input } from "@/components/ui/input";
import { useSearch } from "@/lib/store/useSearch";
import React, { useEffect, useRef } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const nameRef = useRef("");
  const navigation = useNavigate();

  const { searchMovie } = useSearch((state) => ({
    datas: state.datas,
    isLoading: state.isLoading,
    searchMovie: state.searchMovie,
  }));

  const handleSearch = (event) => {
    event.preventDefault();
    const searchQuery = nameRef.current.value;

    if (!searchQuery) return;

    searchMovie(searchQuery);
    navigation(`/search/${encodeURIComponent(searchQuery)}`);
  };

  return (
    <form action="" onSubmit={handleSearch}>
      <div className="relative">
        <Input
          className="w-full px-10 outline-none focus-visible:ring-1 focus-visible:ring-blue-500 md:w-64"
          placeholder="Search..."
          ref={nameRef}
        />

        <FaMagnifyingGlass className="absolute left-3 top-3 cursor-pointer text-slate-700 opacity-60" />
      </div>
    </form>
  );
};

export default SearchForm;
