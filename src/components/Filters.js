import React from "react";
import '../App.css';

function Filters({ filters }) {
    return (
        <div>
            {filters.map((filter, index) => <button key={index}>{filter}</button>)}
        </div>
    )
}

export default Filters;