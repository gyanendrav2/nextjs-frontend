import React, { useState } from "react"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers"
import VisibilityIcon from "@material-ui/icons/Visibility"
import CustomButton from "../../components/buttons/customButton"
import InputWithLabelIcon from "../../components/inputs/inputWithLabelIcon"
import { colors } from "../../theme/colors"
import { signinFormValidation } from "../../formValidation/signin"

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
        "@media(max-width:767px)": {
            padding: "0",
        },
    },
    title: {
        fontFamily: "Helvetica",
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: "2rem",
        lineHeight: "2.5rem",
        marginBottom: "1.5rem",
        color: colors.black,
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
    formWrapper: {
        width: "100%",
        "@media(max-width:767px)": {
            padding: "1rem",
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
        resolver: yupResolver(signinFormValidation),
    })
    const [hideShowPassword, setHideShowPassword] = useState(false)

    const submit = (data) => {
        console.log(data)
    }

    return (
        <Box container className={classes.wrapper}>
            <Box className={classes.formWrapper}>
                <Typography className={classes.title}>Sign in</Typography>
                <Typography className={classes.subTitle}>
                    Don’t have an account yet?
                    <Link href="/signup">
                        <span className={classes.titleButton}>Sign up</span>
                    </Link>
                </Typography>

                <form onSubmit={handleSubmit(submit)}>
                    <InputWithLabelIcon
                        inputRegister={register}
                        name="email"
                        placeholder="Email"
                        errorMsg={errors.email}
                        exteranlclass={classes.inputStyles}
                    />

                    <InputWithLabelIcon
                        inputRegister={register}
                        name="password"
                        placeholder="Password"
                        errorMsg={errors.password}
                        type={hideShowPassword ? "text" : "password"}
                        icon={hideShowPassword ? <VisibilityIcon /> : <span className={`icon-Eye ${classes.icon}`} />}
                        exteranlclass={classes.inputStyles}
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
                            <Link href="forget-password">
                                <Typography className={classes.forgot}>Forgot password?</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Box>
    )
}

RightSide.propTypes = {}

export default RightSide
