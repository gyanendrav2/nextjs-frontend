import React from "react"
import PropTypes from "prop-types"
import { Box, makeStyles } from "@material-ui/core"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        "& textarea": {
            width: "100%",
            padding: "8px",
            outline: "none",
            margin: 0,
            fontSize: "1rem",
            fontWeight: 400,
            fontFamily: "Helvetica",
            backgroundColor: colors.white,
            color: (props) => (props.error ? `${colors.red}` : `${colors.lighterGray}`),

            border: (props) => `solid 1px ${props.error ? colors.red : colors.lighterGray}`,
            "&::placeholder": {
                color: (props) => (props.error ? `${colors.red}` : `${colors.lighterGray}`),
                fontSize: "1rem",
            },
        },
    },
})

export const TextAreaInput = ({ onChange, inputRegister, error, name, placeholder, ...rest }) => {
    const classes = useStyles({ error })
    return (
        <Box className={classes.wrapper}>
            <textarea
                className={classes.input}
                {...rest}
                error={error}
                name={name}
                placeholder={placeholder}
                ref={inputRegister}
                onChange={(e) => {
                    e.preventDefault()
                    if (onChange !== undefined) {
                        onChange(e.target.value)
                    }
                }}
            />
        </Box>
    )
}

TextAreaInput.defaultProps = {
    disabled: false,
    error: false,
    onChange: () => {},
    placeholder: "",
    value: "",
    type: "",
    inputRegister: () => {},
    name: "",
}

TextAreaInput.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    inputRegister: PropTypes.func,
    name: PropTypes.string,
}