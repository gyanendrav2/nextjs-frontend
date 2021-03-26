import React from "react"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import InputWithLabelIcon from "../../inputs/inputWithLabelIcon"
import CustomButton from "../../buttons/customButton"
import { colors } from "../../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        paddingLeft: "7rem",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
        backgroundColor: colors.white,
        "@media(max-width:1044px)": {
            alignItems: "center",
            padding: "0px",
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
        color: colors.black,
    },

    inputStyles: {
        background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF",
        minWidth: "28rem",
        "@media(max-width:567px)": {
            minWidth: "initial",
        },
    },
    submitContainer: {
        display: "flex",
    },
    confirmButton: {
        color: colors.white,
        backgroundColor: colors.black,
        padding: "1rem 1.3rem",
    },
})

const RightSide = () => {
    const classes = useStyles()
    return (
        <Box container className={classes.wrapper}>
            <Typography className={classes.title}>Forgot Password</Typography>
            <Typography className={classes.subTitle}>
                Enter the email address associated with your account, and we’ll email you a link to reset your password.
            </Typography>

            <form>
                <InputWithLabelIcon
                    name=""
                    label="Input field"
                    placeholder="Username"
                    exteranlclass={classes.inputStyles}
                />
                <Grid container display="flex" className={classes.submitContainer}>
                    <Grid item sm={12}>
                        <CustomButton
                            variant="borderButton"
                            label="Send reset link"
                            exteranlclass={classes.confirmButton}
                        />
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}

RightSide.propTypes = {}

export default RightSide
