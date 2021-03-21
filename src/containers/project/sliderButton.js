import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const SliderButton = ({ buttonIcon, buttonName, flexDirection }) => {
    return (
        <Grid container alignItems="center" justify="space-between" direction={flexDirection}>
            {buttonIcon}
            {ArrowBackIcon}
        </Grid>
    );
};

SliderButton.propTypes = {
    buttonIcon: PropTypes.element,
    buttonName: PropTypes.string,
    flexDirection: PropTypes.string,
};

export default SliderButton;
