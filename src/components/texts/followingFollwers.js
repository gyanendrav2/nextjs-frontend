import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    followersCotainer: {
        margin: "1.5rem 0 1rem 0",
        "& p": {
            color: colors.lighterGray,
            marginRight: "1.5rem",
        },
        "& span": {
            color: colors.black,
            fontWeight: 600,
        },
    },
})

export const FollowingFollwers = ({ following, followers, externalclass }) => {
    const classes = useStyles()
    return (
        <Grid
            container
            alignItems="center"
            justify="flex-start"
            className={classnames(classes.followersCotainer, externalclass)}>
            <Typography>
                <span>{following}</span> following
            </Typography>
            <Typography>
                <span>{followers}</span> followers
            </Typography>
        </Grid>
    )
}

FollowingFollwers.defaultProps = {
    externalclass: "",
}

FollowingFollwers.propTypes = {
    following: PropTypes.string.isRequired,
    followers: PropTypes.string.isRequired,
    externalclass: PropTypes.string,
}
