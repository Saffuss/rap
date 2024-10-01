import React, { useEffect } from "react";
import '../App.css';
import { useSelector, useDispatch } from "react-redux";
import { show, fetchImages } from "../store/store";

function Gallery() {
    const dispatch = useDispatch();

    // filter declarations
    const search = useSelector(state => state.filter.query);
    const filters = useSelector(state => state.filter.filter);
    const query = search + filters;

    // images declarations
    const imagesStatus = useSelector(state => state.images.status);

    useEffect(() => {
        if (imagesStatus === 'idle') {
            dispatch(fetchImages());
        }
    }, [imagesStatus, dispatch]);

    const imageObjects = useSelector(state => state.images.items);
    const images = imageObjects.map(img => img.imageUrl);

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