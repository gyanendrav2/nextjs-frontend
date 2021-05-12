import { Box, makeStyles, Typography } from "@material-ui/core"
import React, { useState } from "react"
import Link from "next/link"
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
        paddingTop: "1.5rem",
        borderBottom: `1px solid ${colors.lightGray}`,
        "@media (max-width:767px)": {
            paddingTop: "0rem",
        },
    },
    modaltitle: {
        marginTop: "1.5rem",
        color: colors.lighterGray,
    },
    link: {
        color: colors.black,
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
                    title={
                        <Typography>
                            <Link className={classes.link} href="/">
                                Peter
                            </Link>
                            Pan requested being added to your project: “Hey Brandon, your 2nd camera assistent here!”
                        </Typography>
                    }
                    isDeclinable
                    onDeclineClick={() => setShowDeclineModal(true)}
                    onAcceptClick={() => {}}
                    buttonLabel="Accept"
                />
                <NotificationRow
                    title={
                        <Typography>
                            <Link className={classes.link} href="/">
                                Sarah
                            </Link>
                            Faulson followed you
                        </Typography>
                    }
                    onDeclineClick={() => {}}
                    onAcceptClick={() => {}}
                    buttonLabel="Follow  back"
                />
                <NotificationRow
                    title={
                        <Typography>
                            <Link className={classes.link} href="/">
                                Mike Magic
                            </Link>
                            liked your project “SiR - Hair Down (Official Video) ft. Kendrick Lamar”
                        </Typography>
                    }
                    buttonLabel="Follow  back"
                    onAcceptClick={() => {}}
                    onDeclineClick={() => {}}
                />
                <NotificationRow
                    title={
                        <Typography>
                            You project has been uploaded “SiR - Hair Down (Official Video) ft. Kendrick Lamar”
                        </Typography>
                    }
                    buttonLabel="Follow  back"
                    onAcceptClick={() => {}}
                    onDeclineClick={() => {}}
                />
            </Box>

            <Footer externalclass={classes.footer} />
        </>
    )
}

export default UserNotifications
