import React from "react"
import PropTypes from "prop-types"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { colors } from "../../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        padding: "2rem",
        paddingTop: "8rem",
        paddingBottom: "2.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: colors.white,
        "@media (max-width:767px)": {
            padding: "7rem 1rem 2rem 1rem",
        },
    },
    title: {
        fontFamily: "Forno-Trial",
        fontWeight: "700",
        textAlign: "center",
        color: colors.black,
        fontSize: "3.125rem",
        animation: "fadeIn 1s",
        "@media (min-width:768px) and (max-width:1024px)": {
            marginBottom: "1rem",
        },
        "@media (max-width:767px)": {
            fontSize: "2.5rem",
            marginBottom: "1.625rem",
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
