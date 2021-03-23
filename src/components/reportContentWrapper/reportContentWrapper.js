import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import classnames from "classnames";
import Link from "next/link";
import { icons } from "../../assets/icons";
import PropTypes from "prop-types";
import { colors } from "../../theme/Colors";

const useStyles = makeStyles({
    reportWrapper: {
        backgroundColor: colors.lightGray,
        padding: "1rem",
    },
    spamContainer: {
        display: "flex",
        alignItems: "space-between",
    },
    spamwrapper: {
        display: "flex",
        flexDirection: "row",
        // textAlign: "right",

        "@media(max-width:576px)": {
            marginBottom: "0.5rem",
        },
    },
    requestwrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
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

export const ReportContentWrapper = (externalClass) => {
    const classes = useStyles();

    return (
        <Box className={classnames(classes.reportWrapper, externalClass)}>
            <Grid container className={classes.spamContainer}>
                <Grid item xs={12} sm={12} md={6} lg={6} className={classes.spamwrapper} container>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
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
                    <Grid item xs={6} sm={6} md={6} lg={6}>
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
                <Grid item xs={12} sm={12} md={6} lg={6} className={classes.requestwrapper}>
                    <Link href="/">
                        <>
                            <img
                                className={classnames(classes.spamwrapper, classes.reportContent)}
                                alt="request participation"
                                src={icons.requestParticipationIcon}></img>
                            <Typography className={classes.spamText}>Request participation in the project</Typography>
                        </>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
};
ReportContentWrapper.prototypes = {
    externalClass: PropTypes.string,
};
export default ReportContentWrapper;
