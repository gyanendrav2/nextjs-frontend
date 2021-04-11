import React from "react"
import PropTypes from "prop-types"
import { Box, Grid, makeStyles } from "@material-ui/core"
import { colors } from "../../../theme/colors"
import { CustomButton } from "../../../components/buttons/customButton"

const useStyles = makeStyles({
    wrapper: {
        padding: "2rem",
        backgroundColor: colors.white,
    },
    button: {
        padding: "1.5rem",
    },
})

export const UploadPhoto = (props) => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <Grid container alignItems="center" justify="center">
                <CustomButton label="Upload up to 50 photos +" externalclass={classes.button} />
            </Grid>
        </Box>
    )
}

UploadPhoto.propTypes = {}
