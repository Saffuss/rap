import React from "react";
import '../App.css';

function Gallery({ images }) {
    return (
        <div>
            <h2>Gallery</h2>
            <div className="images">
                {images.map((image, index) => <a href={image} target="_blank" rel="noopener noreferrer" className="image-wrapper"><img src={image} key={index} alt="Space"/></a>)}
            </div>
        </div>
    )
}

export default Gallery;