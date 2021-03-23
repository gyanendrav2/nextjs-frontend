import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles } from "@material-ui/core";
import Link from "next/link";
import classnames from "classnames";
import { icons } from "../../assets/icons";
import { colors } from "../../theme/Colors";

const useStyles = makeStyles({
    iconContainer: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        margin: "0 auto",
    },
    Images: {
        height: "2.25rem",
        width: "2.25rem",
        backgroundColor: colors.black,
        marginRight: "1.5rem",
        // color: colors.black,
    },
});

const SocialIcons = () => {
    const classes = useStyles();
    return (
        <Box className={classes.iconContainer}>
            <Link href="/">
                <img className={classnames(classes.itemPadding, classes.Images)} alt="fb" src={icons.Fb}></img>
            </Link>
            <Link href="/">
                <img className={classnames(classes.itemPadding, classes.Images)} alt="Insta" src={icons.Insta}></img>
            </Link>
            <Link href="/">
                <img
                    className={classnames(classes.itemPadding, classes.Images)}
                    alt="Linked In"
                    src={icons.Linkedin}></img>
            </Link>
        </Box>
    );
};

SocialIcons.propTypes = {};

export default SocialIcons;
