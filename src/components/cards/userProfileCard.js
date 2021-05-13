import React, { useState } from "react"
import PropTypes from "prop-types"
import { Avatar, Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { useRouter } from "next/router"
import classnames from "classnames"
import CustomButton from "../buttons/customButton"
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
        "@media (max-width:767px)": {
            border: "none",
            borderBottom: `1px solid ${colors.lightGray}`,
        },
        "@media (max-width:767px)": {
            padding:"1rem 1.5rem",
        },
    },
    avatar: {
        width: "5rem",
        height: "5rem",
    },
    name:{
        fontFamily: "Helvetica",
        fontSize: "1.375rem",
        lineHeight: "2.125rem",
        padding:"0.2rem 0",
        "@media(max-width:767px)": {
            fontSize: "1rem",
            lineHeight: "1.375rem",
        },
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
        color: colors.black,
        fontSize: "1rem",
        lineHeight: "1.375rem",
        fontFamily:"Helvetica",
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
    editfullWidthBtn: {
        width: "100%",
        padding:"0"
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
        fontSize: "1rem",
        lineHeight: "1.375rem",
        padding:"0.2rem 0",
        "@media(max-width:767px)": {
            fontSize: "0.875rem",
            lineHeight: "1rem",
        },
    },
    position:{
        fontFamily: "Helvetica",
        fontSize: "0.875rem",
        lineHeight: "1rem",
        padding:"0.2rem 0"
    },
    mobilemargin:{
        "@media (max-width:410px)": {
           marginLeft:"1.5rem",
           display:"inline"
        },
    }
})

const UserProfileCard = ({
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
    ownProfile,
}) => {
    const classes = useStyles({ externalclass })

    const routes = useRouter()
    const lessText = bio.slice(0, 90)
    const fullText = bio.slice(0, bio.length)
    const [fullParagraph, setfullParagraph] = useState(false)

    const handleRoute = () => {
        routes.push("/edit-profile/account-information")
    }

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
                    <Typography onClick={onClickProfile} className={classes.name}>{name}</Typography>
                    <Typography className={classes.username} >{userName}</Typography>
                    <Typography className={classes.position}>
                        {position} &nbsp;<span className={classes.mobilemargin}> <LocationIcon /> {location} </span>
                    </Typography>
                </Box>
            </Grid>
            <FollowingFollwers followers={followers} following={following} />
            <Box className={classes.bioText}>
                {fullParagraph ? fullText : lessText}
                <Typography className={classes.readmore} onClick={toggleReadmore}>
                    {fullParagraph ? "Read less" : "Read more"}
                </Typography>
            </Box>
            <SocialButtons />
            {!ownProfile ? (
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
            ) : (
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={12} xl={12}>
                        <CustomButton label="Edit profile" externalclass={classes.editfullWidthBtn} onClick={handleRoute} />
                    </Grid>
                </Grid>
            )}
        </Box>
    )
}

UserProfileCard.defaultProps = {
    onClickProfile: () => {},
    onMsgBtnClick: () => {},
    externalclass: "",
    ownProfile: false,
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
    ownProfile: PropTypes.bool,
}

export default UserProfileCard