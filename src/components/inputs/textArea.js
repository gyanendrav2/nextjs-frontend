import { Box, makeStyles, Typography } from "@material-ui/core"
import PropTypes from "prop-types"
import React from "react"
import { TextAreaInput } from "./textAreaInput"
import { colors } from "../../theme/colors"
import { ErrorMessage } from "../errorMessage/errorMessage"

const useStyles = makeStyles({
    container: {
        marginBottom: "0.5rem",
    },
    wrapper: {
        width: "100%",
    },
    label: {
        marginBottom: "0.22rem",
        fontSize: "0.85rem",
        fontWeight: 400,
        color: colors.white,
    },
    input: {
        width: "100%",
        height: "17rem",
        "&::placeholder": {
            color: colors.pink,
            opacity: 1,
            fontSize: "0.875rem",
            marginRight: "2rem",
        },
    },
    border: "1px solid green",
    "&:focus": {
        borderColor: (props) => (props.error ? colors.red : colors.lightGray),
    },
    "&:hover": {
        borderColor: (props) => (props.error ? colors.red : colors.lightGray),
    },
    white: {
        color: colors.white,
    },
})

export const TextArea = ({ label, inputRegister, error, iscompulsory, errorMsg, ...props }) => {
    const classes = useStyles()
    return (
        <Box className={classes.rootWrapper}>
            <Typography className={classes.label}>{label}</Typography>
            <TextAreaInput className={classes.input} error={error} inputRegister={inputRegister} {...props} />
            {iscompulsory === true ? <ErrorMessage errorMsg={errorMsg} /> : null}
        </Box>
    )
}

TextArea.defaultProps = {
    disabled: false,
    error: false,
    inputRegister: () => {},
    errorMsg: "",
    iscompulsory: false,
    label: "",
    type: "text",
    name: "",
    onChange: () => {},
    placeholder: "",
    value: "",
}

TextArea.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    inputRegister: PropTypes.func,
    errorMsg: PropTypes.string,
    iscompulsory: PropTypes.bool,
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
}
