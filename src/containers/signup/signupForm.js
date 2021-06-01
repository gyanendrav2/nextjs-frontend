import React, { useState } from "react"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers"
import CustomButton from "../../components/buttons/customButton"
import { InputWithLabelIcon } from "../../components/inputs/inputWithLabelIcon"
import { colors } from "../../theme/colors"
import { signupFormValidation } from "../../formValidation/signup"
import EyeClosedIcon from "../../components/icons/eyeClosedIcon"
import EyeOpenIcon from "../../components/icons/eyeOpenIcon"

const titleText = {
    fontFamily: "Forno-Trial",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "2rem",
    lineHeight: "2.5rem",
    marginBottom: "1.5rem",
    color: colors.black,
}

const useStyles = makeStyles({
    wrapper: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "0 0 0 8.75rem",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
        backgroundColor: colors.white,
        "@media(min-width:768px) and (max-width:1070px)": {
            padding: "10rem",
        },
        "@media(max-width:767px)": {
            padding: "0",
            marginTop: "1rem",
        },
    },
    formWrapper: {
        paddingTop: "4rem",
        "@media(max-width:767px)": {
            padding: "1rem",
            width: "100%",
        },
    },
    title: {
        ...titleText,
        "@media (max-width:767px)": {
            display: "none",
        },
    },
    mobileTitle: {
        ...titleText,
        "@media (min-width:768px)": {
            display: "none",
        },
    },
    subTitle: {
        fontFamily: "Helvetica",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "1rem",
        lineHeight: "1.4rem",
        marginBottom: "1.2rem",
        color: colors.black,
    },
    titleButton: {
        marginLeft: "0.3rem",
        cursor: "pointer",
        textDecoration: "underline",
    },
    titleLinkButton: {
        color: colors.black,
    },
    inputStyles: {
        background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF",
        height: "3.5rem",
        width: "27.625rem",
        fontFamily: "Helvetica",
        "@media(max-width:767px)": {
            minWidth: "initial",
            width: "100%",
        },
    },
    "& makeStyles-iconContainer-135": {
        "& svg": {
            color: colors.lighterGray,
        },
    },
    submitContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "2rem",
        "@media(max-width:767px)": {
            display: "block",
        },
    },
    confirmButton: {
        color: colors.white,
        backgroundColor: colors.black,
        padding: "1rem 1.3rem",
        "@media(max-width:767px)": {
            width: "100%",
        },
    },
    forgot: {
        textDecoration: "underline",
        cursor: "pointer",
        "@media(max-width:767px)": {
            marginTop: "1rem",
        },
    },
    icon: {
        fontSize: "2rem",
        color: colors.black,
    },
})

const SignupForm = () => {
    const classes = useStyles()
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(signupFormValidation),
    })
    const [hideShowPassword, setHideShowPassword] = useState(false)

    const submit = (data) => {
        console.log(data)
    }

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.formWrapper}>
                <Typography className={classes.title}>Create a new account</Typography>
                <Typography className={classes.mobileTitle}>Sign Up</Typography>
                <Typography className={classes.subTitle}>
                    Already have an account?
                    <Link href="/signin">
                        <span className={classes.titleButton}>Sign in</span>
                    </Link>
                </Typography>

                <form onSubmit={handleSubmit(submit)}>
                    <InputWithLabelIcon
                        placeholder="Username"
                        placeholderColor={colors.lighterGray}
                        name="username"
                        inputRegister={register}
                        errorMsg={errors.username}
                        externalclass={classes.inputStyles}
                    />
                    <InputWithLabelIcon
                        placeholder="Email address"
                        placeholderColor={colors.lighterGray}
                        name="email"
                        inputRegister={register}
                        errorMsg={errors.email}
                        externalclass={classes.inputStyles}
                    />
                    <InputWithLabelIcon
                        placeholder="Password"
                        placeholderColor={colors.lighterGray}
                        name="password"
                        inputRegister={register}
                        errorMsg={errors.password}
                        externalclass={classes.inputStyles}
                        type={hideShowPassword ? "text" : "password"}
                        icon={hideShowPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                        iconOnClick={() => setHideShowPassword(!hideShowPassword)}
                    />
                    <Grid className={classes.submitContainer}>
                        <Grid>
                            <CustomButton
                                variant="borderButton"
                                label="Confirm"
                                type="submit"
                                externalclass={classes.confirmButton}
                            />
                        </Grid>
                        <Grid>
                            <Link href="/forget-password">
                                <Typography className={classes.forgot}>Forgot password?</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Box>
    )
}

SignupForm.propTypes = {}

export default SignupForm
