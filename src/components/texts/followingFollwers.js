import React from "react"
import PropTypes from "prop-types"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    followersCotainer: {
        margin: "1rem 0",
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

export const FollowingFollwers = ({ following, followers }) => {
    const classes = useStyles()
    return (
        <Grid container alignItems="center" justify="flex-start" className={classes.followersCotainer}>
            <Typography>
                <span>{following}</span> following
            </Typography>
            <Typography>
                <span>{followers}</span> followers
            </Typography>
        </Grid>
    )
}

FollowingFollwers.propTypes = {
    following: PropTypes.string.isRequired,
    followers: PropTypes.string.isRequired,
}
