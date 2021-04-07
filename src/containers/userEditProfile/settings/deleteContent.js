import { Box, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { colors } from "../../../theme/colors"

const useStyles = makeStyles({
    title: {
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

export const DeleteContent = () => {
    const classes = useStyles()
    return (
        <Box className={classes.deleteContainer}>
            <Typography className={classes.title}>DELETE OR DEACTIVATE ACCOUNT</Typography>
            <Typography>
                Would you like to delete your PXL account? Deleting your account will remove all of your projects and
                data.
            </Typography>
        </Box>
    )
}
