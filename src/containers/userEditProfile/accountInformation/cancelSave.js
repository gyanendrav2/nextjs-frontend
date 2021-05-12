import { Box, Grid, makeStyles } from "@material-ui/core"
import React from "react"
import { CustomButton } from "../../../components/buttons/customButton"
import { colors } from "../../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        marginTop: "1rem",
        padding: "2rem 1rem",
        backgroundColor: colors.white,
        "@media(max-width:767px)": {
            display: "flex",
            flexDirection: "column-reverse",
        },
    },
    buttonCancel: {
        height: "3.5rem",
        padding: "1rem 3rem",
    },
    buttonSave: {
        width: "100%",
    },
    wrap: {
        flexWrap: "nowrap",
        "@media (max-width: 767px)": {
            flexWrap: "wrap",
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
            <Grid container spacing={2} alignItems="center" justify="space-between" className={classes.wrap}>
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
