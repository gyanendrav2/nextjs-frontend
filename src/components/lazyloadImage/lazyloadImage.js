import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Blurhash } from "react-blurhash"

export const LazyloadImage = ({ image, exteranlclass, blurhashHeight }) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const isImageLoaded = (imgLink) => {
        const img = new Image()
        img.src = imgLink
        img.onload = () => setIsLoaded(true)
    }

    useEffect(() => {
        isImageLoaded(image)
    }, [image])

    return (
        <>
            {!isLoaded ? (
                <Blurhash
                    hash="U55;{wxuxD~BIpWCRiIAELt7ozR,xCRPNHkD"
                    resolutionX={4}
                    resolutionY={4}
                    width="100%"
                    height={blurhashHeight}
                    punch={1}
                />
            ) : (
                <LazyLoadImage
                    alt={image}
                    className={exteranlclass}
                    effect="blur"
                    height="100%"
                    src={image}
                    width="100%"
                />
            )}
        </>
    )
}
LazyloadImage.defaultProps = {
    exteranlclass: "",
    blurhashHeight: "15rem",
}

LazyloadImage.propTypes = {
    image: PropTypes.string.isRequired,
    exteranlclass: PropTypes.string,
    blurhashHeight: PropTypes.number,
}
