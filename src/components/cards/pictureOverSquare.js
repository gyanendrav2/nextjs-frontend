import React from "react"
import PropTypes from "prop-types"
import { Box, makeStyles } from "@material-ui/core"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        position: "relative",
        // textAlign: "center",
        // margin: "2rem",
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
        borderRadius: "50%",
    },
})

export const PictureOverSquare = ({ image }) => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <Box className={classes.square} />
            <img src={image} alt={image} className={classes.profile} />
        </Box>
    )
}

PictureOverSquare.propTypes = {
    image: PropTypes.string.isRequired,
}
