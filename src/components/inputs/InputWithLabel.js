import { Box, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import Input from ".";
import { colors } from "../../theme/colors";
import ErrorMessage from "../errorMessage/ErrorMessage";

const useStyles = makeStyles({
    wrapper: {
        width: "100%",
    },
    label: {
        marginBottom: "0.3rem",
        fontSize: "0.875rem",
        fontWeight: 500,
        width: "100%",
        color: colors.white,
    },
    input: {
        width: "100%",
        color: colors.white,
        "& ::placeholder": {
            color: colors.primary,
            opacity: 1,
            fontSize: "0.875rem",
        },
    },
    border: (props) => (props.error ? `solid 1px ${colors.red}` : `solid 1px ${colors.black}`),
    "&:focus": {
        borderColor: (props) => (props.error ? colors.red : colors.black),
    },
    "&:hover": {
        borderColor: (props) => (props.error ? colors.red : colors.black),
    },
    white: {
        color: colors.white,
    },
});

const InputWithLabel = ({ label, inputRegister, error, iscompulsory, errorMsg, externalClass, ...props }) => {
    const classes = useStyles();

    return (
        <Box className={classes.wrapper}>
            <Typography className={classes.label}>
                {label} {iscompulsory && <span className={classes.white}>*</span>}
            </Typography>
            <Input error={error} externalClass={externalClass} inputRegister={inputRegister} {...props} />
            {iscompulsory == true ? <ErrorMessage errorMsg={errorMsg} /> : null}
        </Box>
    );
};

InputWithLabel.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    inputRegister: PropTypes.any,
    errorMsg: PropTypes.string,
    iscompulsory: PropTypes.bool,
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    externalClass: PropTypes.string,
};
export default InputWithLabel;
