import React from "react"
import PropTypes from "prop-types"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { colors } from "../../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        marginTop: "2.5rem",
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: colors.white,
    },
    title: {
        fontFamily: "Forno-Trial",
        fontWeight: "700",
        textAlign: "center",
        color: colors.black,
        fontSize: "3.125rem",
        lineHeight: "2.625",
        animation: "fadeIn 1s",
        "@media(max-width:432px)": {
            lineHeight: "4.75rem",
        },
    },
    subTitle: {
        textAlign: "center",
        fontSize: "2rem",
        fontWeight: "400",
        lineHeight: "1.5",
        color: colors.black,
    },
})

export const HeaderCategory = ({ categoryName }) => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <Typography className={classes.title}>{categoryName}</Typography>
            <Typography className={classes.subTitle}>Shuffle between categories and get inspired!</Typography>
        </Box>
    )
}

HeaderCategory.propTypes = {
    categoryName: PropTypes.string.isRequired,
}
