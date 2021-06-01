import { Box, makeStyles, Typography } from "@material-ui/core"
import React, { useState } from "react"
import Link from "next/link"
import { colors } from "../theme/colors"
import Footer from "../components/footer"
import HeaderWrapper from "../components/header/headerWrapper"
import { NotificationRow } from "../components/cards/notificationRow"
import { SendDetailsModal } from "../components/modal/sendDetailsModal"
import { images } from "../assets/images"

const useStyles = makeStyles({
    mainWapper: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    wrapper: {
        padding: "8rem 9.062rem 2rem 9.062rem",
        flexGrow: "1",
        "@media (max-width:1024px)": {
            padding: "8rem 0rem 1rem 2rem",
        },
        "@media (max-width:767px)": {
            padding: "7rem 1rem 2rem 1rem",
        },
    },
    mainTitle: {
        fontFamily: "Forno-Trial",
        fontWeight: 900,
        fontSize: "2rem",
        paddingBottom: "1.5rem",
        borderBottom: `1px solid ${colors.lightGray}`,
        "@media (max-width:767px)": {
            paddingTop: "0rem",
        },
    },
    modaltitle: {
        color: colors.lighterGray,
        fontSize: "1.375rem",
        "@media (max-width:767px)": {
            marginTop: "0",
            textAlign: "center",
        },
    },
    link: {
        color: colors.black,
        pointer: "cursor",
        textDecoration: "underline",
    },
})
const UserNotifications = () => {
    const classes = useStyles()
    const [showDeclineModal, setShowDeclineModal] = useState(false)
    return (
        <Box className={classes.mainWapper}>
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
                            <Link href="/">
                                <span className={classes.link}>Peter Pan</span>
                            </Link>
                            &nbsp;requested being added to your project: “Hey Brandon, your 2nd camera assistent here!”
                        </Typography>
                    }
                    isDeclinable
                    onDeclineClick={() => setShowDeclineModal(true)}
                    onAcceptClick={() => {}}
                    buttonLabel="Accept"
                    image={images.mike}
                />
                <NotificationRow
                    title={
                        <Typography>
                            <Link href="/">
                                <span className={classes.link}>Sarah</span>
                            </Link>
                            &nbsp;Faulson followed you
                        </Typography>
                    }
                    onDeclineClick={() => {}}
                    onAcceptClick={() => {}}
                    buttonLabel="Follow  back"
                    image={images.girlImage}
                />
                <NotificationRow
                    title={
                        <Typography>
                            Mike Magic liked your project &nbsp;
                            <Link href="/">
                                <span className={classes.link}>
                                    “SiR - Hair Down (Official Video) ft. Kendrick Lamar”
                                </span>
                            </Link>
                        </Typography>
                    }
                    buttonLabel="Follow  back"
                    onAcceptClick={() => {}}
                    onDeclineClick={() => {}}
                    image={images.mike}
                />
                <NotificationRow
                    title={
                        <Typography>
                            You project has been uploaded &nbsp;
                            <span className={classes.link}>“SiR - Hair Down (Official Video) ft. Kendrick Lamar”</span>
                        </Typography>
                    }
                    buttonLabel="Follow  back"
                    onAcceptClick={() => {}}
                    onDeclineClick={() => {}}
                    image={images.mike}
                />
            </Box>

            <Footer />
        </Box>
    )
}

export default UserNotifications
