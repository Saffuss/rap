import React from "react";
import '../App.css';

function Gallery({ images, togglePopUp }) {
    return (
        <div>
            <h2>Gallery</h2>
            <div className="images">
                {images.map((image, index) => 
                <div onClick={togglePopUp} key={index} className="image-wrapper">
                    <img src={image} alt="Space"/>
                </div>
                )}
            </div>
        </div>
    )
}

export default Gallery;