import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"
import React from "react"
import { colors } from "../../theme/colors"

const HeaderWrapper = dynamic(() => import("../../components/header/headerWrapper"))
const EditOptions = dynamic(() => import("../../containers/userEditProfile/editOptions"))
const Footer = dynamic(() => import("../../components/footer"))
const ShowReel = dynamic(() => import("../../containers/userEditProfile/showreel"))
const TwoColGrid = dynamic(() => import("../../components/grid/twoColGrid"))
const AccountInformation = dynamic(() => import("../../containers/userEditProfile/accountInformation"))

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.lighterPrimary,
        minHeight: "100vh",
        padding: "8rem 9.062rem 2rem 9.062rem",
        "@media (min-width:1025px) and (max-width:1350px)": {
            padding: "8rem 2rem 2rem 2.5rem",
        },
        "@media (min-width:768px) and (max-width:1024px)": {
            padding: "8rem 2rem 2rem 2rem",
        },
        "@media (max-width:767px)": {
            padding: "7rem 1rem 2rem 1rem",
        },
    },
    mainTitle: {
        marginBottom: "1.5rem",
        paddingLeft: "0.625rem",
        "@media (max-width:1024px)": {
            paddingLeft: "0",
        },
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
        "@media(max-width:767px)": {
            margin: "0",
        },
    },
    footer: {
        marginTop: "0rem!important",
    },
})
const EditProfile = () => {
    const classes = useStyles()
    const { query, push } = useRouter()
    const { editOption } = query

    const renderOption = () => {
        if (editOption === "account-information") {
            return <AccountInformation />
        }
        if (editOption === "showreels-video-photos") {
            return <ShowReel />
        }
    }

    return (
        <>
            <HeaderWrapper isAuthenticated isScrollDetect={false} />
            <Box className={classes.wrapper}>
                <Typography variant="h4" className={classes.mainTitle}>
                    Edit profile
                </Typography>
                <TwoColGrid
                    externalclass={classes.whiteBg}
                    col1Children={
                        <Grid container direction="column" display="flex" className={classes.col1}>
                            <EditOptions
                                optionName="Account Information"
                                isActive={editOption === "account-information"}
                                onClick={() => push("/edit-profile/account-information")}
                            />
                            <EditOptions
                                optionName="Showreel video/photo"
                                isActive={editOption === "showreels-video-photos"}
                                onClick={() => push("/edit-profile/showreels-video-photos")}
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

export default EditProfile
