import React from "react"
import PropTypes from "prop-types"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { colors } from "../../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        padding: "2rem",
        paddingTop: "6rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: colors.white,
        "@media (max-width:767px)": {
            padding: "auto 1rem 2rem 1rem",
        },
    },
    title: {
        fontFamily: "Forno-Trial",
        fontWeight: "700",
        textAlign: "center",
        color: colors.black,
        fontSize: "3.125rem",
        lineHeight: "2.625",
        animation: "fadeIn 1s",
        "@media (max-width:767px)": {
            fontSize: "2.5rem",
            lineHeight: "3rem",
        },
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
        "@media (max-width:767px)": {
            fontSize: "1.375rem",
            lineHeight: "2.125rem",
        },
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
