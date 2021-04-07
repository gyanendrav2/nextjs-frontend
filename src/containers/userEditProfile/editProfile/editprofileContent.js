import { Box, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { colors } from "../../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.white,
    },
    mainTitle: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: "0.875rem",
        lineHeight: "1rem",
        color: colors.lighterGray,
        textAlign: "left",
        paddingBottom: "1.5rem",
        paddingLeft: "2rem",
        paddingTop: "2rem",
    },
})
export const EditProfileContent = () => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <Typography className={classes.mainTitle}>Profile</Typography>
        </Box>
    )
}
