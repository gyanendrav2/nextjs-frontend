import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { colors } from "../../theme/colors";
import InputWithLabelIcon from "../../components/inputs/InputWithLabelIcon";
import CustomButton from "../../components/buttons/CustomButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { resetFormValidation } from "../../formValidation/resetpassword";

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
    formWrapper: {
        width: "100%!important",
        marginTop: "7rem",
        "@media(max-width:767px)": {
            padding: "1rem",
            marginTop: "3rem",
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
    icon: {
        fontSize: "2rem",
        color: colors.black,
    },
});

const RightSide = () => {
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(resetFormValidation),
    });
    const submit = (data) => {
        console.log(data);
    };
    const [hideShowPassword, setHideShowPassword] = useState(false);

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.formWrapper}>
                <Typography className={classes.title}>Reset Password</Typography>
                <form onSubmit={handleSubmit(submit)}>
                    <InputWithLabelIcon
                        name="code"
                        placeholder="Confirmation code"
                        externalClass={classes.inputStyles}
                        inputRegister={register}
                        errorMsg={errors.code}
                        externalClass={classes.inputStyles}
                    />
                    <InputWithLabelIcon
                        name="email"
                        placeholder="Email"
                        externalClass={classes.inputStyles}
                        inputRegister={register}
                        errorMsg={errors.email}
                        externalClass={classes.inputStyles}
                    />
                    <InputWithLabelIcon
                        name="password"
                        placeholder="New password"
                        externalClass={classes.inputStyles}
                        inputRegister={register}
                        errorMsg={errors.password}
                        type={hideShowPassword ? "text" : "password"}
                        icon={
                            hideShowPassword ? <VisibilityIcon /> : <span className={`icon-Eye ${classes.icon}`}></span>
                        }
                        iconOnClick={() => setHideShowPassword(!hideShowPassword)}
                    />
                    <InputWithLabelIcon
                        name="confirmpassword"
                        placeholder="Confirmation new password"
                        externalClass={classes.inputStyles}
                        inputRegister={register}
                        errorMsg={errors.confirmpassword}
                        type={hideShowPassword ? "text" : "password"}
                        icon={
                            hideShowPassword ? <VisibilityIcon /> : <span className={`icon-Eye ${classes.icon}`}></span>
                        }
                        iconOnClick={() => setHideShowPassword(!hideShowPassword)}
                    />
                    <Grid className={classes.submitContainer}>
                        <Grid>
                            <CustomButton
                                type="submit"
                                variant="borderButton"
                                label="Send password"
                                externalClass={classes.confirmButton}
                            />
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Box>
    );
};

RightSide.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
};

export default RightSide;
