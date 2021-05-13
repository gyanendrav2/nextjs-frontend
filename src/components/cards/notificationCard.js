import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Box, makeStyles, Typography } from "@material-ui/core"
import CustomButton from "../buttons/customButton"
import { CloseIconBig } from "../icons/closeIconBig"
import { colors } from "../../theme/colors"

export const useStyles = makeStyles({
    wrapper: {
        background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF",
        boxShadow: "0 0 15px 2px rgba(0,0,0,0.4)",
        padding: "1.25rem",
        position: "fixed",
        top: "1rem",
        left: "2rem",
        right: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        zIndex: 999,
        borderLeft: `8px solid ${colors.green}`,
        animation: "fadeIn 0.3s linear",
        "@media (max-width:500px)": {
            display: "block",
        },
    },
    msg: {
        fontSize: "1rem",
        marginRight: "3rem",
    },
    button: {
        height: "2.5rem",
        "@media (max-width:500px)": {
            marginTop: "1rem",
        },
    },
    closeIcon: {
        position: "absolute",
        top: "1.6rem",
        right: "1rem",
        cursor: "pointer",
    },
})

export const NotificationCard = ({
    isVisible,
    timeout,
    message,
    buttonText,
    shouldHide,
    onClick,
    handleHideNotification,
    hideButton,
}) => {
    const classes = useStyles()

    const handleButtonClick = () => {
        if (shouldHide) {
            handleHideNotification()
            return
        }
        onClick()
    }

    useEffect(() => {
        if (isVisible) {
            setTimeout(() => {
                handleHideNotification()
            }, timeout)
        }
    }, [isVisible, timeout, handleHideNotification])

    return (
        <>
            {isVisible && (
                <Box className={classes.wrapper}>
                    <Typography className={classes.msg}>{message}</Typography>
                    {!hideButton && (
                        <CustomButton label={buttonText} onClick={handleButtonClick} externalclass={classes.button} />
                    )}
                    <CloseIconBig className={classes.closeIcon} onClick={handleHideNotification} />
                </Box>
            )}
        </>
    )
}

NotificationCard.defaultProps = {
    shouldHide: true,
    handleHideNotification: () => {},
    onClick: () => {},
    isVisible: false,
    timeout: 2000,
    hideButton: false,
}

NotificationCard.propTypes = {
    message: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    shouldHide: PropTypes.bool,
    handleHideNotification: PropTypes.func,
    onClick: PropTypes.func,
    isVisible: PropTypes.bool,
    timeout: PropTypes.number,
    hideButton: PropTypes.bool,
}
