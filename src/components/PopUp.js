import React from "react";
import Comments from "./Comments";

function PopUp({ showPopUp, togglePopUp }) {
    const popUpClassName = showPopUp ? "pop-up pop-up-true" : "pop-up pop-up-false";

    return (
        <div className={popUpClassName} onClick={togglePopUp}>
            <h2>PopUp</h2>
            <Comments />
        </div>
    )
}

export default PopUp;