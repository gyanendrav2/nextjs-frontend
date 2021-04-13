import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"
// import AnchorLink from "react-anchor-link-smooth-scroll"
import { UserConfirmContainer } from "../components/userConfirmContainer/userConfirmContainer"
import { colors } from "../theme/colors"
import { TwoColGrid } from "../components/grid/twoColGrid"
import { ProfileContent } from "../containers/settings/profileContent"
import { NotificationContent } from "../containers/settings/notificationContent"
import { Footer } from "../components/footer"
import { HeaderWrapper } from "../components/header/headerWrapper"
import { DeleteContent } from "../containers/settings/deleteContent"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.lighterPrimary,
        padding: "7rem 10rem 2rem 10rem",
        "@media (min-width:200px) and (max-width:767px)": {
            padding: "6rem 0rem 2rem 1rem",
        },
        "@media (min-width:768px) and (max-width:1350px)": {
            padding: "7rem 2rem 2rem 2rem",
        },
    },
    mainTitle: {
        marginTop: "2rem",
        marginBottom: "2rem",
        "@media (min-width:200px) and (max-width:767px)": {
            marginBottom: "1.5rem",
        },
    },
    col1: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        border: `1px solid ${colors.lightGray}`,
        backgroundColor: colors.white,
        // marginRight: "2rem",
        position: "sticky",
        top: "6rem",
    },
    col1item: {
        padding: "1rem",
        fontSize: "1rem",
        lineHeight: "1.375rem",
        borderBottom: `1px solid ${colors.lightGray}`,
        width: "100%",
    },

    deleteContainer: {
        marginBottom: "-7.4rem",
    },
})
const Settings = () => {
    const classes = useStyles()
    return (
        <>
            <HeaderWrapper isAuthenticated isScrollDetect={false} />
            <Box className={classes.wrapper}>
                <Typography variant="h4" className={classes.mainTitle}>
                    Settings
                </Typography>
                <TwoColGrid
                    col1Children={
                        <Grid container direction="column" display="flex" className={classes.col1}>
                            <Typography className={classes.col1item}>
                                {/* <AnchorLink offset="100" href="#profile"> */}
                                Profile
                                {/* </AnchorLink> */}
                            </Typography>
                            <Typography className={classes.col1item}>
                                {/* <AnchorLink offset="700" href="#notifications"> */}
                                Notifications
                                {/* </AnchorLink> */}
                            </Typography>
                            <Typography className={classes.col1item}>
                                {/* <AnchorLink href="#deactivate"> */}
                                Delete or deactivate account
                                {/* </AnchorLink> */}
                            </Typography>
                        </Grid>
                    }
                    col2Children={
                        <>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <section id="profile">
                                    <ProfileContent />
                                </section>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <section id="notifications">
                                    <NotificationContent />
                                </section>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.deleteContainer}>
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
