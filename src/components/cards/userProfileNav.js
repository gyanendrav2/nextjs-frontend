import { Avatar, Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { useRouter } from "next/router"
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
        "@media (max-width:1024px)": {
            display: "none",
        },
    },
    autoWidth: {
        width: "auto",
        position: "relative",
        borderTop: (props) => (props.active ? `3px solid ${colors.pink}` : "none"),
        height: "5.5rem",
    },
    editOptionsContainer: {
        position: "absolute",
        top: "5.5rem",
        left: 0,
        padding: "1.5rem",
        paddingBottom: 0,
        boxShadow: "0px 4px 100px rgba(0, 0, 0, 0.25)",
        zIndex: 2,
        backgroundColor: colors.white,
        width: "18.125rem",
        "@media (max-width:1024px)": {
            right: "-10.5rem",
            left: "unset",
            top: "5.75rem",
        },
    },
    editOption: {
        marginBottom: "1.5rem",
        cursor: "pointer",
        userSelect: "none",
        color: colors.black,
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

export const UserProfileNav = ({ userName, profileImg, externalclass, active }) => {
    const classes = useStyles({ active })
    const routes = useRouter()
    const [showEditOptions, setShowEditOptions] = useState(false)

    const routeEditProfile = () => {
        routes.push("/feed")
    }

    const handleRoute = () => {
        routes.push("/signin")
    }
    const routeSettings = () => {
        routes.push("/settings/profile")
    }

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
                        <Typography className={classes.editOption} onClick={routeEditProfile}>
                            Profile
                        </Typography>
                        <Typography className={classes.editOption} onClick={routeSettings}>
                            Settings
                        </Typography>
                        <Typography className={classes.editOption} onClick={handleRoute}>
                            Log Out
                        </Typography>
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
    active: false,
}

UserProfileNav.propTypes = {
    userName: PropTypes.string,
    profileImg: PropTypes.string,
    externalclass: PropTypes.string,
    active: PropTypes.bool,
}
