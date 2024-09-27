import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { close } from "../store/store";
import Comments from "./Comments";

function PopUp() {
    const dispatch = useDispatch();
    const popUp = useSelector(state => state.popUp.view);
    const showPopUp = popUp === 'none' ? false : true;

    if (showPopUp) {
        return (
            <div className='pop-up' onClick={() => dispatch(close())}>
                <img alt="space" src={popUp}/>
                <div className="pop-up-content">
                    <h2>Image Title</h2>
                    <Comments />
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default PopUp;