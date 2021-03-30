import React from "react"
import { Box, makeStyles } from "@material-ui/core"
import { LeftSide } from "../components/leftSide"
import { HeaderWrapper } from "../components/header/headerWrapper"
import { images } from "../assets/images"
import { SignupForm } from "../containers/signup/signupForm"
import { colors } from "../theme/colors"
import { Footer } from "../components/footer"

const useStyles = makeStyles({
    wrapper: {
        width: "100%",
        display: "flex",
        height: "100vh",
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
            <Footer exteranlclass={classes.footer} />
        </>
    )
}

SignUp.propTypes = {}

export default SignUp
