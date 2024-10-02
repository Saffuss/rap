import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { close } from "../store/store";
import Comments from "./Comments";
import { fetchComments } from "../store/store";

function PopUp() {
    const dispatch = useDispatch();
    const popUp = useSelector(state => state.popUp.view);
    const showPopUp = popUp === 'none' ? false : true;

    function closePopUp() {
        dispatch(close());
    }

    if (showPopUp) {
        //dispatch(fetchComments());
        console.log(popUp.permalink);
        return (
            <div className='pop-up'>
                <div className="pop-up-top">
                    <h2 className="image-title">{popUp.title}</h2>
                    <button onClick={closePopUp}>X</button>
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