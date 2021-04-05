import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import PropTypes from "prop-types"
import React from "react"
import cn from "classnames"
import { colors } from "../../theme/colors"
import { ErrorMessage } from "../errorMessage/errorMessage"

const useStyles = makeStyles({
    container: {
        width: "100%",
    },
    wrapper: {
        width: "100%",
        outline: "none",
        margin: 0,
        fontSize: "1rem",
        fontWeight: 400,
        backgroundColor: (props) => (props.bgcolor ? props.bgcolor : colors.white),
        border: (props) => (props.error ? `solid 1px ${colors.red}` : `solid 1px ${colors.lightGray}`),
        borderRadius: "3px",
        "&:focus": {
            borderColor: (props) => (props.error ? colors.red : colors.lightGray),
        },
        "&:hover": {
            borderColor: (props) => (props.error ? colors.red : colors.lightGray),
        },
    },
    iconContainer: {
        width: "10%",
        color: (props) => (props.error ? colors.red : colors.black),
    },
    label: {
        marginBottom: "0.2rem",
        fontSize: "0.875rem",
        fontWeight: 500,
        color: (props) => (props.labelColor ? props.labelColor : colors.white),
    },
    inputContainer: {
        width: "100%",
    },
    input: {
        "-webkit-appearance": "none",
        "-moz-appearance": "none",
        width: "100%",
        fontSize: "0.875rem",
        border: "none",
        outline: "none",
        padding: "0.625rem",
        color: colors.black,
        borderRadius: "3px",
        backgroundColor: (props) => (props.bgcolor ? props.bgcolor : colors.white),
        backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "99%",
        backgroundPositionY: "7px",
        "& ::-ms-expand": {
            display: "none",
        },
    },
    white: {
        color: colors.white,
    },
    option: {
        padding: "1rem",
    },
    underlineBorder: {
        border: "none!important",
        borderBottom: `1px solid ${colors.lightGray}!important`,
        borderRadius: 0,

        "& select": {
            backgroundPositionX: "101%!important",
            backgroundColor: (props) => (props.bgcolor ? props.bgcolor : colors.white),
        },
    },
})
export const SelectWithLabelIcon = ({
    // externalclass,
    label,
    error,
    errorMsg,
    inputRegister,
    iscompulsory,
    placeholder,
    options,
    variant,
    labelColor,
    bgcolor,
    ...props
}) => {
    const classes = useStyles({ error: !!error, labelColor, bgcolor })
    return (
        <Box className={classes.container}>
            <Typography className={classes.label}>
                {label} {iscompulsory && <span className={classes.white}>*</span>}
            </Typography>
            <Grid
                container
                alignItems="center"
                justify="center"
                wrap="nowrap"
                component="div"
                tabIndex="0"
                className={cn(classes.wrapper, { [classes[variant]]: variant })}>
                <Box className={classes.inputContainer}>
                    {inputRegister !== undefined ? (
                        <select ref={inputRegister} className={cn(classes.input)} {...props}>
                            <option value="" hidden>
                                {placeholder}
                            </option>
                            {options.map((item, i) => (
                                <option key={i} value={item.value} className={classes.option}>
                                    {item.label}
                                </option>
                            ))}
                        </select>
                    ) : (
                        <select ref={inputRegister} className={cn(classes.input)} {...props}>
                            <option value="" hidden>
                                {placeholder}
                            </option>
                            {options.map((item, i) => (
                                <option key={i} value={item.value} className={classes.option}>
                                    {item.label}
                                </option>
                            ))}
                        </select>
                    )}
                </Box>
            </Grid>
            <ErrorMessage errorMsg={errorMsg} />
        </Box>
    )
}

SelectWithLabelIcon.defaultProps = {
    disabled: false,
    error: false,
    // onChange: () => {},
    placeholder: "",
    // value: "",
    type: "",
    label: "",
    icon: undefined,
    name: "",
    inputRegister: undefined,
    errorMsg: {},
    options: [],
    iscompulsory: false,
    variant: "",
    labelColor: "",
    bgcolor: "",
}

SelectWithLabelIcon.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    // onChange: PropTypes.func,
    placeholder: PropTypes.string,
    // value: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.element,
    name: PropTypes.string,
    inputRegister: PropTypes.func,
    errorMsg: PropTypes.shape({ message: PropTypes.string }),
    options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })),
    iscompulsory: PropTypes.bool,
    variant: PropTypes.string,
    labelColor: PropTypes.string,
    bgcolor: PropTypes.string,
}