import React from "react";
import '../App.css';
import { useSelector, useDispatch } from "react-redux";
import { show } from "../store/store";

function Gallery({ images, togglePopUp }) {
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Gallery</h2>
            <div className="images">
                {images.map((image, index) => 
                <div onClick={() => dispatch(show(image))} key={index} className="image-wrapper">
                    <img src={image} alt="Space"/>
                </div>
                )}
            </div>
        </div>
    )
}

export default Gallery;