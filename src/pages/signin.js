import React from "react"
// import dynamic from "next/dynamic"
import { Box, makeStyles } from "@material-ui/core"
import { colors } from "../theme/colors"
import HeaderWrapper from "../components/header/headerWrapper"
import LeftSide from "../components/leftSide"
import SigninForm from "../containers/signin/signinForm"
import Footer from "../components/footer"

// const HeaderWrapper = dynamic(() => import("../components/header/headerWrapper"))
// const LeftSide = dynamic(() => import("../components/leftSide"))
// const SigninForm = dynamic(() => import("../containers/signin/signinForm"))
// const Footer = dynamic(() => import("../components/footer"))

const useStyles = makeStyles({
    mainWrapper: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    wrapper: {
        width: "100%",
        display: "flex",
        backgroundColor: colors.white,
        flexGrow: "1",
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

const SignIn = () => {
    const classes = useStyles()
    return (
        <Box className={classes.mainWrapper}>
            <HeaderWrapper isScrollDetect mobileMenuIconColor={colors.black} />
            <Box className={classes.wrapper}>
                <Box className={classes.left}>
                    <LeftSide />
                </Box>
                <Box className={classes.right}>
                    <SigninForm />
                </Box>
            </Box>
            <Footer externalclass={classes.footer} />
        </Box>
    )
}

SignIn.propTypes = {}

export default SignIn
