import React from "react";
import '../App.css';
import { useSelector, useDispatch } from "react-redux";
import { createQuery } from "../store/store";

function SearchBar() {
    const dispatch = useDispatch();
    const query = useSelector(state => state.filter.query);

    function handleSearch(e) {
        dispatch(createQuery(e.target.value))
    }

    return (
        <div>
            <input
            placeholder="Search..."
            type="text"
            value={query}
            onChange={handleSearch}
            />
        </div>
    )
}

export default SearchBar;