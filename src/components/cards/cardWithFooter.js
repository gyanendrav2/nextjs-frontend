import React, { useState } from "react";
import { colors } from "../../theme/colors";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import LazyloadImage from "../lazyloadImage/lazyloadImage";

const useStyles = makeStyles({
    cardWrapper: {
        boxShadow: `0px 1px 1px ${colors.lightGray}`,
        flex: "1",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        cursor: "pointer",
    },
    cardImageContainer: {
        position: "relative",
    },
    projectImage: {
        display: "block",
    },
    image: {
        display: "block",
        width: "100%",
        height: "15rem",
        objectFit: "cover",
        transition: "all 0.5s",
        "&::before": {
            content: "",
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            background:
                "linear-gradient(0deg,#000000 0%,rgba(0, 0, 0, 0.8) 16.56%,rgba(0, 0, 0, 0.4) 32.46%, rgba(0, 0, 0, 0.2) 46.94%,rgba(0, 0, 0, 0) 100%);",
        },
    },
    ProjectTitle: {
        position: "absolute",
        bottom: "1rem",
        left: "1rem",
        color: colors.white,
        fontSize: "1rem",
        fontWeight: "500",
    },
    roundImage: {
        borderRadius: "50%",
        marginRight: "0.5rem",
        marginTop: "0.1rem",
        width: "2.625rem",
        height: "2.625rem",
    },
    cardFooter: {
        border: "1px solid rgba(0, 0, 0, 0.05)",
        display: "flex",
        padding: "0.75rem",
        flex: "1",
        height: "100%",
    },
    projectAuthorName: {
        fontSize: "1rem",
        color: colors.black,
    },
    projectAuthorJobTitle: {
        fontSize: "0.875rem",
        color: colors.lighterGray,
    },
    red: {
        background: "red",
    },
});
const CardWithFooter = ({ image, title, footerTitle, footerSubitle, handleClick, hideFooter }) => {
    const classes = useStyles();
    const [isHovering, setisHovering] = useState(false);

    const handleMouseHover = () => {
        setisHovering(true);
    };
    const handleMouseOut = () => {
        setisHovering(false);
    };

    return (
        <Box className={classes.cardWrapper} onClick={handleClick}>
            <Box className={classes.cardImageContainer} onMouseLeave={handleMouseOut}>
                <Box className={classes.projectImage} onMouseEnter={handleMouseHover}>
                    <LazyloadImage image={image} externalClass={classes.image} />
                </Box>
                {isHovering && <Typography className={classes.ProjectTitle}>{title}</Typography>}
            </Box>
            {!hideFooter && (
                <Box className={classes.cardFooter}>
                    <Box>
                        <img className={classes.roundImage} src={image} alt={title} />
                    </Box>
                    <Box>
                        <Typography className={classes.projectAuthorName}>{footerTitle}</Typography>
                        <Typography className={classes.projectAuthorJobTitle}>{footerSubitle}</Typography>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

CardWithFooter.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    footerTitle: PropTypes.string,
    footerSubitle: PropTypes.string,
    handleClick: PropTypes.func,
    hideFooter: PropTypes.bool,
};
export default CardWithFooter;
