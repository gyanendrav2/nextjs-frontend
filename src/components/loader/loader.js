import { Box, makeStyles } from "@material-ui/core"
import React from "react"
import { icons } from "../../assets/icons"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.black,
        width: "100%",
        height: "100vh",
        zIndex: 999,
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        animation: "zoomIn 1s linear infinite",
    },
})

export const Loader = () => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <img src={icons.logoWhite} className={classes.image} alt="logo" />
        </Box>
    )
}
