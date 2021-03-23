import React, { createRef } from "react";
import PropTypes from "prop-types";
import { Button, makeStyles } from "@material-ui/core";
import { colors } from "../../theme/colors";
import classnames from "classnames";
import { Visibility } from "@material-ui/icons";

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
        backgroundColor: colors.white,
        border: `2px solid ${colors.black}`,
        borderRadius: 0,
        textTransform: "capitalize",
        padding: "1.125rem 3rem",
        "&:hover": {
            color: colors.white,
            backgroundColor: colors.black,
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
            color: colors.black,
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
});

const allButtons = ({ handleClick, variant, label, icon, externalClass, ...props }) => {
    const classes = useStyles();

    switch (variant) {
        case "primary": {
            return (
                <Button className={classnames(classes.primary, externalClass)} onClick={handleClick} {...props}>
                    {label}
                </Button>
            );
        }
        case "borderButton": {
            return (
                <Button className={classnames(classes.borderButton, externalClass)} onClick={handleClick} {...props}>
                    {label}
                </Button>
            );
        }
        case "iconButton": {
            return (
                <Button className={classnames(classes.iconButton, externalClass)} onClick={handleClick} {...props}>
                    {icon}
                </Button>
            );
        }
        case "iconLargeButton": {
            return (
                <Button className={classnames(classes.iconLargeButton, externalClass)} onClick={handleClick} {...props}>
                    {icon}
                </Button>
            );
        }
        case "circleSmallButton": {
            return (
                <Button
                    className={classnames(classes.circleSmallButton, externalClass)}
                    onClick={handleClick}
                    {...props}>
                    {icon}
                </Button>
            );
        }
        case "circleLargeButton": {
            return (
                <Button
                    className={classnames(classes.circleLargeButton, externalClass)}
                    onClick={handleClick}
                    {...props}>
                    {icon}
                </Button>
            );
        }
        case "iconColorButton": {
            return (
                <Button className={classnames(classes.iconColorButton, externalClass)} onClick={handleClick} {...props}>
                    {icon}
                </Button>
            );
        }
        case "dropdownButton": {
            return (
                <Button
                    endIcon={icon}
                    className={classnames(classes.dropdownButton, externalClass)}
                    onClick={handleClick}
                    {...props}>
                    {label}
                </Button>
            );
        }
        default: {
            return (
                <Button className={classnames(classes.primary, externalClass)} onClick={handleClick} {...props}>
                    {label}
                </Button>
            );
        }
    }
};

const CustomButton = ({ wantFile, onFileChange, allowMultiple, onClick, ...props }) => {
    const classes = useStyles();
    const input = createRef();
    const handleClick = () => {
        if (wantFile) {
            input.current.click();
        } else if (onClick) {
            onClick();
        }
    };

    return (
        <>
            {wantFile && (
                <input
                    type="file"
                    ref={input}
                    multiple={allowMultiple}
                    className={classes.fileInput}
                    onChange={onFileChange}
                />
            )}
            {allButtons({ handleClick, ...props })}
        </>
    );
};

CustomButton.propTypes = {
    externalClass: PropTypes.string,
    label: PropTypes.any,
    variant: PropTypes.string,
    icon: PropTypes.element,
    onClick: PropTypes.func,
    wantFile: PropTypes.bool,
    onFileChange: PropTypes.func,
    allowMultiple: PropTypes.bool,
};

export default CustomButton;
