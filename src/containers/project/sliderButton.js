import React from "react";
import PropTypes from "prop-types";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    wrapper: {
        cursor: "pointer",
    },
});

const SliderButton = ({ buttonIcon, buttonName, flexDirection, onClick }) => {
    const classes = useStyles();
    return (
        <Grid
            container
            alignItems="center"
            justify="space-between"
            direction={flexDirection}
            onClick={onClick}
            className={classes.wrapper}>
            {buttonName}
            {buttonIcon}
        </Grid>
    );
};

SliderButton.propTypes = {
    buttonIcon: PropTypes.element,
    buttonName: PropTypes.string,
    flexDirection: PropTypes.string,
    onClick: PropTypes.func,
};

export default SliderButton;
