import React, { useState } from "react"
import PropTypes from "prop-types"
import { Blurhash } from "react-blurhash"

export const LazyloadImage = ({ image, exteranlclass }) => {
    const [showImage, setShowImage] = useState(false)
    return (
        <>
            {/* {showImage && ( */}
            <img className={exteranlclass} onLoad={() => setShowImage(true)} src={image} alt={image} />
            {/* )} */}
            {!showImage && (
                <Blurhash
                    hash="UC8;;@kD01jE_MofDjWUx^fkRPaz?HWYE1n$"
                    resolutionX={32}
                    resolutionY={32}
                    width="100%"
                    height="15rem"
                    punch={0}
                />
            )}
        </>
    )
}
LazyloadImage.defaultProps = {
    exteranlclass: "",
}

LazyloadImage.propTypes = {
    image: PropTypes.string.isRequired,
    exteranlclass: PropTypes.string,
}
