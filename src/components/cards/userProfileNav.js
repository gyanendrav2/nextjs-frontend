import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"
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
    },
})

export const UserProfileNav = ({ userName, profileImg }) => {
    const classes = useStyles()
    return (
        <Grid container alignItems="center" justifycontent="space-between" className={classes.autoWidth}>
            <Avatar src={profileImg} />
            <Typography className={classes.username}>{userName}</Typography>
        </Grid>
    )
}

UserProfileNav.defaultProps = {
    userName: "",
    profileImg: "",
}

UserProfileNav.propTypes = {
    userName: PropTypes.string,
    profileImg: PropTypes.string,
}
