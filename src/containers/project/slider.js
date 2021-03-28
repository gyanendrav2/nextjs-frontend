import React from "react"
import Carousel from "nuka-carousel"
import { Box, makeStyles } from "@material-ui/core"
import { SliderButton } from "./sliderButton"
import { ArrowLeft } from "../../components/icons/arrowLeft"
import { ArrowRight } from "../../components/icons/arrowRight"
import { images } from "../../assets/images"

const useStyles = makeStyles({
    seperator: {
        padding: "4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& div": {
            maxWidth: "10rem",
        },
    },
    image: {
        height: "45rem",
        objectFit: "cover",
    },
})

export const Slider = () => {
    const classes = useStyles()

    return (
        <>
            <Carousel
                renderCenterLeftControls={({ previousSlide }) => (
                    <SliderButton
                        buttonName="Previous"
                        flexDirection="row-reverse"
                        buttonIcon={<ArrowLeft />}
                        onClick={previousSlide}
                    />
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <SliderButton
                        buttonName="Next"
                        flexDirection="row"
                        buttonIcon={<ArrowRight />}
                        onClick={nextSlide}
                    />
                )}>
                <img src={images.fullWidthImage} className={classes.image} alt="" />
                <img src={images.fullWidthImage} className={classes.image} alt="" />
                <img src={images.fullWidthImage} className={classes.image} alt="" />
                <img src={images.fullWidthImage} className={classes.image} alt="" />
            </Carousel>
            <Box className={classes.seperator} />
        </>
    )
}

Slider.propTypes = {}
