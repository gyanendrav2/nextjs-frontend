import React from "react"
import { Box, makeStyles } from "@material-ui/core"
import HeaderWrapper  from "../components/header/headerWrapper"
import { images } from "../assets/images"
import { colors } from "../theme/colors"
import  Footer  from "../components/footer"
import dynamic from "next/dynamic"

const ForgetPasswordForm = dynamic(() => import("../containers/forgetPassword/forgetPasswordForm"))
const LeftSide = dynamic(() => import("../components/leftSide"))

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
