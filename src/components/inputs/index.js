import React from "react"
import PropTypes from "prop-types"
import { Box, makeStyles } from "@material-ui/core"
import classnames from "classnames"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        "& input": {
            width: "100%",
            outline: "none",
            margin: 0,
            fontSize: "1rem",
            fontWeight: 400,
            backgroundColor: colors.white,
            color: colors.black,
            padding: "0.625rem",
            border: "none",
            fontFamily: "Helvetica",
            textOverflow: "ellipsis",
            height: (props) => props.height,
            "&::placeholder": {
                color: (props) => (props.placeholderColor ? props.placeholderColor : colors.black),
                fontSize: "1rem",
            },
        },
    },
})

export const Input = ({ inputRegister, error, inputName, externalclass, placeholderColor, height, ...rest }) => {
    const classes = useStyles({ error: !!error, placeholderColor, height })
    return (
        <Box className={classes.wrapper}>
            <input
                className={classnames(classes.input, externalclass)}
                name={inputName}
                ref={inputRegister}
                {...rest}
            />
        </Box>
    )
}

Input.defaultProps = {
    disabled: false,
    error: false,
    placeholder: "",
    type: "text",
    inputRegister: () => {},
    inputName: "",
    externalclass: "",
    placeholderColor: "",
}

Input.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    inputRegister: PropTypes.func,
    inputName: PropTypes.string,
    externalclass: PropTypes.string,
    placeholderColor: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}
