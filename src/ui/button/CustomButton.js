import React from "react";
import PropTypes from "prop-types";
import { Button, makeStyles } from "@material-ui/core";
import { colors } from "../../theme/colors";
import classnames from "classnames";

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
});

const allButtons = ({ variant, label, icon, externalClass, ...props }) => {
    const classes = useStyles();
    switch (variant) {
        case "primary": {
            return (
                <Button className={classnames(classes.primary, externalClass)} {...props}>
                    {label}
                </Button>
            );
        }
        case "borderButton": {
            return (
                <Button className={classnames(classes.borderButton, externalClass)} {...props}>
                    {label}
                </Button>
            );
        }
        case "iconButton": {
            return (
                <Button className={classnames(classes.iconButton, externalClass)} {...props}>
                    {icon}
                </Button>
            );
        }
        case "iconLargeButton": {
            return (
                <Button className={classnames(classes.iconLargeButton, externalClass)} {...props}>
                    {label}
                </Button>
            );
        }
        case "circleSmallButton": {
            return (
                <Button className={classnames(classes.circleSmallButton, externalClass)} {...props}>
                    {icon}
                </Button>
            );
        }
        case "circleLargeButton": {
            return (
                <Button className={classnames(classes.circleLargeButton, externalClass)} {...props}>
                    {icon}
                </Button>
            );
        }
        case "iconColorButton": {
            return (
                <Button className={classnames(classes.iconColorButton, externalClass)} {...props}>
                    {icon}
                </Button>
            );
        }
        default: {
            return (
                <Button className={classnames(classes.primary, externalClass)} {...props}>
                    {label}
                </Button>
            );
        }
    }
};

const CustomButton = (props) => {
    return allButtons({ ...props });
};

CustomButton.propTypes = {
    externalClass: PropTypes.string,
    label: PropTypes.any,
    variant: PropTypes.string,
    icon: PropTypes.element,
    onClick: PropTypes.func,
};

export default CustomButton;
