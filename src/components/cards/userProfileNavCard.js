import React from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { colors } from "../../theme/colors"

export const useStyles = makeStyles({
    wrapper: {
        position: "absolute",
        top: "3rem",
        right: 0,
        backgroundColor: colors.white,
        width: "18.312rem",
        padding: "1rem",
        background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF",
        boxShadow: "0px 4px 100px rgba(0, 0, 0, 0.25)",
    },
    option: {
        marginBottom: "1.5rem",
        userSelect: "none",
        "&:hover": {
            color: colors.pink,
        },
    },
})

export const UserProfileNavCard = () => {
    const classes = useStyles()

    return (
        <Box className={classes.wrapper}>
            <Typography className={classes.option}>Profile</Typography>
            <Typography className={classes.option}>Settings</Typography>
            <Typography className={classes.option}>Logout</Typography>
        </Box>
    )
}

UserProfileNavCard.defaultProps = {
    // onEdit: () => {},
    // onHide: () => {},
    // onShare: () => {},
}

UserProfileNavCard.propTypes = {
    // onEdit: PropTypes.func,
    // onHide: PropTypes.func,
    // onShare: PropTypes.func,
}
