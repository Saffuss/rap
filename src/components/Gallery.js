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
    const imagesStatus = useSelector(state => state.images.imagesStatus);
    const errorMessage = useSelector(state => state.images.imagesError)

    useEffect(() => {
        if (imagesStatus === 'idle') {
            dispatch(fetchImages());
        }
    }, [imagesStatus, dispatch]);

    const images = Object.values(useSelector(state => state.images.items || []));

    let filteredImages;
    if (query === '') {
        filteredImages = images;
    } else {
        filteredImages = images.filter(image => (image.title + image.imageUrl).toLowerCase().includes(query.toLowerCase()))
    }

    if (imagesStatus === 'idle') {
        return (
            <div>
                <p>No data to display.</p>
                <button onClick={() => window.location.reload()}>Reload page</button>
            </div>
        )
        
    } else if (imagesStatus === 'pending') {
        return (
            <div>
                <h2>Loading...</h2>
                <div className="image-wrapper">
                    <img src={images[0].imageUrl} alt="Spaceman loading placeholder"/>
                </div>
            </div>
        )
    } else if (imagesStatus === 'succeeded') {
        return (
            <div>
                <h2>Gallery</h2>
                <div className="images">
                    {filteredImages.map((image, index) => 
                    <div onClick={() => dispatch(show(image))} key={index} className="image-wrapper">
                        <img src={image.imageUrl} className="jim" alt="Space"/>
                    </div>
                    )}
                </div>
                {filteredImages.length < 1 ? (<p>No images matched your search</p>) : null}
            </div>
        )
    } else {
        return (
            <div>
                <h2>There was an error loading the images. Please refresh the page and try again.</h2>
                <p>Error: {errorMessage}</p>
                <button onClick={() => window.location.reload()}>Reload page</button>
            </div>
        )
    }
}

export default Gallery;