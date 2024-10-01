import React from "react";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import '../App.css';

function Search() {
    return (
        <div>
            <SearchBar />
            <Filters />
        </div>
    )
}

export default Search;