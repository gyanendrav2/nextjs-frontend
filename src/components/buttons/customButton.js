/* eslint-disable max-lines */
import React, { createRef } from "react"
import PropTypes from "prop-types"
import { Button, makeStyles } from "@material-ui/core"
import classnames from "classnames"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    primary: {
        backgroundColor: colors.black,
        color: colors.white,
        borderRadius: 0,
        textTransform: "capitalize",
        height: "3.5rem",
        minWidth: "6.437rem",
        "&:hover": {
            color: colors.black,
            backgroundColor: colors.pink,
        },
    },
    borderButton: {
        backgroundColor: colors.black,
        color: colors.white,
        // border: `2px solid ${colors.black}`,
        borderRadius: 0,
        textTransform: "capitalize",
        padding: "1.125rem 3rem",
        "&:hover": {
            color: colors.black,
            backgroundColor: colors.pink,
        },
    },
    iconButton: {
        width: "2.5rem",
        minWidth: "2.5rem",
        height: "2.5rem",
        color: colors.white,
        backgroundColor: colors.black,
        borderRadius: 0,
        textTransform: "capitalize",
        "& svg": {
            fontSize: "1rem",
        },
        "&:hover": {
            color: colors.white,
            backgroundColor: colors.pink,
        },
    },
    iconColorButton: {
        width: "2.5rem",
        minWidth: "2.5rem",
        height: "2.5rem",
        color: colors.white,
        backgroundColor: colors.black,
        borderRadius: 0,
        textTransform: "capitalize",
        "& svg": {
            fontSize: "1rem",
        },
        "&:hover": {
            backgroundColor: colors.black,
            color: colors.pink,
        },
    },
    iconLargeButton: {
        width: "3.75rem",
        height: "3.75rem",
        color: colors.white,
        backgroundColor: colors.black,
        borderRadius: 0,
        textTransform: "capitalize",
        "&:hover": {
            color: colors.pink,
        },
    },
    circleSmallButton: {
        width: "2.5rem",
        minWidth: "2.5rem",
        height: "2.5rem",
        color: colors.black,
        borderRadius: "2.5rem",
        backgroundColor: colors.white,
        textTransform: "capitalize",
        border: `1px solid ${colors.black}`,
        "& svg": {
            fontSize: "1rem",
        },
        "&:hover": {
            color: colors.white,
            backgroundColor: colors.black,
        },
    },
    circleLargeButton: {
        width: "5rem",
        minWidth: "5rem",
        height: "5rem",
        color: colors.white,
        borderRadius: "5rem",
        backgroundColor: colors.black,
        textTransform: "capitalize",
        "&:hover": {
            color: colors.black,
            backgroundColor: colors.pink,
        },
    },
    fileInput: {
        width: 0,
        height: 0,
        overflow: "hidden",
        Visibility: "hidden",
        position: "absolute",
    },
    dropdownButton: {
        backgroundColor: colors.lightGray,
        color: colors.black,
        borderRadius: 0,
        textTransform: "capitalize",
        height: "3.5rem",
        minWidth: "6.437rem",
        "&:hover": {
            color: colors.black,
            backgroundColor: colors.pink,
        },
        "& .MuiButton-endIcon": {
            // position: "absolute",
            // right: "1.593rem",
        },
    },
    cancel: {
        width: "100%",
        backgroundColor: colors.white,
        border: `1px solid ${colors.red}`,
        borderRadius: 0,
        textTransform: "capitalize",
        padding: "0.75rem 3rem",
        color: colors.red,
        fontSize: "1rem",
        "&:hover": {
            color: colors.white,
            backgroundColor: colors.red,
        },
    },
    textButton: {
        backgroundColor: "transparent",
        color: (props) => (props.color ? props.color : colors.pink),
        borderRadius: 0,
        textTransform: "capitalize",
        height: "3.5rem",
        // width: "content-fit",
        "& span": {
            fontSize: "1rem",
            lineHeight: "1.375rem",
            fontFamily: "Helvetica",
        },
        "&:hover": {
            color: (props) => (props.color ? props.color : colors.pink),
            backgroundColor: "transparent",
        },
    },
})

const allButtons = ({ classes, handleClick, variant, label, icon, externalclass, ...props }) => {
    switch (variant) {
        case "primary": {
            return (
                <Button className={classnames(classes.primary, externalclass)} onClick={handleClick} {...props}>
                    {label}
                </Button>
            )
        }
        case "borderButton": {
            return (
                <Button className={classnames(classes.borderButton, externalclass)} onClick={handleClick} {...props}>
                    {label}
                </Button>
            )
        }
        case "iconButton": {
            return (
                <Button className={classnames(classes.iconButton, externalclass)} onClick={handleClick} {...props}>
                    {icon}
                </Button>
            )
        }
        case "iconLargeButton": {
            return (
                <Button className={classnames(classes.iconLargeButton, externalclass)} onClick={handleClick} {...props}>
                    {icon}
                </Button>
            )
        }
        case "circleSmallButton": {
            return (
                <Button
                    className={classnames(classes.circleSmallButton, externalclass)}
                    onClick={handleClick}
                    {...props}>
                    {icon}
                </Button>
            )
        }
        case "circleLargeButton": {
            return (
                <Button
                    className={classnames(classes.circleLargeButton, externalclass)}
                    onClick={handleClick}
                    {...props}>
                    {icon}
                </Button>
            )
        }
        case "iconColorButton": {
            return (
                <Button className={classnames(classes.iconColorButton, externalclass)} onClick={handleClick} {...props}>
                    {icon}
                </Button>
            )
        }
        case "dropdownButton": {
            return (
                <Button
                    endIcon={icon}
                    className={classnames(classes.dropdownButton, externalclass)}
                    onClick={handleClick}
                    {...props}>
                    {label}
                </Button>
            )
        }
        case "cancel": {
            return (
                <Button
                    endIcon={icon}
                    className={classnames(classes.cancel, externalclass)}
                    onClick={handleClick}
                    {...props}>
                    {label}
                </Button>
            )
        }
        case "textButton": {
            return (
                <Button className={classnames(classes.textButton, externalclass)} onClick={handleClick} {...props}>
                    {label}
                </Button>
            )
        }
        default: {
            return (
                <Button className={classnames(classes.primary, externalclass)} onClick={handleClick} {...props}>
                    {label}
                </Button>
            )
        }
    }
}

const CustomButton = ({ wantFile, onFileChange, allowMultiple, onClick, acceptFileTyle, color, ...props }) => {
    const classes = useStyles({ color })
    const input = createRef()
    const handleClick = () => {
        if (wantFile) {
            input.current.click()
        } else if (onClick) {
            onClick()
        }
    }

    return (
        <>
            {wantFile && (
                <input
                    type="file"
                    accept={acceptFileTyle}
                    ref={input}
                    multiple={allowMultiple}
                    className={classes.fileInput}
                    onChange={onFileChange}
                />
            )}
            {allButtons({ classes, handleClick, ...props })}
        </>
    )
}

CustomButton.defaultProps = {
    externalclass: "",
    label: "",
    variant: "primary",
    icon: "",
    onClick: () => {},
    wantFile: false,
    onFileChange: () => {},
    allowMultiple: false,
    acceptFileTyle: "image/*",
    color: "",
    // type: "button",
}

CustomButton.propTypes = {
    externalclass: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    variant: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    onClick: PropTypes.func,
    wantFile: PropTypes.bool,
    onFileChange: PropTypes.func,
    allowMultiple: PropTypes.bool,
    acceptFileTyle: PropTypes.string,
    color: PropTypes.string,
    // type: PropTypes.string,
}

export default CustomButton
