import React from "react";
import PropTypes from "prop-types";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import SliderButton from "./sliderButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Slider = () => {
    const imageList = [
        { url: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg", htmlContent: null },
        { url: "https://i.pinimg.com/originals/3b/1c/fa/3b1cfaff4adbaa3aa4d781bc25dde452.jpg", htmlContent: null },
        { url: "https://i.pinimg.com/originals/aa/23/92/aa2392f40795d215302934420387cf10.jpg", htmlContent: null },
        { url: "https://images.pexels.com/photos/2929227/pexels-photo-2929227.jpeg", htmlContent: null },
    ];

    return (
        <ImageSlider
            imageList={imageList}
            leftButton={<SliderButton buttonName="Next" buttonIcon={<ArrowBackIcon/>} />}
            rightButton={<SliderButton buttonName="Previous" buttonIcon={<ArrowBackIcon/>} />}
            transition={1}
            height="100vh"
            infiniteSlide={true}
        />
    );
};

Slider.propTypes = {};

export default Slider;
