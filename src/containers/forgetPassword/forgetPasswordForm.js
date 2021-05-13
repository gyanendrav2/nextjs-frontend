import React from "react"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers"
import { colors } from "../../theme/colors"
import { InputWithLabelIcon } from "../../components/inputs/inputWithLabelIcon"
import { forgetFormValidation } from "../../formValidation/forgetpassword"
import CustomButton from "../../components/buttons/customButton"

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
        "@media(min-width:768px) and (max-width:1070px)": {
            padding: "10rem",
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
        marginBottom: "0.5rem",
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
})

const ForgetPasswordForm = () => {
    const classes = useStyles()
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(forgetFormValidation),
    })
    const submit = (data) => {
        console.log("data", data)
    }

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.formWrapper}>
                <Typography className={classes.title}>Forgot Password</Typography>
                <Typography className={classes.subTitle}>
                    Enter the email address associated with your account, and we’ll email you a link to reset your
                    password.
                </Typography>

                <form onSubmit={handleSubmit(submit)}>
                    <InputWithLabelIcon
                        label="email"
                        placeholder="Email address"
                        name="email"
                        inputRegister={register}
                        errorMsg={errors.email}
                        externalclass={classes.inputStyles}
                    />
                    <Grid className={classes.submitContainer}>
                        <CustomButton
                            variant="borderButton"
                            label="Send reset link"
                            type="submit"
                            externalclass={classes.confirmButton}
                        />
                    </Grid>
                </form>
            </Box>
        </Box>
    )
}

export default ForgetPasswordForm
