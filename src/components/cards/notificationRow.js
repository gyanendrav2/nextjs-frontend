import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import PropTypes from "prop-types"
import { CustomButton } from "../buttons/customButton"
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
    },
    notificationWrapper: {
        marginBottom: "2rem",
        padding: "2rem",
        flexWrap: "nowrap",
        borderBottom: `1px solid ${colors.lightGray}`,
        "@media (max-width: 767px)": {
            flexWrap: "wrap",
        },
    },
    buttonContainer: {
        maxWidth: "15rem",
        marginRight: "4.125rem",
        marginLeft: "4.125rem",
    },
    declineButton: {
        backgroundColor: "transparent",
        color: colors.pink,
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
    acceptButton: {
        backgroundColor: colors.lightGray,
        padding: "0.562rem 2.125rem",
        color: colors.black,
        height: "2.5rem",
        marginLeft: "auto",
    },
    date1: {
        display: "none",
        marginLeft: "4rem",
        marginTop: "0.6rem",
        color: colors.lightGray,
        "@media (max-width: 500px)": {
            display: "block",
        },
    },
    date2: {
        display: "block",
        color: colors.lightGray,
        "@media (max-width: 500px)": {
            display: "none",
        },
    },
})
export const NotificationRow = ({ title, image, onAcceptClick, onDeclineClick, isDeclinable }) => {
    const classes = useStyles()
    return (
        <Grid container alignItems="center" justify="space-between" className={classes.notificationWrapper}>
            <Grid container alignItems="center" justify="space-between" wrap="nowrap">
                <Avatar src={image} />
                <Typography className={classes.title}>{title}</Typography>
            </Grid>
            <Typography className={classes.date1}>25.10.20</Typography>
            <Grid
                container
                alignItems="center"
                justify="space-between"
                wrap="nowrap"
                className={classes.buttonContainer}>
                {isDeclinable && (
                    <CustomButton
                        label="Decline"
                        externalclass={classes.declineButton}
                        disableRipple
                        onClick={onDeclineClick}
                    />
                )}
                <CustomButton label="Accept" externalclass={classes.acceptButton} onClick={onAcceptClick} />
            </Grid>
            <Typography className={classes.date2}>25.10.20</Typography>
        </Grid>
    )
}

NotificationRow.defaultProps = {
    onDeclineClick: () => {},
    isDeclinable: false,
}

NotificationRow.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onAcceptClick: PropTypes.string.isRequired,
    isDeclinable: PropTypes.bool,
    onDeclineClick: PropTypes.string,
}
