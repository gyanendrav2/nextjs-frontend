import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { useRouter } from "next/router"
import React from "react"
import { TwoColGrid } from "../../components/grid/twoColGrid"
import { HeaderWrapper } from "../../components/header/headerWrapper"
import { colors } from "../../theme/colors"
import { Footer } from "../../components/footer"
import { AccountInformation } from "../../containers/userEditProfile/accountInformation"
import { EditOptions } from "../../containers/userEditProfile/editOptions"
import ShowReel from "../../containers/userEditProfile/showreel"

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

    // deleteContainer: {
    //     backgroundColor: colors.white,
    // },

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
