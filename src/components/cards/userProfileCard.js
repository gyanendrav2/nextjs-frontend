import React, { useState } from "react"
import PropTypes from "prop-types"
import { Avatar, Box, Grid, makeStyles, Typography } from "@material-ui/core"
import classnames from "classnames"
import { CustomButton } from "../buttons/customButton"
import { icons } from "../../assets/icons"
import { colors } from "../../theme/colors"
import { FollowingFollwers } from "../texts/followingFollwers"
import { SocialButtons } from "../buttons/socialButtons"
import { LocationIcon } from "../icons/locationIcon"

const useStyles = makeStyles({
    wrapper: {
        border: `1px solid ${colors.lightGray}`,
        padding: "1.5rem",
        height: "100%",
        "@media (max-width:766px)": {
            border: "none",
            borderBottom: `1px solid ${colors.lightGray}`,
        },
        // "@media (max-width:575px)": {
        //     padding: ,
        // },
    },
    avatar: {
        width: "5rem",
        height: "5rem",
    },
    profilePicContainer: {
        width: "6rem",
    },
    profileInfoContainer: {
        width: "calc(100% - 6rem) ",
        "& p": {
            cursor: "pointer",
        },
    },
    bioText: {
        marginBottom: "1rem",
        "& span": {
            textDecoration: "underline",
        },
    },
    fullWidthBtn: {
        width: "100%",
        "@media(max-width:460px)": {
            maxWidth: "10rem",
        },
    },
    smallBtn: {
        width: "100%",
    },
    readmore: {
        cursor: "pointer",
        display: "inline-block",
        textDecoration: "underline",
    },
    username: {
        color: colors.lighterGray,
    },
})

export const UserProfileCard = ({
    image,
    name,
    userName,
    followers,
    following,
    position,
    location,
    bio,
    onClickProfile,
    onMsgBtnClick,
    externalclass,
}) => {
    const classes = useStyles({ externalclass })
    const lessText = bio.slice(0, 90)
    const fullText = bio.slice(0, bio.length)
    const [fullParagraph, setfullParagraph] = useState(false)

    const toggleReadmore = () => {
        setfullParagraph(!fullParagraph)
    }
    return (
        <Box className={classnames(classes.wrapper, externalclass)}>
            <Grid container alignItems="flex-start" justify="flex-start">
                <Box className={classes.profilePicContainer}>
                    <Avatar className={classes.avatar} src={image} onClick={onClickProfile} />
                </Box>
                <Box className={classes.profileInfoContainer}>
                    <Typography onClick={onClickProfile}>{name}</Typography>
                    <Typography className={classes.username}>{userName}</Typography>
                    <Typography>
                        {position} &nbsp; <LocationIcon /> {location}
                    </Typography>
                </Box>
            </Grid>
            <FollowingFollwers followers={followers} following={following} />
            <Typography className={classes.bioText}>
                {fullParagraph ? fullText : lessText}
                <Typography className={classes.readmore} onClick={toggleReadmore}>
                    {fullParagraph ? "Read less" : "Read more"}
                </Typography>
            </Typography>
            <SocialButtons />
            <Grid container spacing={3}>
                <Grid item xs={6} sm={8} md={8} lg={8} xl={8}>
                    <CustomButton label="Message me" externalclass={classes.fullWidthBtn} onClick={onMsgBtnClick} />
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
                    <CustomButton
                        variant="dropdownButton"
                        icon={<img src={icons.arrowDropdown} alt="" />}
                        label="Following"
                        externalclass={classes.smallBtn}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

UserProfileCard.defaultProps = {
    onClickProfile: () => {},
    onMsgBtnClick: () => {},
    externalclass: "",
}

UserProfileCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    followers: PropTypes.string.isRequired,
    following: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    onClickProfile: PropTypes.func,
    onMsgBtnClick: PropTypes.func,
    externalclass: PropTypes.string,
}
