import React from "react"
import Carousel from "nuka-carousel"
import { Box, makeStyles } from "@material-ui/core"
import { SliderButton } from "./sliderButton"
import { ArrowCircleLeftIcon } from "../../components/icons/arrowCircleLeftIcon"
import { ArrowCircleRightIcon } from "../../components/icons/arrowCircleRightIcon"
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

const Slider = () => {
    const classes = useStyles()

    return (
        <div className="project__slider">
            <Carousel
                renderCenterLeftControls={({ previousSlide, currentSlide }) => (
                    <SliderButton
                        buttonName="Previous"
                        flexDirection="row-reverse"
                        disabledButton={currentSlide === 0}
                        buttonIcon={<ArrowCircleLeftIcon />}
                        onClick={previousSlide}
                    />
                )}
                renderCenterRightControls={({ nextSlide, currentSlide }) => (
                    <SliderButton
                        buttonName="Next"
                        flexDirection="row"
                        disabledButton={currentSlide === 3}
                        buttonIcon={<ArrowCircleRightIcon />}
                        onClick={nextSlide}
                    />
                )}>
                <img src={images.fullWidthImage} className={classes.image} alt="" />
                <img src={images.fullWidthImage} className={classes.image} alt="" />
                <img src={images.fullWidthImage} className={classes.image} alt="" />
                <img src={images.fullWidthImage} className={classes.image} alt="" />
            </Carousel>
            <Box className={classes.seperator} />
        </div>
    )
}

Slider.propTypes = {}

export default Slider
