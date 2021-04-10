import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { UserConfirmContainer } from "../components/userConfirmContainer/userConfirmContainer"
import { colors } from "../theme/colors"
import { TwoColGrid } from "../components/grid/twoColGrid"
import { ProfileContent } from "../containers/userEditProfile/settings/profileContent"
import { NotificationContent } from "../containers/userEditProfile/settings/notificationContent"
import { Footer } from "../components/footer"
import { HeaderWrapper } from "../components/header/headerWrapper"
import { DeleteContent } from "../containers/userEditProfile/settings/deleteContent"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.lightGray,
        padding: "9rem 10rem 0rem 10rem",
    },
    mainTitle: {
        fontFamily: "Forno-Trial",
        fontWeight: 900,
        fontSize: "2rem",
        lineheight: "2.875rem",
        marginBottom: "1rem",
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
})
const Settings = () => {
    const classes = useStyles()
    return (
        <>
            <HeaderWrapper isAuthenticated isScrollDetect={false} />
            <Box className={classes.wrapper}>
                <Typography className={classes.mainTitle}>Settings</Typography>
                <TwoColGrid
                    col1Children={
                        <Grid container direction="column" display="flex" className={classes.col1}>
                            <Typography className={classes.col1item}>Profile</Typography>
                            <Typography className={classes.col1item}>Notifications</Typography>
                            <Typography className={classes.col1item}>Delete or deactivate account</Typography>
                        </Grid>
                    }
                    col2Children={
                        <>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <ProfileContent />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <NotificationContent />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <DeleteContent />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <UserConfirmContainer settingsPage />
                            </Grid>
                        </>
                    }
                />
            </Box>

            <Footer externalclass={classes.footer} />
        </>
    )
}

export default Settings
