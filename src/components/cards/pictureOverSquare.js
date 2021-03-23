import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, makeStyles } from "@material-ui/core";
import { colors } from "../../theme/colors";

const useStyles = makeStyles({
    wrapper: {
        position: "relative",
    },
    square: {
        width: "11.125rem",
        height: "11.125rem",
        backgroundColor: colors.pink,
    },
    profile: {
        width: "13.25rem",
        height: "13.25rem",
        position: "absolute",
        top: "2rem",
        left: "2rem",
        zIndex: 2,
    },
});

const PictureOverSquare = ({ image }) => {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <Box className={classes.square}></Box>
            <Avatar src={image} className={classes.profile} />
        </Box>
    );
};

PictureOverSquare.propTypes = {
    image: PropTypes.string,
};

export default PictureOverSquare;
