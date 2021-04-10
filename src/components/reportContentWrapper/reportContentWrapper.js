import { Grid, makeStyles, Typography } from "@material-ui/core"
import React, { useState } from "react"
import classnames from "classnames"
import PropTypes from "prop-types"
import { colors } from "../../theme/colors"
import { MarkSpamIcon } from "../icons/markspamIcon"
import { ReportContentIcon } from "../icons/reportContentIcon"
import { RequestPartIcon } from "../icons/requestPartIcon"
import { SendDetailsModal } from "../modal/sendDetailsModal"

const useStyles = makeStyles({
    reportWrapper: {
        backgroundColor: colors.lightGray,
        padding: (props) => (props.dialogcontentStyle ? props.dialogcontentStyle : "1rem 2rem 1rem 2rem"),
        display: "flex",
        "@media(max-width:767px)": {
            padding: "1rem 1rem 1rem 1rem",
        },
    },
    reportspamwrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
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
        "@media(max-width:992px)": {
            justifyContent: "flex-start",
        },
    },
    modaltitle: {
        marginTop: "1.5rem",
        color: colors.lighterGray,
    },
})

export const ReportContentWrapper = ({ externalclass, dialogcontentStyle }) => {
    const classes = useStyles({ dialogcontentStyle })
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
                externalclass={classes.modaltitle}
            />
            <Grid container className={classnames(classes.reportWrapper, externalclass, dialogcontentStyle)}>
                <Grid item xs={12} sm={8} md={8} lg={8} className={classes.reportspamwrapper} container>
                    <Grid item xs={6} sm={4} md={3} lg={3} className={classes.spamwrapper}>
                        <>
                            <MarkSpamIcon />
                            <Typography className={classes.spamText}>Mark as spam</Typography>
                        </>
                    </Grid>
                    <Grid item xs={6} sm={8} md={9} lg={9} className={classes.spamwrapper}>
                        <>
                            <ReportContentIcon />
                            <Typography className={classes.spamText}>Report content</Typography>
                        </>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} className={classes.requestwrapper}>
                    <Grid className={classes.reqspamwrapper}>
                        <RequestPartIcon />
                        <Typography className={classes.spamText} onClick={() => setShowParticipantModal(true)}>
                            Request participation in the project
                        </Typography>
                    </Grid>
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
