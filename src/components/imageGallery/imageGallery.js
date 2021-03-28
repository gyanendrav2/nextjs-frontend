import React from "react"
// import PropTypes from "prop-types";
// import { photos } from "../../data/photos";
import Masonry from "react-responsive-masonry"
import { images } from "../../assets/images"

const Images = [
    { id: 1, image: images.masorny1 },
    { id: 2, image: images.masorny2 },
]

export const ImageGallery = () => {
    return (
        <Masonry columnsCount={2} gutter="0.3rem" columnClassName="my-masonry-grid_column">
            {Images.map((photo, i) => {
                return <img key={i} src={photo.image} style={{ width: "100%", display: "block" }} alt="" />
            })}
        </Masonry>
    )
}

ImageGallery.propTypes = {}
