import { Box, Grid, makeStyles } from "@material-ui/core"
import React from "react"
import CustomButton from "../../../components/buttons/customButton"
import { colors } from "../../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        marginTop: "1rem",
        padding: "2rem",
        border: `1px solid ${colors.lightGray}`,
        backgroundColor: colors.white,
        "@media(max-width:1024px)": {
            padding: "2rem",
        },
        "@media(max-width:767px)": {
            display: "flex",
            flexDirection: "column-reverse",
            padding: "2rem 1rem",
        },
    },
    buttonCancel: {
        height: "3.5rem",
        padding: "1rem 3rem",
        width: "100%",
    },
    buttonSave: {
        width: "calc(100% - 1rem)",
        height: "3.5rem",
        marginLeft: "1rem",
        "@media(max-width:767px)": {
            marginLeft: "0rem",
            width: "100%",
            marginBottom: "1rem",
        },
    },
    wrap: {
        flexWrap: "nowrap",
        width: "100%",
        "@media (max-width: 767px)": {
            flexWrap: "wrap",
            padding: "0.5rem 0",
            flexDirection: "column-reverse",
            "& div": {
                width: "100%",
            },
        },
    },
})

export const CancelSave = () => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <Grid container alignItems="center" justify="space-between" className={classes.wrap}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <CustomButton label="Cancel" variant="cancel" externalclass={classes.buttonCancel} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <CustomButton label="Save changes" externalclass={classes.buttonSave} />
                </Grid>
            </Grid>
        </Box>
    )
}
