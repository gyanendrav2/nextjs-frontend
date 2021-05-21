import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import React from "react"
import { colors } from "../../theme/colors"

const HeaderWrapper = dynamic(() => import("../../components/header/headerWrapper"))
const Footer = dynamic(() => import("../../components/footer"))
const EditOptions = dynamic(() => import("../../containers/userEditProfile/editOptions"))
const TwoColGrid = dynamic(() => import("../../components/grid/twoColGrid"))
const ProfileContent = dynamic(() => import("../../containers/settings/profileContent"))
const NotificationContent = dynamic(() => import("../../containers/settings/notificationContent"))
const DeleteContent = dynamic(() => import("../../containers/settings/deleteContent"))

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.lighterPrimary,
        minHeight: "100vh",
        padding: "8rem 9.687rem 2rem 9.687rem",
        "@media (min-width:1024px) and (max-width:1350px)": {
            padding: "8rem 2rem 2rem 2.5rem",
        },
        "@media (min-width:768px) and (max-width:1024px)": {
            padding: "8rem 2rem 2rem 2rem",
        },
        "@media (max-width:767px)": {
            padding: "6rem 1rem 2rem 1rem",
        },
    },
    mainTitle: {
        marginBottom: "1.5rem",
        "@media (max-width:767px)": {
            marginBottom: "1.5rem",
        },
    },
    activeOption: {
        fontWeight: 800,
    },
    col1: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        border: `1px solid ${colors.lightGray}`,
        backgroundColor: colors.white,
        marginRight: "2rem",
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
    whiteBg: {
        backgroundColor: colors.lighterPrimary,
        position: "relative",
    },
    footer: {
        marginTop: "0rem!important",
    },
})
const Settings = () => {
    const classes = useStyles()
    const { query, push } = useRouter()
    const { editOption } = query

    const renderOption = () => {
        if (editOption === "profile") {
            return <ProfileContent />
        }
        if (editOption === "notifications") {
            return <NotificationContent />
        }
        if (editOption === "delete-deactivate") {
            return <DeleteContent />
        }
    }

    return (
        <>
            <HeaderWrapper isAuthenticated isScrollDetect={false} />
            <Box className={classes.wrapper}>
                <Typography variant="h4" className={classes.mainTitle}>
                    Settings
                </Typography>
                <TwoColGrid
                    externalclass={classes.whiteBg}
                    col1Children={
                        <Grid container direction="column" display="flex" className={classes.col1}>
                            <EditOptions
                                optionName="Profile"
                                isActive={editOption === "profile"}
                                onClick={() => push("/settings/profile")}
                            />
                            <EditOptions
                                optionName="Notifications"
                                isActive={editOption === "notifications"}
                                onClick={() => push("/settings/notifications")}
                            />
                            <EditOptions
                                optionName="Delete or Deactivate account"
                                isActive={editOption === "delete-deactivate"}
                                onClick={() => push("/settings/delete-deactivate")}
                            />
                        </Grid>
                    }
                    col2Children={
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            {renderOption()}
                        </Grid>
                    }
                />
            </Box>

            <Footer externalclass={classes.footer} />
        </>
    )
}

export default Settings
