import React from "react";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import '../App.css';

function Search(props) {
    return (
        <div>
            <SearchBar />
            <Filters filters={props.filters}/>
        </div>
    )
}

export default Search;