import React from "react"
// import PropTypes from "prop-types"
import { Box, Grid, makeStyles } from "@material-ui/core"
import { colors } from "../../../theme/colors"
import { CustomButton } from "../../../components/buttons/customButton"
import { TwoColCarousel } from "./twoColCarousel"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.white,
        marginBottom: "1rem",
        padding: "2rem",
    },
    innerWrapper: {
        backgroundColor: colors.lighterPrimary,
        padding: "4.5rem 0",
    },
    button: {
        padding: "1.5rem",
    },
})

export const UploadPhoto = () => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <Grid container alignItems="center" justify="center" className={classes.innerWrapper}>
                <CustomButton label="Upload up to 50 photos +" externalclass={classes.button} />
            </Grid>
            <TwoColCarousel />
        </Box>
    )
}

UploadPhoto.propTypes = {}
