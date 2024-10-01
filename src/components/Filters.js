import React from "react";
import '../App.css';
import { useSelector, useDispatch } from "react-redux";
import { createFilter, clearAll } from "../store/store";

function Filters() {
    const filters = ['a', 'b', 'c', 'd', 'e', 'f'];
    const dispatch = useDispatch();
    const currentFilter = useSelector(state => state.filter.filter);

    return (
        <div>
            {filters.map((filter, index) => <button className={currentFilter === filter ? 'activeFilter' : 'notActiveFilter'} onClick={() => dispatch(createFilter(filter))} key={index}>{filter}</button>)}
            <button onClick={() => dispatch(clearAll())}>Clear All</button>
        </div>
    )
}

export default Filters;