import React from "react";
import '../App.css';

function Gallery({ images }) {
    return (
        <div>
            <h2>Gallery</h2>
            <div className="images">
                {images.map((image, index) => <p className="image" key={index}>{image}</p>)}
            </div>
        </div>
    )
}

export default Gallery;