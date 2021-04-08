import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { CustomButton } from "../../../components/buttons/customButton"
import { colors } from "../../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        marginTop: "1rem",
        padding: "2rem",
        backgroundColor: colors.white,
    },
    button: {
        backgroundColor: colors.lightGray,
        height: "2.5rem",
        padding: "0.625rem 3rem",
        color: colors.black,
    },
    title: {
        color: colors.lightGray,
        fontSize: "0.85rem",
    },
    wrap: {
        flexWrap: "nowrap",
        "@media (max-width:767px)": {
            flexWrap: "wrap",
            flexDirection: "column",
            "& button": {
                width: "100%",
            },
        },
    },
})

export const ConvertVideoOrPhoto = () => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <Typography className={classes.title}>COVER VIDEO OR PHOTO</Typography>
            <Grid container alignItems="center" justify="space-between" className={classes.wrap}>
                <CustomButton label="Copy embed video" externalclass={classes.button} />
                <Typography>or</Typography>
                <CustomButton label="Upload a photo" externalclass={classes.button} />
            </Grid>
        </Box>
    )
}
