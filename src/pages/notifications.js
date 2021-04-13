import { Box, makeStyles, Typography } from "@material-ui/core"
import React, { useState } from "react"
import { colors } from "../theme/colors"
import { Footer } from "../components/footer"
import { HeaderWrapper } from "../components/header/headerWrapper"
import { NotificationRow } from "../components/cards/notificationRow"
import { SendDetailsModal } from "../components/modal/sendDetailsModal"

const useStyles = makeStyles({
    wrapper: {
        padding: "7rem 10rem 2rem 10rem",
        "@media (max-width:1200px)": {
            padding: "7rem 1rem 1rem 1rem",
        },
    },
    mainTitle: {
        fontFamily: "Forno-Trial",
        fontWeight: 900,
        fontSize: "2rem",
        lineheight: "2.875rem",
        paddingBottom: "1.5rem",
        borderBottom: `1px solid ${colors.lightGray}`,
    },
    modaltitle: {
        marginTop: "1.5rem",
        color: colors.lighterGray,
    },
})
const UserNotifications = () => {
    const classes = useStyles()
    const [showDeclineModal, setShowDeclineModal] = useState(false)
    return (
        <>
            <SendDetailsModal
                modalName="Decline request"
                title="Decline the participation request with a message"
                placeholder="Add a message to the requester"
                isTextArea
                isOpen={showDeclineModal}
                externalclass={classes.modaltitle}
                onClose={() => setShowDeclineModal(false)}
            />
            <HeaderWrapper isAuthenticated isScrollDetect={false} />
            <Box className={classes.wrapper}>
                <Typography className={classes.mainTitle}>Notifications</Typography>
                <NotificationRow
                    title="Peter Pan requested being added to your project: “Hey Brandon, your 2nd camera assistent here!”"
                    isDeclinable
                    onDeclineClick={() => setShowDeclineModal(true)}
                    buttonLabel="Accept"
                />
                <NotificationRow
                    title="Sarah Faulson followed you"
                    onAcceptClick={() => {}}
                    buttonLabel="Follow  back"
                />
                <NotificationRow
                    title="Mike Magic liked your project “SiR - Hair Down (Official Video) ft. Kendrick Lamar”"
                    buttonLabel="Follow  back"
                    onAcceptClick={() => {}}
                />
                <NotificationRow
                    title="You project has been uploaded “SiR - Hair Down (Official Video) ft. Kendrick Lamar”"
                    buttonLabel="Follow  back"
                    onAcceptClick={() => {}}
                />
            </Box>

            <Footer externalclass={classes.footer} />
        </>
    )
}

export default UserNotifications
