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
            padding: "0.5rem 1.125rem",
            border: "none",
            fontFamily: "Helvetica",
            "&::placeholder": {
                color: colors.lighterGray,
                fontSize: "1rem",
            },
        },
    },
})

export const Input = ({ inputRegister, error, inputName, exteranlclass, ...rest }) => {
    const classes = useStyles({ error: !!error })
    return (
        <Box className={classes.wrapper}>
            <input
                className={classnames(classes.input, exteranlclass)}
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
    // onChange: () => {},
    placeholder: "",
    // value: "",
    type: "text",
    inputRegister: () => {},
    inputName: "",
    exteranlclass: "",
}

Input.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    // onChange: PropTypes.func,
    placeholder: PropTypes.string,
    // value: PropTypes.string,
    type: PropTypes.string,
    inputRegister: PropTypes.func,
    inputName: PropTypes.string,
    exteranlclass: PropTypes.string,
}
