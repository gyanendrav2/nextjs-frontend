import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import classnames from "classnames"
import Link from "next/link"
import PropTypes from "prop-types"
import { icons } from "../../assets/icons"
import { colors } from "../../theme/colors"

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
        alignItems: "center",
        justifyContent: "center",
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
})

export const ReportContentWrapper = (exteranlclass) => {
    const classes = useStyles()

    return (
        <Box className={classnames(classes.reportWrapper, exteranlclass)}>
            <Grid container className={classes.spamContainer}>
                <Grid item xs={12} sm={12} md={6} lg={6} className={classes.reportspamwrapper} container>
                    <Grid item xs={6} sm={6} md={6} lg={6} className={classes.spamwrapper}>
                        <Link href="/">
                            <>
                                <img
                                    className={classnames(classes.spamItem)}
                                    alt="report-spam"
                                    src={icons.markspamIcon}
                                />
                                <Typography className={classes.spamText}>Mark as spam</Typography>
                            </>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6} className={classes.spamwrapper}>
                        <Link href="/">
                            <>
                                <img
                                    className={classnames(classes.spamItem)}
                                    alt="report-content"
                                    src={icons.reportContentIcon}
                                />
                                <Typography className={classes.spamText}>Report content</Typography>
                            </>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} className={classes.requestwrapper}>
                    <Link href="/">
                        <Grid className={classes.spamwrapper}>
                            <img
                                className={classnames(classes.spamwrapper, classes.reportContent)}
                                alt="request participation"
                                src={icons.requestParticipationIcon}
                            />
                            <Typography className={classes.spamText}>Request participation in the project</Typography>
                        </Grid>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}
ReportContentWrapper.prototypes = {
    exteranlclass: PropTypes.string,
}
