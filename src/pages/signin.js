import React from "react"
import dynamic from "next/dynamic"
import { Box, makeStyles } from "@material-ui/core"
import { images } from "../assets/images"
import { colors } from "../theme/colors"

const HeaderWrapper = dynamic(() => import("../components/header/headerWrapper"))
const LeftSide = dynamic(() => import("../components/leftSide"))
const SigninForm = dynamic(() => import("../containers/signin/signinForm"))
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
        marginTop: "0!important",
    },
})

const SignIn = () => {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.wrapper}>
                <HeaderWrapper isScrollDetect mobileMenuIconColor={colors.black} />
                <Box className={classes.left}>
                    <LeftSide />
                </Box>
                <Box className={classes.right}>
                    <SigninForm />
                </Box>
            </Box>
            <Footer externalclass={classes.footer} />
        </>
    )
}

SignIn.propTypes = {}

export default SignIn
