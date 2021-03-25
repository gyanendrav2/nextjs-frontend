import React, { useState } from "react"
import PropTypes from "prop-types"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import Link from "next/link"
import VisibilityIcon from "@material-ui/icons/Visibility"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers"
import CustomButton from "../../components/buttons/customButton"
import InputWithLabelIcon from "../../components/inputs/inputWithLabelIcon"
import { colors } from "../../theme/colors"
import { signupFormValidation } from "../../formValidation/signup"

const titleText = {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "900",
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
        padding: "7rem",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
        backgroundColor: colors.white,
        "@media(min-width:767px) and (max-width:1044px)": {
            paddingLeft: "2rem",
            marginTop: "6rem",
        },
        "@media(max-width:767px)": {
            padding: "0",
            marginTop: "1rem",
        },
    },
    formWrapper: {
        width: "100%",
        "@media(max-width:767px)": {
            padding: "1rem",
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
        "@media(max-width:567px)": {
            minWidth: "initial",
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

const RightSide = () => {
    const classes = useStyles()
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(signupFormValidation),
    })
    const [hideShowPassword, setHideShowPassword] = useState(false)

    const submit = (data) => {
        console.log(data)
    }

    return (
        <Box container className={classes.wrapper}>
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
                        name="username"
                        inputRegister={register}
                        errorMsg={errors.username}
                        exteranlclass={classes.inputStyles}
                    />
                    <InputWithLabelIcon
                        placeholder="Email address"
                        name="email"
                        inputRegister={register}
                        errorMsg={errors.email}
                        exteranlclass={classes.inputStyles}
                    />
                    <InputWithLabelIcon
                        placeholder="Password"
                        name="password"
                        inputRegister={register}
                        errorMsg={errors.password}
                        exteranlclass={classes.inputStyles}
                        type={hideShowPassword ? "text" : "password"}
                        icon={
                            hideShowPassword ? (
                                <VisibilityIcon />
                            ) : (
                                <span className={`icon-Eye ${classes.icon}`} />
                            )
                        }
                        iconOnClick={() => setHideShowPassword(!hideShowPassword)}
                    />
                    <Grid className={classes.submitContainer}>
                        <Grid>
                            <CustomButton
                                variant="borderButton"
                                label="Confirm"
                                type="submit"
                                exteranlclass={classes.confirmButton}
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

RightSide.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
}

export default RightSide
