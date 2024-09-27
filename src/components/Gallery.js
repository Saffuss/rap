import React from "react";
import '../App.css';
import { useSelector, useDispatch } from "react-redux";
import { show } from "../store/store";

function Gallery({ images }) {
    const dispatch = useDispatch();
    const search = useSelector(state => state.filter.query);
    const filters = useSelector(state => state.filter.filter);

    const query = search + filters;

    let filteredImages
    if (query === '') {
        filteredImages = images;
    } else {
        filteredImages = images.filter(image => image.toLowerCase().includes(query.toLowerCase()))
    }

    return (
        <div>
            <h2>Gallery</h2>
            <div className="images">
                {filteredImages.map((image, index) => 
                <div onClick={() => dispatch(show(image))} key={index} className="image-wrapper">
                    <img src={image} alt="Space"/>
                </div>
                )}
            </div>
            {filteredImages.length < 1 ? (<p>No images matched your search</p>) : null}
        </div>
    )
}

export default Gallery;