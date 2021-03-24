import React, { useState } from "react";
// import PropTypes from "prop-types";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import SliderButton from "./sliderButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    seperator: {
        padding: "4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& div": {
            maxWidth: "6rem",
        },
    },
});

const Slider = () => {
    const classes = useStyles();
    const [slideLeftClick, setSlideLeftClick] = useState(0);
    const [slideRightClick, setSlideRightClick] = useState(0);

    const imageList = [
        { url: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg" },
        { url: "https://i.pinimg.com/originals/3b/1c/fa/3b1cfaff4adbaa3aa4d781bc25dde452.jpg" },
        { url: "https://i.pinimg.com/originals/aa/23/92/aa2392f40795d215302934420387cf10.jpg" },
        { url: "https://images.pexels.com/photos/2929227/pexels-photo-2929227.jpeg" },
    ];

    return (
        <>
            <ImageSlider
                imageList={imageList}
                transition={1}
                outerLeftBtnClicked={slideLeftClick}
                outerRightBtnClicked={slideRightClick}
                height="45rem"
                infiniteSlide={true}
            />
            <Box className={classes.seperator}>
                <Box>
                    <SliderButton
                        buttonName="previous"
                        flexDirection="row-reverse"
                        buttonIcon={<ArrowBackIcon />}
                        onClick={() => setSlideLeftClick(slideLeftClick - 1)}
                    />
                </Box>
                <Box>
                    <SliderButton
                        buttonName="next"
                        buttonIcon={<ArrowForwardIcon />}
                        onClick={() => setSlideRightClick(slideRightClick + 1)}
                    />
                </Box>
            </Box>
        </>
    );
};

Slider.propTypes = {};

export default Slider;
