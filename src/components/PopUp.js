import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { close } from "../store/store";
import Comments from "./Comments";

function PopUp() {
    const dispatch = useDispatch();
    const popUp = useSelector(state => state.popUp.view);
    const showPopUp = popUp.permalink === null ? false : true;

    function closePopUp() {
        dispatch(close());
    }

    if (showPopUp) {
        console.log(popUp.permalink);
        return (
            <div className='pop-up'>
                <div className="pop-up-top">
                    <h2 className="image-title">{popUp.title}</h2>
                    <button onClick={closePopUp} className="close-button">X</button>
                </div>
                <img alt="space" src={popUp.imageUrl}/>
                    <Comments />
            </div>
        )
    } else {
        return null;
    }
}

export default PopUp;