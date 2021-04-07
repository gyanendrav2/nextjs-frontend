import { Avatar, Box, Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { colors } from "../theme/colors"
import { Footer } from "../components/footer"
import { HeaderWrapper } from "../components/header/headerWrapper"
import { CustomButton } from "../components/buttons/customButton"
import { images } from "../assets/images"
import { NotificationRow } from "../components/cards/notificationRow"

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
})
const UserNotifications = () => {
    const classes = useStyles()
    return (
        <>
            <HeaderWrapper isAuthenticated isScrollDetect={false} />
            <Box className={classes.wrapper}>
                <Typography className={classes.mainTitle}>Notifications</Typography>

                <NotificationRow
                    title="Peter Pan requested being added to your project: “Hey Brandon, your 2nd camera assistent here!”"
                    isDeclinable
                    onAcceptClick={() => {}}
                />
                <NotificationRow title="Sarah Faulson followed you" onAcceptClick={() => {}} />
                <NotificationRow
                    title="Mike Magic liked your project “SiR - Hair Down (Official Video) ft. Kendrick Lamar”"
                    onAcceptClick={() => {}}
                />
                <NotificationRow
                    title="You project has been uploaded “SiR - Hair Down (Official Video) ft. Kendrick Lamar”"
                    onAcceptClick={() => {}}
                />
            </Box>

            <Footer externalclass={classes.footer} />
        </>
    )
}

export default UserNotifications
