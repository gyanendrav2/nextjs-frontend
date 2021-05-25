import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import React, { useState } from "react"
import classnames from "classnames"
import { useRouter } from "next/router"
import PropTypes from "prop-types"
import { colors } from "../../theme/colors"
import { MarkSpamIcon } from "../icons/markspamIcon"
import { ReportContentIcon } from "../icons/reportContentIcon"
import { RequestPartIcon } from "../icons/requestPartIcon"
import { SendDetailsModal } from "../modal/sendDetailsModal"

const useStyles = makeStyles({
    reportWrapper: {
        backgroundColor: colors.lightGray,
        padding: (props) => (props.dialogcontentStyle ? props.dialogcontentStyle : "1rem 1rem 1rem 1rem"),
        display: "flex",
        "@media(max-width:767px)": {
            padding: "0rem 1rem 1rem 0rem",
        },
    },
    reportspamwrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        margin: "1.812rem 0",
        "@media(max-width:1024px)": {
            justifyContent: "center",
            margin: "2rem 0",
        },
        "@media(max-width:767px)": {
            margin: "0",
        },
    },
    spamwrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginLeft: "-3px",
        "@media(max-width:600px)": {
            marginBottom: "1rem",
        },
    },
    requestwrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        "@media(max-width:600px)": {
            justifyContent: "flex-start",
        },
    },
    reqspamwrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        minWidth: "18rem",
        "@media(max-width:767px)": {
            marginLeft: "0.4rem",
        },
    },
    spamText: {
        color: colors.black,
        fontFamily: "Helvetica",
        fontSize: "1rem",
        marginLeft: "0.3rem",
        cursor: "pointer",
    },
    reportContent: {
        display: "flex",
        justifyContent: "flex-end",
        "@media(max-width:1024px)": {
            justifyContent: "flex-start",
        },
    },
    modaltitle: {
        color: colors.lighterGray,
        "@media(max-width:767px)": {
            marginTop: "0",
        },
    },
})

const ReportContentWrapper = ({ externalclass, dialogcontentStyle }) => {
    const classes = useStyles({ dialogcontentStyle })
    const routes = useRouter()
    const [showParticipantModal, setShowParticipantModal] = useState(false)

    return (
        <>
            <SendDetailsModal
                modalName="Request participation"
                title="Send a request with a message to the project owner"
                placeholder="Add a message to the project owner"
                isTextArea
                isOpen={showParticipantModal}
                onClose={() => setShowParticipantModal(false)}
                onConfirm={() => routes.push("/notifications")}
                externalclass={classes.modaltitle}
                requestTitle="26px"
            />
            <Grid container className={classnames(classes.reportWrapper, externalclass, dialogcontentStyle)}>
                <Grid
                    item
                    xs={12}
                    sm={7}
                    md={7}
                    lg={8}
                    className={classnames(classes.reportspamwrapper, externalclass)}
                    container>
                    <Grid item xs={6} sm={5} md={5} lg={3} className={classes.spamwrapper}>
                        <>
                            <MarkSpamIcon />
                            <Typography className={classes.spamText}>Mark as spam</Typography>
                        </>
                    </Grid>
                    <Grid item xs={6} sm={7} md={7} lg={9} className={classes.spamwrapper}>
                        <>
                            <ReportContentIcon />
                            <Typography className={classes.spamText}>Report content</Typography>
                        </>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={5} md={5} lg={4} className={classes.requestwrapper}>
                    <Box className={classes.reqspamwrapper}>
                        <RequestPartIcon />
                        <Typography className={classes.spamText} onClick={() => setShowParticipantModal(true)}>
                            Request participation in the project
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
ReportContentWrapper.defaultProps = {
    externalclass: " ",
    dialogcontentStyle: "",
}
ReportContentWrapper.propTypes = {
    externalclass: PropTypes.string,
    dialogcontentStyle: PropTypes.string,
}

export default ReportContentWrapper
