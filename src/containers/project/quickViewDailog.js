import React from "react"
import PropTypes from "prop-types"
import { Box, Avatar, Grid, makeStyles, Typography } from "@material-ui/core"
import { Close, MoreVert } from "@material-ui/icons"
import dynamic from "next/dynamic"
import classnames from "classnames"
import { useRouter } from "next/router"
import CustomButton from "../../components/buttons/customButton"
import { images } from "../../assets/images"
import { colors } from "../../theme/colors"

const ReportContentWrapper = dynamic(() => import("../../components/reportContentWrapper/reportContentWrapper"))

const useStyles = makeStyles({
    wrapper: {
        width: "100%",
        overflowY: "auto",
        backgroundColor: colors.black,
        padding: "2rem",
        paddingTop: 0,
        position: "fixed",
        zIndex: 100,
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        transition: "all 1s",
        // scrollbarColor:colors.black,
        "@media (max-width: 767px)": {
            padding: "1rem",
            paddingTop: 0,
        },
    },
    leftAvatarContainer: {
        maxWidth: "100%",
        "@media (max-width:1024px)": {
            flexWrap: "wrap",
            // maxWidth: "32rem",
        },
    },
    shareButtonContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "8rem",
        "@media (max-width:767px)": {
            width: "4rem",
        },
    },
    shareButtonText: {
        "@media(max-width:767px)": {
            display: "none",
        },
    },
    headingTextWrapper: {
        width: "100%",
        marginLeft: "3.5rem",
        display: "flex",
        alignItems: "center",
    },

    button: {
        height: "1.5rem",
        marginRight: "2.5rem",
        "&:hover": {
            color: colors.white,
            backgroundColor: colors.black,
        },
        "@media(max-width:1024px)": {
            marginRight: "0rem",
        },
        "@media(max-width:767px)": {
            minWidth: "1rem!important",
        },
    },
    infoContainer: {
        backgroundColor: colors.white,
        padding: "2rem",
        marginTop: "-5px",
        paddingBottom: "5rem",
        "@media (max-width: 767px)": {
            paddingBottom: "2rem",
            marginTop: "4rem",
            padding: "2rem 1rem",
        },
    },

    infoTextHead: {
        fontSize: "1.375rem",
        color: colors.black,
        marginBottom: "0.3rem",
    },
    infoText: {
        color: colors.black,
        margin: "0.1rem 0",
    },

    seeFullButton: {
        minWidth: "10rem",
    },
    closeIcon: {
        cursor: "pointer",
        // height:"1.185rem",
        // width:"1.185rem"
    },
    header: {
        backgroundColor: colors.black,
        position: "sticky",
        top: 0,
        padding: "1rem 0",
        zIndex: 1,
        "@media(min-width:768px) and (max-width:1024px)": {
            display: "flex",
            alignItems: "Center",
        },
    },
    underlineStyle: {
        textDecoration: "underline",
        cursor: "pointer",
    },
    fullProjectButton: {
        textAlign: "end",
        "@media(max-width:1024px)": {
            textAlign: "start",
            marginTop: "0.5rem",
        },
    },
    info: {
        "@media(max-width:1024px)": {
            marginBottom: "1.5rem",
        },
    },
    dialogreportcontent: {
        padding: "0rem 1rem 0rem 1.75rem ",
        "@media(max-width:767px)": {
            padding: "0rem  1rem 0rem 2rem",
        },
    },
    reportSpamProp: {
        "@media(max-width:767px)": {
            padding: "1rem 0.35rem 1rem 0.35rem",
        },
    },

    videoContainer: {
        width: "100%",
        paddingTop: "45%",
        height: 0,
        position: "relative",
    },
    videoStyles: {
        width: "100%",
        height: "100%",
        minHeight: "228px",
        position: "absolute",
        top: 0,
        left: 0,
    },
    imgContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    heading: {
        marginLeft: "1rem",
        fontSize: "1.375rem",
        fontWeight: 400,
        width: "100%",
        "@media (max-width:767px)": {
            fontSize: "1rem",
        },
    },
    position: {
        marginLeft: "2rem",
    },
    avatar: {
        alignSelf: "flex-start",
    },
})

export const QuickViewDailog = ({ closeModal }) => {
    const classes = useStyles()
    const routes = useRouter()

    const handleRouting = () => {
        routes.push("/categories")
    }
    return (
        <Box className={classes.wrapper}>
            <Grid container alignItems="flex-start" justify="space-between" wrap="nowrap" className={classes.header}>
                <Grid container alignItems="center" justify="flex-start" className={classes.leftAvatarContainer}>
                    <Grid item>
                        <Box className={classes.imgContainer}>
                            <Avatar src={images.brandon} className={classes.avatar} />
                            <Typography className={classes.heading}>
                                SiR - Hair Down (Official Video) ft. Kendrick Lamar
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item className={classes.headingTextWrapper}>
                        <Typography style={{ cursor: "pointer" }} onClick={() => routes.push("/user")}>
                            Brandon Landing
                        </Typography>
                        <Typography className={classes.position}>2nd AD</Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    alignItems="flex-start"
                    justify="center"
                    wrap="nowrap"
                    className={classes.shareButtonContainer}>
                    <CustomButton
                        externalclass={classes.button}
                        disableRipple
                        label={
                            <>
                                <MoreVert className={classes.morevert} />
                                <Typography className={classes.shareButtonText}>Share</Typography>
                            </>
                        }
                    />
                    <Close onClick={closeModal} className={classes.closeIcon} />
                </Grid>
            </Grid>

            <Grid className={classes.videoContainer}>
                <Box className={classes.videoStyles}>
                    <iframe title="Video" height="100%" width="100%" src="https://www.youtube.com/embed/8aGhZQkoFbQ" />
                </Box>
            </Grid>

            {/* <img  objectFit: "cover"  src={images.brandon} alt="" /> */}
            <Grid container className={classes.infoContainer}>
                <Grid className={classes.info} item xs={12} sm={4} md={4} lg={3} xl={3}>
                    <Typography className={classes.infoTextHead}>Category:</Typography>
                    <Typography
                        className={classnames(classes.underlineStyle, classes.infoText)}
                        onClick={handleRouting}>
                        Directing
                    </Typography>
                </Grid>
                <Grid className={classes.info} item xs={12} sm={4} md={4} lg={3} xl={3}>
                    <Typography className={classes.infoTextHead}>Year</Typography>
                    <Typography className={classes.infoText}>2019</Typography>
                </Grid>
                <Grid className={classes.info} item xs={12} sm={4} md={4} lg={3} xl={3}>
                    <Typography className={classes.infoTextHead}>Client:</Typography>
                    <Typography className={classes.infoText}>SiR, Top Dog Entertainment</Typography>
                </Grid>
                <Grid item className={classes.fullProjectButton} xs={12} sm={4} md={4} lg={3} xl={3}>
                    <CustomButton
                        label="See full project"
                        onClick={() => routes.push("/project")}
                        externalclass={classes.seeFullButton}
                    />
                </Grid>
            </Grid>
            <ReportContentWrapper
                externalclass={classes.reportSpamProp}
                dialogcontentStyle={classes.dialogreportcontent}
            />
        </Box>
    )
}

QuickViewDailog.propTypes = {
    closeModal: PropTypes.func.isRequired,
}
