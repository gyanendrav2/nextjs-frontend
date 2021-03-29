import React from "react"
import Carousel from "nuka-carousel"
import { Box, makeStyles } from "@material-ui/core"
import { SliderButton } from "./sliderButton"
import { ArrowLeftIcon } from "../../components/icons/arrowLeftIcon"
import { ArrowRightIcon } from "../../components/icons/arrowRightIcon"
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
                renderCenterLeftControls={({ previousSlide, currentSlide }) => (
                    <SliderButton
                        buttonName="Previous"
                        flexDirection="row-reverse"
                        disabledButton={currentSlide === 0}
                        buttonIcon={<ArrowLeftIcon />}
                        onClick={previousSlide}
                    />
                )}
                renderCenterRightControls={({ nextSlide, currentSlide }) => (
                    <SliderButton
                        buttonName="Next"
                        flexDirection="row"
                        disabledButton={currentSlide === 3}
                        buttonIcon={<ArrowRightIcon />}
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
