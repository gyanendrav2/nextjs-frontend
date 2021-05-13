import React from "react"
import { Box, makeStyles } from "@material-ui/core"
import { images } from "../assets/images"
import { colors } from "../theme/colors"
import dynamic from "next/dynamic"

const HeaderWrapper = dynamic(() => import("../components/header/headerWrapper"))
const LeftSide = dynamic(() => import("../components/leftSide"))
const ResetPasswordForm = dynamic(() => import("../containers/resetpassword/resetPasswordForm"))
const Footer = dynamic(() => import("../components/footer"))

const useStyles = makeStyles({
    wrapper: {
        width: "100%",
        display: "flex",
        backgroundColor: colors.white,
    },
    left: {
        width: "50%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: images.SigninWall,
        "@media (max-width:1072px)": {
            display: "none",
            visibility: "hiiden",
        },
    },
    right: {
        width: "50%",
        "@media (max-width:1072px)": {
            width: "100%",
        },
    },
    footer: {
        marginTop: 0,
    },
})

const ResetPassword = () => {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.wrapper}>
                <HeaderWrapper isScrollDetect mobileMenuIconColor={colors.black} />
                <Box className={classes.left}>
                    <LeftSide />
                </Box>
                <Box className={classes.right}>
                    <ResetPasswordForm />
                </Box>
            </Box>
            <Footer externalclass={classes.footer} />
        </>
    )
}

ResetPassword.propTypes = {}

export default ResetPassword
