import React from "react"
import dynamic from "next/dynamic"
import { Box, makeStyles } from "@material-ui/core"
import { colors } from "../theme/colors"

const HeaderWrapper = dynamic(() => import("../components/header/headerWrapper"))
const LeftSide = dynamic(() => import("../components/leftSide"))
const ResetPasswordForm = dynamic(() => import("../containers/resetpassword/resetPasswordForm"))
const Footer = dynamic(() => import("../components/footer"))

const useStyles = makeStyles({
    wrapper: {
        width: "100%",
        display: "flex",
        backgroundColor: colors.white,
        height: "100%",
        "@media (max-width:1200px)": {
            height: "100%",
        },
    },
    left: {
        width: "50%",
        "@media (max-width:1200px)": {
            display: "none",
        },
    },
    right: {
        width: "50%",
        "@media (max-width:1200px)": {
            width: "100%",
        },
    },
    footer: {
        marginTop: "0!important",
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
