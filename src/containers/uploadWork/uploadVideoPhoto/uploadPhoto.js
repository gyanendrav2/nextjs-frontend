import React from "react"
import PropTypes from "prop-types"
import { Box, Grid, makeStyles } from "@material-ui/core"
import { colors } from "../../../theme/colors"
import CustomButton from "../../../components/buttons/customButton"
import { TwoColCarousel } from "./twoColCarousel"
import { CloseIconBig } from "../../../components/icons/closeIconBig"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.white,
        marginBottom: "1rem",
        padding: "2rem",
        position: "relative",
    },
    innerWrapper: {
        backgroundColor: colors.lighterPrimary,
        padding: "4.5rem 0",
    },
    button: {
        padding: "1.5rem",
    },
    closeIcon: {
        position: "absolute",
        top: "0.5rem",
        right: "0.5rem",
        cursor: "pointer",
        color: colors.lighterGray,
        "@media (max-width:767px)": {
            top: "0.5rem",
            right: "0.5rem",
        },
    },
})

export const UploadPhoto = ({ onDelete }) => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <Box className={classes.closeIcon}>
                <CloseIconBig width={16} onClick={onDelete} />
            </Box>
            <Grid container alignItems="center" justify="center" className={classes.innerWrapper}>
                <CustomButton
                    label="Upload up to 50 photos +"
                    wantFile
                    allowMultiple
                    onFileChange={(files) => {
                        console.log(files)
                    }}
                    externalclass={classes.button}
                />
            </Grid>
            <TwoColCarousel />
        </Box>
    )
}

UploadPhoto.propTypes = {
    onDelete: PropTypes.func.isRequired,
}
