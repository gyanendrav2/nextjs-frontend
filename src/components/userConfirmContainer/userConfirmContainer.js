import { Box, Grid, makeStyles } from "@material-ui/core"
import React from "react"
import classnames from "classnames"
import PropTypes from "prop-types"
import { colors } from "../../theme/colors"
import CustomButton from "../buttons/customButton"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.lighterPrimary,
        width: "100%",
        "@media(max-width:767px)": {
            padding: "0.5rem",
        },
    },
    submitContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        maxWidth: "37.5rem",
        margin: "0 auto",
        padding: "2rem 0 1rem 0",
        marginTop: "8.5rem",
        "@media(max-width:1024px)": {
            marginTop: "3.5rem",
        },
        "@media(max-width:767px)": {
            marginTop: "1rem",
            flexDirection: "column-reverse",
            alignItems: "inherit",
            padding: 0,
        },
    },
    submitBtn: {
        width: "100%",
        cursor: "pointer",
    },
    Btn: {
        color: colors.red,
        paddingTop: "0.75rem",
        lineHeight: "1.375rem",
        fontSize: "1rem",
        marginBottom: "2.562rem",
    },
    deleteContainer: {
        maxWidth: "37.5rem",
        margin: "auto",
        width: "100%",
        backgroundColor: colors.lighterPrimary,
    },
    deleteBtn: {
        width: "100%",
        backgroundColor: colors.lighterPrimary,
        color: colors.red,
        marginBottom: "0.187rem",
        "&:hover": {
            backgroundColor: colors.lighterPrimary,
            color: colors.red,
        },
    },
    spacing: {
        padding: "0.5rem!important",
    },
})

export const UserConfirmContainer = ({ settingsPage, onConfirmClicked, closeAddcategory }) => {
    const classes = useStyles()

    return (
        <Box className={classes.wrapper}>
            <Grid container spacing={2} className={classes.submitContainer}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.spacing}>
                    <CustomButton variant="cancel" label="cancel" onClick={closeAddcategory} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classnames(classes.submit, classes.spacing)}>
                    <CustomButton label="Confirm" externalclass={classes.submitBtn} onClick={onConfirmClicked} />
                </Grid>
            </Grid>
            <Grid container spacing={2} className={classnames(classes.deleteContainer, classes.spacing)}>
                {!settingsPage && (
                    <CustomButton label="Delete" externalclass={classes.deleteBtn} onClick={onConfirmClicked} />
                )}
            </Grid>
        </Box>
    )
}

UserConfirmContainer.defaultProps = {
    settingsPage: false,
}
UserConfirmContainer.propTypes = {
    settingsPage: PropTypes.bool,
    onConfirmClicked: PropTypes.func.isRequired,
    closeAddcategory: PropTypes.func.isRequired,
}
