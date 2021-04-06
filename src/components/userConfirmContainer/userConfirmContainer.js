import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { colors } from "../../theme/colors"
import { CustomButton } from "../buttons/customButton"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.lighterPrimary,
        width: "100%",
    },
    submitContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        maxWidth: "37.5rem",
        justifyContent: "space-betweem",
        margin: "0 auto",
        padding: "2rem 0",
        marginTop: "8.5rem",
    },
    submitBtn: {
        width: "100%",
        // padding: "1rem",
        cursor: "pointer",
    },
    Btn: {
        color: colors.red,
        paddingTop: "1rem",
        lineHeight: "1.375rem",
        fontSize: "1rem",
    },
})

export const UserConfirmContainer = () => {
    const classes = useStyles()

    return (
        <Box className={classes.wrapper}>
            <Grid container spacing={2} className={classes.submitContainer}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <CustomButton variant="cancel" label="cancel" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.submit}>
                    <CustomButton label="Confirm" type="submit" externalclass={classes.submitBtn} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography className={classes.Btn}>Delete</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}
