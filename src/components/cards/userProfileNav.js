import { Avatar, Box, Grid, makeStyles, Typography } from "@material-ui/core"
import React, { useState } from "react"
import classnames from "classnames"
import PropTypes from "prop-types"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    username: {
        marginLeft: "1rem",
        color: colors.white,
        fontSize: "1rem",
        lineHeight: "1.3rem",
    },
    autoWidth: {
        width: "auto",
        position: "relative",
    },
    editOptionsContainer: {
        position: "absolute",
        top: "4rem",
        left: 0,
        padding: "1.5rem",
        paddingBottom: 0,
        boxShadow: "0px 4px 100px rgba(0, 0, 0, 0.25)",
        zIndex: 2,
        backgroundColor: colors.white,
        width: "18.125rem",
    },
    editOption: {
        marginBottom: "1.5rem",
        cursor: "pointer",
        userSelect: "none",
        "&:hover": {
            color: colors.pink,
        },
    },
    outside: {
        position: "fixed",
        zIndex: 1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100vh",
    },
})

export const UserProfileNav = ({ userName, profileImg, externalclass }) => {
    const classes = useStyles()
    const [showEditOptions, setShowEditOptions] = useState(false)
    return (
        <Grid
            container
            alignItems="center"
            justifycontent="space-between"
            className={classnames(classes.autoWidth, externalclass)}>
            <Grid
                container
                alignItems="center"
                justifycontent="space-between"
                onClick={() => setShowEditOptions(!showEditOptions)}>
                <Avatar src={profileImg} />
                <Typography className={classes.username}>{userName}</Typography>
            </Grid>
            {showEditOptions && (
                <>
                    <Box className={classes.editOptionsContainer}>
                        <Typography className={classes.editOption}>Profile</Typography>
                        <Typography className={classes.editOption}>Settings</Typography>
                        <Typography className={classes.editOption}>Log Out</Typography>
                    </Box>
                    <Box className={classes.outside} onClick={() => setShowEditOptions(!showEditOptions)} />
                </>
            )}
        </Grid>
    )
}

UserProfileNav.defaultProps = {
    userName: "",
    profileImg: "",
    externalclass: "",
}

UserProfileNav.propTypes = {
    userName: PropTypes.string,
    profileImg: PropTypes.string,
    externalclass: PropTypes.string,
}
