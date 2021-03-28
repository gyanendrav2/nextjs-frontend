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
    },
    wrapper: {
        width: "100%",
        outline: "none",
        margin: 0,
        fontSize: "0.85rem",
        fontWeight: 400,
        backgroundColor: colors.white,
        padding: "0.6rem 0",
        fontFamily: "aino-regular",
        borderRadius: "3px",
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
        marginBottom: "0.22rem",
        fontSize: "0.85rem",
        fontWeight: 400,
        color: (props) => (props.labelColor ? props.labelColor : colors.white),
    },
    inputContainer: {
        width: "100%",
    },
    iconWrapper: {
        cursor: "pointer",
    },
})

export const InputWithLabelIcon = ({
    exteranlclass,
    labelColor,
    label,
    icon,
    inputRegister,
    errorMsg,
    name,
    iconOnClick,
    ...props
}) => {
    const classes = useStyles({ error: !!errorMsg.message, labelColor })
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
                className={classnames(classes.wrapper, exteranlclass)}>
                <Box className={classes.inputContainer}>
                    <Input error={!!errorMsg.message} inputRegister={inputRegister} inputName={name} {...props} />
                </Box>
                <Grid container alignItems="center" justify="center" className={classes.iconContainer}>
                    <Box onClick={iconOnClick} className={classes.iconWrapper}>
                        {icon}
                    </Box>
                </Grid>
            </Grid>
            <ErrorMessage error={errorMsg.message} />
        </Box>
    )
}

InputWithLabelIcon.defaultProps = {
    disabled: false,
    error: false,
    // onChange: () => {},
    placeholder: "",
    // value: "",
    type: "text",
    label: "",
    icon: "",
    inputRegister: () => {},
    name: PropTypes.string,
    errorMsg: {},
    exteranlclass: "",
    labelColor: "",
    iconOnClick: () => {},
}

InputWithLabelIcon.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    // onChange: PropTypes.func,
    placeholder: PropTypes.string,
    // value: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    inputRegister: PropTypes.func,
    name: PropTypes.string,
    errorMsg: PropTypes.shape({ message: PropTypes.string }),
    exteranlclass: PropTypes.string,
    labelColor: PropTypes.string,
    iconOnClick: PropTypes.func,
}
