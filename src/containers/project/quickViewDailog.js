import React from "react";
import PropTypes from "prop-types";
import { Box, Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
import { colors } from "../../theme/colors";
import { images } from "../../assets/images";
import { Close, MoreVert } from "@material-ui/icons";
import CustomButton from "../../ui/button/CustomButton";

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
    },
    shareButtonContainer: {
        maxWidth: "8rem",
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
    infoText: {
        color: colors.black,
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
});

const QuickViewDailog = ({ closeModal }) => {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <Grid container alignItems="flex-start" justify="space-between" wrap="nowrap" className={classes.header}>
                <Grid
                    container
                    alignItems="center"
                    justify="flex-start"
                    wrap="nowrap"
                    className={classes.leftAvatarContainer}>
                    <Avatar src={images.maskGroup} />
                    <Box className={classes.headingTextWrapper}>
                        <Typography>SiR - Hair Down (Official Video) ft. Kendrick Lamar</Typography>
                        <Typography>Brandon Landing 2nd AD</Typography>
                    </Box>
                </Grid>
                <Grid container alignItems="flex-start" justify="center" className={classes.shareButtonContainer}>
                    <CustomButton
                        externalClass={classes.button}
                        disableRipple={true}
                        label={
                            <>
                                <MoreVert /> <Typography>Share</Typography>
                            </>
                        }
                    />
                    <Close onClick={closeModal} className={classes.closeIcon} />
                </Grid>
            </Grid>
            <img style={{ width: "100%", height: "30rem", objectFit: "cover" }} src={images.maskGroup} alt="" />
            <Grid container className={classes.infoContainer}>
                <Grid item sx={12} sm={12} md={3} lg={3} xl={3}>
                    <Typography className={classes.infoText}>Category:</Typography>
                    <Typography className={classes.infoText}>Directing</Typography>
                </Grid>
                <Grid item sx={12} sm={12} md={3} lg={3} xl={3}>
                    <Typography className={classes.infoText}>Year</Typography>
                    <Typography className={classes.infoText}>2019</Typography>
                </Grid>
                <Grid item sx={12} sm={12} md={3} lg={3} xl={3}>
                    <Typography className={classes.infoText}>Client:</Typography>
                    <Typography className={classes.infoText}>SiR, Top Dog Entertainment</Typography>
                </Grid>
                <Grid item container alignItems="center" justify="flex-end" sx={12} sm={12} md={3} lg={3} xl={3}>
                    <CustomButton label="See full project" externalClass={classes.seeFullButton} />
                </Grid>
            </Grid>
            <Box className={classes.footerWrapper}>
                <Grid container>
                    <Typography>Mark as spam</Typography>
                    <Typography>Mark as spam</Typography>
                </Grid>
            </Box>
        </Box>
    );
};

QuickViewDailog.propTypes = {
    closeModal: PropTypes.func,
};

export default QuickViewDailog;
