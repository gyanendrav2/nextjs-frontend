import React from "react"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { CustomButton } from "../../components/buttons/customButton"
import { colors } from "../../theme/colors"
import { CancelSave } from "../userEditProfile/accountInformation/cancelSave"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.white,
        padding: "2rem",
        "@media(max-width:576px)": {
            padding: "1rem",
        },
    },
    title: {
        textAlign: "left",
        paddingBottom: "1.5rem",
    },
    deleteContainer: {
        marginTop: "0.5rem",
        marginLeft: "-0.5rem",
    },
})

export const DeleteContent = () => {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.wrapper}>
                <Typography variant="h6" className={classes.title}>
                    DELETE OR DEACTIVATE ACCOUNT
                </Typography>
                <Typography>
                    Would you like to delete your PXL account? Deleting your account will remove all of your projects
                    and data.
                </Typography>
                <Grid className={classes.deleteContainer}>
                    <CustomButton variant="textButton" label="Delete account" color={colors.darkRed} />
                    <CustomButton
                        variant="textButton"
                        label="Deactivate account"
                        externalclass={classes.btnStyles}
                        color={colors.darkRed}
                    />
                </Grid>
            </Box>
            <CancelSave />
        </>
    )
}