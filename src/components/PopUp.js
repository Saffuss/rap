import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { show, close } from "../store/store";
import Comments from "./Comments";

function PopUp() {
    const dispatch = useDispatch();
    const popUp = useSelector(state => state.popUp.view);
    const showPopUp = popUp === 'none' ? false : true;

    if (showPopUp) {
        return (
            <div className='pop-up' onClick={() => dispatch(close())}>
                <img src={popUp}/>
                <h2>PopUp</h2>
                <Comments />
            </div>
        )
    } else {
        return null;
    }
}

export default PopUp;