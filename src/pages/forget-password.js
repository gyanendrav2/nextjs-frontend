import React from "react"
import { Box, makeStyles } from "@material-ui/core"
import dynamic from "next/dynamic"
import HeaderWrapper from "../components/header/headerWrapper"
import { colors } from "../theme/colors"
import Footer from "../components/footer"

const ForgetPasswordForm = dynamic(() => import("../containers/forgetPassword/forgetPasswordForm"))
const LeftSide = dynamic(() => import("../components/leftSide"))

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

const ForgetPassword = () => {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.wrapper}>
                <HeaderWrapper isScrollDetect mobileMenuIconColor={colors.black} />
                <Box className={classes.left}>
                    <LeftSide />
                </Box>
                <Box className={classes.right}>
                    <ForgetPasswordForm />
                </Box>
            </Box>
            <Footer externalclass={classes.footer} />
        </>
    )
}

ForgetPassword.propTypes = {}

export default ForgetPassword
