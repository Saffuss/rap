import React from "react";
import '../App.css';

function Filters({ filters }) {
    return (
        <div>
            {filters.map(filter => <button>{filter}</button>)}
        </div>
    )
}

export default Filters;