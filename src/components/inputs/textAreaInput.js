import React from "react"
import PropTypes from "prop-types"
import { Box, makeStyles } from "@material-ui/core"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        "& textarea": {
            width: "100%",
            padding: (props) => (props.placeholderPadding ? props.placeholderPadding : "1.5rem"),
            outline: "none",
            margin: 0,
            fontSize: "1rem",
            fontWeight: 400,
            fontFamily: "Helvetica",
            resize: "vertical",
            backgroundColor: colors.white,
            color: (props) => (props.error ? `${colors.red}` : `${colors.black}`),
            border: (props) => `solid 1px ${props.error ? colors.red : colors.lightGray}`,
            "&::placeholder": {
                color: (props) => (props.error ? `${colors.red}` : `${colors.lighterGray}`),
                fontSize: "1rem",
                marginRight: "2rem",
            },
            "@media(max-width:1024px)": {
                padding: "1rem",
            },
        },
    },
})

export const TextAreaInput = ({ inputRegister, error, name, placeholder, placeholderPadding, ...rest }) => {
    const classes = useStyles({ error, placeholderPadding })
    return (
        <Box className={classes.wrapper}>
            <textarea className={classes.input} name={name} placeholder={placeholder} ref={inputRegister} {...rest} />
        </Box>
    )
}

TextAreaInput.defaultProps = {
    disabled: false,
    error: false,
    placeholder: "",
    type: "",
    inputRegister: () => {},
    name: "",
    placeholderPadding: "1.5rem",
}

TextAreaInput.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    inputRegister: PropTypes.func,
    name: PropTypes.string,
    placeholderPadding: PropTypes.string,
}
