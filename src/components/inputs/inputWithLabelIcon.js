import React from "react"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import PropTypes from "prop-types"
import classnames from "classnames"
import { Input } from "."
import { ErrorMessage } from "../errorMessage/errorMessage"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    rootWrapper: {
        width: "100%",
        overflow: "hidden",
    },
    wrapper: {
        width: "100%",
        outline: "none",
        margin: 0,
        fontSize: "1rem",
        fontWeight: 400,
        backgroundColor: colors.white,
        color: colors.black,
        fontFamily: "aino-regular",
        borderRadius: "1px",
        overflowY: "hidden",
        border: (props) => `solid 1px ${props.error ? colors.red : colors.lightGray}`,
        "&:focus": {
            borderColor: (props) => (props.error ? colors.red : colors.lightGray),
        },
        "&:hover": {
            borderColor: (props) => (props.error ? colors.red : colors.lightGray),
        },
    },
    iconContainer: {
        width: "10%",
        paddingRight: "1rem",
    },
    label: {
        marginBottom: "0.2rem",
        fontSize: "0.85rem",
        fontWeight: (props) => (props.fontWeight ? props.fontWeight : 400),
        color: (props) => (props.labelColor ? props.labelColor : colors.black),
        marginLeft: (props) => (props.labelMargin ? props.labelMargin : "initial"),
        "@media(max-width:767px)": {
            marginLeft: "0!Important",
        },
    },
    inputContainer: {
        width: "100%",
    },
    iconWrapper: {
        cursor: "pointer",
    },
})

export const InputWithLabelIcon = ({
    externalclass,
    labelColor,
    label,
    icon,
    inputRegister,
    errorMsg,
    name,
    fontWeight,
    iconOnClick,
    labelMargin,
    hideErrorMsg,
    placeholderColor,
    height,
    ...props
}) => {
    const classes = useStyles({ error: !!errorMsg.message, labelColor, fontWeight, labelMargin, hideErrorMsg })
    return (
        <Box className={classes.rootWrapper}>
            <Typography className={classnames(classes.label)}>{label}</Typography>
            <Grid
                container
                alignItems="center"
                justify="center"
                wrap="nowrap"
                component="div"
                tabIndex="0"
                className={classnames(classes.wrapper, externalclass)}>
                <Box className={classes.inputContainer}>
                    <Input
                        error={!!errorMsg.message}
                        inputRegister={inputRegister}
                        inputName={name}
                        height={height}
                        {...props}
                        placeholderColor={placeholderColor}
                    />
                </Box>
                <Grid container alignItems="center" justify="center" className={classes.iconContainer}>
                    <Box onClick={iconOnClick} className={classes.iconWrapper}>
                        {icon}
                    </Box>
                </Grid>
            </Grid>
            {!hideErrorMsg && <ErrorMessage error={errorMsg.message} />}
        </Box>
    )
}

InputWithLabelIcon.defaultProps = {
    disabled: false,
    error: false,
    placeholder: "",
    type: "text",
    label: "",
    icon: "",
    inputRegister: () => {},
    name: "",
    errorMsg: {},
    externalclass: "",
    labelColor: "",
    fontWeight: "",
    iconOnClick: () => {},
    labelMargin: "",
    hideErrorMsg: false,
    placeholderColor: colors.black,
    height: "2.5rem",
}

InputWithLabelIcon.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    placeholderColor: PropTypes.string,
    inputRegister: PropTypes.func,
    name: PropTypes.string,
    errorMsg: PropTypes.shape({ message: PropTypes.string }),
    externalclass: PropTypes.string,
    labelColor: PropTypes.string,
    iconOnClick: PropTypes.func,
    fontWeight: PropTypes.string,
    labelMargin: PropTypes.string,
    hideErrorMsg: PropTypes.bool,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}
