import React from "react"
// import dynamic from "next/dynamic"
import { Box, makeStyles } from "@material-ui/core"
import { colors } from "../theme/colors"
import HeaderWrapper from "../components/header/headerWrapper"
import LeftSide from "../components/leftSide"
import SignupForm from "../containers/signup/signupForm"
import Footer from "../components/footer"

// const HeaderWrapper = dynamic(() => import("../components/header/headerWrapper"))
// const LeftSide = dynamic(() => import("../components/leftSide"))
// const SignupForm = dynamic(() => import("../containers/signup/signupForm"))
// const Footer = dynamic(() => import("../components/footer"))

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

const SignUp = () => {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.wrapper}>
                <HeaderWrapper isScrollDetect mobileMenuIconColor={colors.black} />
                <Box className={classes.left}>
                    <LeftSide />
                </Box>
                <Box className={classes.right}>
                    <SignupForm />
                </Box>
            </Box>
            <Footer externalclass={classes.footer} />
        </>
    )
}

SignUp.propTypes = {}

export default SignUp
