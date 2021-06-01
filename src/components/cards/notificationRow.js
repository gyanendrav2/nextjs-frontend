import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import PropTypes from "prop-types"
import CustomButton from "../buttons/customButton"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    avatar: {
        width: "3.5rem",
        height: "3.5rem",
        alignSelf: "flex-start",
    },
    title: {
        maxWidth: "35.187rem",
        marginRight: "auto",
        marginLeft: "1.5rem",
        lineHeight: "1.375rem",
        "@media (max-width: 767px)": {
            marginLeft: "0.875rem",
        },
    },
    notificationWrapper: {
        padding: "2rem 2rem 2rem 0",
        flexWrap: "nowrap",
        borderBottom: `1px solid ${colors.lightGray}`,
        "@media (max-width: 1024px)": {
            padding: "2rem 2rem 2rem 0",
            marginBottom: "0",
        },
        "@media (max-width:767px)": {
            flexWrap: "wrap",
            padding: "1.25rem 1rem 1.25rem 0",
            marginBottom: "0rem",
        },
    },
    buttonContainer: {
        maxWidth: "15rem",
        marginRight: "4.125rem",
        marginLeft: "4.125rem",
        "@media (min-width : 768px) and (max-width: 1024px)": {
            marginLeft: "0rem",
        },
        "@media (max-width: 767px)": {
            marginLeft: "2rem",
            marginRight: "0rem",
        },
    },
    declineButton: {
        backgroundColor: "transparent",
        color: colors.pink,
        "&:hover": {
            backgroundColor: "transparent",
        },
        "@media (max-width: 767px)": {
            marginLeft: "0.75rem",
            marginRight: "-1.5rem",
        },
    },
    acceptButton: {
        backgroundColor: colors.lightGray,
        padding: "0.562rem 1rem",
        color: colors.black,
        height: "2.5rem",
        marginLeft: "auto",
        width: "7.312rem",
        textTransform: "none",
        "@media (max-width: 1025px)": {
            width: "auto",
        },
        "@media (max-width: 767px)": {
            marginLeft: "2.4rem",
            width: "auto",
        },
    },
    mobileDate: {
        display: "none",
        paddingLeft: "4.5rem",
        marginTop: "0.6rem",
        color: colors.lighterGray,
        "@media (max-width: 767px)": {
            display: "block",
        },
    },

    desktopDate: {
        display: "block",
        color: colors.lighterGray,
        "@media (max-width: 767px)": {
            display: "none",
        },
    },
})
export const NotificationRow = ({ title, image, onAcceptClick, onDeclineClick, isDeclinable, buttonLabel }) => {
    const classes = useStyles()
    return (
        <Grid container alignItems="center" justify="space-between" className={classes.notificationWrapper}>
            <Grid container alignItems="center" justify="space-between" wrap="nowrap">
                <Avatar src={image} className={classes.avatar} />
                <Typography className={classes.title}>{title}</Typography>
            </Grid>
            <Typography className={classes.mobileDate}>25.10.20</Typography>
            <Grid
                container
                alignItems="center"
                justify="space-between"
                wrap="nowrap"
                className={classes.buttonContainer}>
                {isDeclinable && (
                    <CustomButton label="Decline" externalclass={classes.declineButton} onClick={onDeclineClick} />
                )}
                <CustomButton label={buttonLabel} externalclass={classes.acceptButton} onClick={onAcceptClick} />
            </Grid>
            <Typography className={classes.desktopDate}>25.10.20</Typography>
        </Grid>
    )
}

NotificationRow.defaultProps = {
    isDeclinable: false,
    buttonLabel: "",
    image: "",
}

NotificationRow.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.element]).isRequired,
    image: PropTypes.string,
    onAcceptClick: PropTypes.func.isRequired,
    isDeclinable: PropTypes.bool,
    onDeclineClick: PropTypes.func.isRequired,
    buttonLabel: PropTypes.string,
}
