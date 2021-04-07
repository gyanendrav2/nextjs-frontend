import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { Footer } from "../components/footer"
import { TwoColGrid } from "../components/grid/twoColGrid"
import { HeaderWrapper } from "../components/header/headerWrapper"
import { EditProfileContent } from "../containers/userEditProfile/editProfile/editprofileContent"
import { colors } from "../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.lightGray,
        padding: "7rem 10rem 2rem 10rem",
    },
    mainTitle: {
        fontFamily: "Forno-Trial",
        fontWeight: 900,
        fontSize: "2rem",
        lineheight: "2.875rem",
    },
    col1: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        border: `1px solid ${colors.lightGray}`,
        backgroundColor: colors.white,
        marginRight: "2rem",
    },
    col1item: {
        padding: "1rem",
        fontSize: "1rem",
        lineHeight: "1.375rem",
        borderBottom: `1px solid ${colors.lightGray}`,
        width: "100%",
    },

    deleteContainer: {
        backgroundColor: colors.white,
    },

    radioboxWrapper: {
        margin: "2rem 0 0 0",
    },
    radioboxContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    checkBoxStyles: {
        "&.MuiIconButton-root": {
            "&:hover": {
                backgroundColor: "unset",
            },
        },
        "&.MuiIconButton-colorSecondary": {
            "&:hover": {
                backgroundColor: "unset",
            },
        },
    },
    checkboxText: {
        fontSize: "0.9rem",
    },
})
const EditProfile = () => {
    const classes = useStyles()
    return (
        <>
            <HeaderWrapper isAuthenticated isScrollDetect={false} />
            <Box className={classes.wrapper}>
                <Typography className={classes.mainTitle}>Edit profile</Typography>
                <TwoColGrid
                    col1Children={
                        <Grid container direction="column" display="flex" className={classes.col1}>
                            <Typography className={classes.col1item}>Account Information</Typography>
                            <Typography className={classes.col1item}>Showreel video/photo</Typography>
                        </Grid>
                    }
                    col2Children={
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <EditProfileContent />
                        </Grid>
                    }
                />
            </Box>

            <Footer externalclass={classes.footer} />
        </>
    )
}

export default EditProfile
