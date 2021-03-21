import React from "react";
import PropTypes from "prop-types";
import { Box, Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
import { colors } from "../../theme/colors";
import { images } from "../../assets/images";
import { Close, MoreVert } from "@material-ui/icons";
import CustomButton from "../../ui/button/CustomButton";
import classnames from "classnames";
import { icons } from "../../assets/icons";
import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = makeStyles({
    wrapper: {
        width: "100%",
        height: "100vh",
        overflowY: "auto",
        backgroundColor: colors.black,
        padding: "2rem",
        paddingTop: 0,
        position: "fixed",
        zIndex: 5,
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        transition: "all 1s",
        "@media (max-width: 768px)": {
            padding: "1rem",
            paddingTop: 0,
        },
    },
    leftAvatarContainer: {
        maxWidth: "26rem",
        "@media(min-width:576px)": {
            // minWidth: "10rem",
        },
    },
    shareButtonContainer: {
        "@media(min-width:576px)": {
            maxWidth: "8rem",
        },
    },
    shareButtonText: {
        "@media(max-width:576px)": {
            display: "none",
        },
    },
    headingTextWrapper: {
        marginLeft: "1rem",
    },
    button: {
        height: "1.5rem",
        "&:hover": {
            color: colors.white,
            backgroundColor: colors.black,
        },
    },
    infoContainer: {
        backgroundColor: colors.white,
        padding: "1rem",
        marginTop: "-5px",
    },

    infoTextHead: {
        fontSize: "1.375rem",
        color: colors.black,
    },
    infoText: {
        color: colors.black,
        margin: "0.1rem 0",
    },
    footerWrapper: {
        backgroundColor: colors.lightGray,
        padding: "1rem",
    },
    seeFullButton: {
        minWidth: "10rem",
    },
    closeIcon: {
        cursor: "pointer",
    },
    header: {
        backgroundColor: colors.black,
        position: "sticky",
        top: 0,
        padding: "1rem 0",
    },
    underlineStyle: {
        textDecoration: "underline",
    },
    fullProjectButton: {
        textAlign: "end",
        "@media(max-width:992px)": {
            textAlign: "start",
            marginTop: "0.5rem",
        },
    },
    info: {
        "@media(max-width:992px)": {
            marginBottom: "1rem",
        },
    },
    spamContainer: {
        display: "flex",
        alignItems: "space-between",
    },
    spamwrapper: {
        display: "flex",
        flexDirection: "row",
        "@media(max-width:576px)": {
            marginBottom: "0.5rem",
        },
    },
    spamText: {
        color: colors.black,
        fontFamily: "Helvetica",
        fontSize: "1rem",
        marginLeft: "0.3rem",
        "@media(max-width:992px)": {
            fontSize: "0.8rem",
        },
    },
    reportContent: {
        display: "flex",
        justifyContent: "flex-end",
        "@media(max-width:992px)": {
            justifyContent: "flex-start",
        },
    },
});

const QuickViewDailog = ({ closeModal }) => {
    const classes = useStyles();
    const routes = useRouter();
    return (
        <Box className={classes.wrapper}>
            <Grid container alignItems="flex-start" justify="space-between" wrap="nowrap" className={classes.header}>
                <Grid
                    container
                    alignItems="center"
                    justify="flex-start"
                    wrap="nowrap"
                    className={classes.leftAvatarContainer}>
                    <Grid item>
                        <Avatar src={images.maskGroup} />
                    </Grid>
                    <Grid item className={classes.headingTextWrapper}>
                        <Typography>SiR - Hair Down (Official Video) ft. Kendrick Lamar</Typography>
                        <Typography>Brandon Landing 2nd AD</Typography>
                    </Grid>
                </Grid>
                <Grid container alignItems="flex-start" justify="center" className={classes.shareButtonContainer}>
                    <CustomButton
                        externalClass={classes.button}
                        disableRipple={true}
                        label={
                            <>
                                <MoreVert /> <Typography className={classes.shareButtonText}>Share</Typography>
                            </>
                        }
                    />
                    <Close onClick={closeModal} className={classes.closeIcon} />
                </Grid>
            </Grid>
            <img style={{ width: "100%", height: "30rem", objectFit: "cover" }} src={images.maskGroup} alt="" />
            <Grid container className={classes.infoContainer}>
                <Grid className={classes.info} item xs={12} sm={4} md={3} lg={3} xl={3}>
                    <Typography className={classes.infoTextHead}>Category:</Typography>
                    <Typography className={classnames(classes.underlineStyle, classes.infoText)}>Directing</Typography>
                </Grid>
                <Grid className={classes.info} item xs={12} sm={4} md={3} lg={3} xl={3}>
                    <Typography className={classes.infoTextHead}>Year</Typography>
                    <Typography className={classes.infoText}>2019</Typography>
                </Grid>
                <Grid className={classes.info} item xs={12} sm={4} md={3} lg={3} xl={3}>
                    <Typography className={classes.infoTextHead}>Client:</Typography>
                    <Typography className={classes.infoText}>SiR, Top Dog Entertainment</Typography>
                </Grid>
                <Grid item className={classes.fullProjectButton} xs={12} sm={4} md={3} lg={3} xl={3}>
                    <CustomButton
                        label="See full project"
                        onClick={() => routes.push("/project")}
                        externalClass={classes.seeFullButton}
                    />
                </Grid>
            </Grid>
            <Box className={classes.footerWrapper}>
                <Grid container className={classes.spamContainer}>
                    <Grid item xs={12} sm={12} md={6} lg={6} container>
                        <Grid item xs={6} sm={6} md={6} lg={6} className={classes.spamwrapper}>
                            <Link href="/">
                                <>
                                    <img
                                        className={classnames(classes.spamItem)}
                                        alt="report-spam"
                                        src={icons.markspamIcon}></img>
                                    <Typography className={classes.spamText}>Mark as spam</Typography>
                                </>
                            </Link>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} className={classnames(classes.spamwrapper)}>
                            <Link href="/">
                                <>
                                    <img
                                        className={classnames(classes.spamItem)}
                                        alt="report-content"
                                        src={icons.reportContentIcon}></img>
                                    <Typography className={classes.spamText}>Report content</Typography>
                                </>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} className={classes.spamwrapper}>
                        <Link href="/">
                            <>
                                <img
                                    className={classnames(classes.spamwrapper, classes.reportContent)}
                                    alt="request participation"
                                    src={icons.requestParticipationIcon}></img>
                                <Typography className={classes.spamText}>
                                    Request participation in the project
                                </Typography>
                            </>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

QuickViewDailog.propTypes = {
    closeModal: PropTypes.func,
};

export default QuickViewDailog;
