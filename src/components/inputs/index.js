import React from "react";
import { colors } from "../../theme/colors";
import PropTypes from "prop-types";
import { Box, makeStyles } from "@material-ui/core";
import classnames from "classnames";

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
});

const Input = ({ onChange, inputRegister, error, name, externalClass, ...rest }) => {
    const classes = useStyles({ error });
    return (
        <Box className={classes.wrapper}>
            <input
                className={classnames(classes.input, externalClass)}
                {...rest}
                error={error}
                name={name}
                ref={inputRegister}
                onChange={(e) => {
                    e.preventDefault();
                    onChange && onChange(e.target.value);
                }}
            />
        </Box>
    );
};

Input.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    inputRegister: PropTypes.any,
    name: PropTypes.string,
    externalClass: PropTypes.string,
};

export default Input;
