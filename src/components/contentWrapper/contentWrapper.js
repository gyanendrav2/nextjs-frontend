import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles } from "@material-ui/core";
import { colors } from "../../theme/colors";
import classnames from "classnames";

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.white,
        paddingLeft: "2rem",
        paddingRight: "2rem",
        "@media (max-width:767px)": {
            paddingLeft: "1rem",
            paddingRight: "1rem",
        },
    },
});

const ContentWrapper = ({ externalClass, children }) => {
    const classes = useStyles();
    return <Box className={classnames(classes.wrapper, externalClass)}>{children}</Box>;
};

ContentWrapper.propTypes = {
    children: PropTypes.element,
    externalClass: PropTypes.string,
};

export default ContentWrapper;
