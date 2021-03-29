import React from "react"
import { Box, makeStyles } from "@material-ui/core"
import { LeftSide } from "../components/leftSide"
import { ForgetPasswordForm } from "../containers/forgetPassword/forgetPasswordForm"
import { HeaderWrapper } from "../components/header/headerWrapper"
import { images } from "../assets/images"
import { colors } from "../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        width: "100%",
        display: "flex",
        height: "100vh",
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
})

const ForgetPassword = () => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <HeaderWrapper isScrollDetect mobileMenuIconColor={colors.black} />
            <Box className={classes.left}>
                <LeftSide />
            </Box>
            <Box className={classes.right}>
                <ForgetPasswordForm />
            </Box>
        </Box>
    )
}

ForgetPassword.propTypes = {}

export default ForgetPassword
