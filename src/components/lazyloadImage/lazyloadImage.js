import React, { useState } from "react"
import PropTypes from "prop-types"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Blurhash } from "react-blurhash"
import { Box, makeStyles } from "@material-ui/core"
import classnames from "classnames"

const useStyles = makeStyles({
    container: {
        position: "relative",
        paddingTop: "62%",
        "& span.lazy-load-image-background": {
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%",
            cursor: "pointer",
        },
    },
    imageLoadDetect: {
        width: 0,
        height: 0,
        visibility: "hidden",
    },
    blurHash: {
        position: "absolute!important",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
})

export const LazyloadImage = ({ image, externalclass, blurhashHeight }) => {
    const classes = useStyles()
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <Box className={classes.container}>
            <img className={classes.imageLoadDetect} onLoad={() => setIsLoaded(true)} src={image} alt={image} />
            {!isLoaded ? (
                <Blurhash
                    hash="U55;{wxuxD~BIpWCRiIAELt7ozR,xCRPNHkD"
                    resolutionX={4}
                    resolutionY={4}
                    width="100%"
                    height={blurhashHeight}
                    punch={1}
                    className={classes.blurHash}
                />
            ) : (
                <LazyLoadImage
                    alt={image}
                    className={classnames(classes.image, externalclass)}
                    effect="blur"
                    height="100%"
                    src={image}
                    width="100%"
                />
            )}
        </Box>
    )
}
LazyloadImage.defaultProps = {
    externalclass: "",
    blurhashHeight: "100%",
}

LazyloadImage.propTypes = {
    image: PropTypes.string.isRequired,
    externalclass: PropTypes.string,
    blurhashHeight: PropTypes.string,
}
