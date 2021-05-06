import { Avatar, Box, Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import PropTypes from "prop-types"
import { images } from "../../assets/images"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        border: `1px solid ${colors.lightGray}`,
        backgroundColor: colors.white,
        padding: "2rem",
        position: "sticky",
        top: "5rem",
    },
    avatar: {
        width: "6.5rem",
        height: "6.5rem",
        margin: "auto",
    },
    title: {
        fontSize: "1.375rem",
        color: colors.black,
        textAlign: "center",
        marginTop: "1rem",
    },
    subTitle: {
        fontSize: "1",
        color: colors.lighterGray,
        textAlign: "center",
        marginTop: "0.2rem",
        marginBottom: "1.5rem",
    },
    follow: {
        fontSize: "1rem",
        lineHeight: "1.375rem",
        color: colors.lighterGray,
    },
    followersNum: {
        fontSize: "1rem",
        lineHeight: "1.375rem",
        color: colors.black,
        textDecoration: "underline",
    },
})

export const FeedProfileCard = ({ followers, following, onFollowClick, onFollowedClick }) => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <Avatar src={images.maskGroup} className={classes.avatar} />
            <Typography className={classes.title}>Brandon Landing</Typography>
            <Typography className={classes.subTitle}>Director assistant, producer</Typography>
            <Grid container alignItems="center" justify="space-between" style={{ marginTop: "1rem" }}>
                <Grid item>
                    <Typography className={classes.follow}>I follow people</Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.followersNum} onClick={onFollowClick}>
                        {following} people
                    </Typography>
                </Grid>
            </Grid>
            <Grid container alignItems="center" justify="space-between" style={{ marginTop: "1rem" }}>
                <Grid item>
                    <Typography className={classes.follow}>I'm followed by people</Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.followersNum} onClick={onFollowedClick}>
                        {followers} people
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

FeedProfileCard.propTypes = {
    onFollowClick: PropTypes.func.isRequired,
    onFollowedClick: PropTypes.func.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
}
