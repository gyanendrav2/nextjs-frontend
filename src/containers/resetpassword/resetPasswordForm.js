import React, { useState } from "react"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers"
import EyeOpenIcon from "../../components/icons/eyeOpenIcon"
import EyeClosedIcon from "../../components/icons/eyeClosedIcon"
import { colors } from "../../theme/colors"
import { InputWithLabelIcon } from "../../components/inputs/inputWithLabelIcon"
import { resetFormValidation } from "../../formValidation/resetpassword"
import CustomButton from "../../components/buttons/customButton"

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
        marginTop: "7rem",
        "@media(max-width:767px)": {
            padding: "1rem",
            marginTop: "3rem",
            width: "100%",
        },
    },
    title: {
        fontFamily: "Forno-Trial",
        fontWeight: "900",
        fontSize: "2rem",
        lineHeight: "2.5rem",
        marginBottom: "1.5rem",
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
    icon: {
        fontSize: "2rem",
        color: colors.black,
    },
})

const ResetPasswordForm = () => {
    const classes = useStyles()
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(resetFormValidation),
    })
    const submit = (data) => {
        console.log(data)
    }
    const [hideShowPassword, setHideShowPassword] = useState(false)
    const [hideShowConPassword, setHideShowConPassword] = useState(false)

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.formWrapper}>
                <Typography className={classes.title}>Reset Password</Typography>
                <form onSubmit={handleSubmit(submit)}>
                    <InputWithLabelIcon
                        name="code"
                        placeholder="Confirmation code"
                        placeholderColor={colors.lighterGray}
                        externalclass={classes.inputStyles}
                        inputRegister={register}
                        errorMsg={errors.code}
                    />
                    <InputWithLabelIcon
                        name="email"
                        placeholder="Email"
                        placeholderColor={colors.lighterGray}
                        externalclass={classes.inputStyles}
                        inputRegister={register}
                        errorMsg={errors.email}
                    />
                    <InputWithLabelIcon
                        name="password"
                        placeholder="New password"
                        placeholderColor={colors.lighterGray}
                        externalclass={classes.inputStyles}
                        inputRegister={register}
                        errorMsg={errors.password}
                        type={hideShowPassword ? "text" : "password"}
                        icon={hideShowPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                        iconOnClick={() => setHideShowPassword(!hideShowPassword)}
                    />
                    <InputWithLabelIcon
                        name="confirmpassword"
                        placeholder="Confirmation new password"
                        placeholderColor={colors.lighterGray}
                        externalclass={classes.inputStyles}
                        inputRegister={register}
                        errorMsg={errors.confirmpassword}
                        type={hideShowConPassword ? "text" : "password"}
                        icon={hideShowConPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                        iconOnClick={() => setHideShowConPassword(!hideShowConPassword)}
                    />
                    <Grid className={classes.submitContainer}>
                        <Grid>
                            <CustomButton
                                type="submit"
                                variant="borderButton"
                                label="Send password"
                                externalclass={classes.confirmButton}
                            />
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Box>
    )
}

ResetPasswordForm.propTypes = {}

export default ResetPasswordForm
