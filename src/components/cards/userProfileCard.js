import React, { useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { images } from "../../assets/images";
import classnames from "classnames";
import RoomIcon from "@material-ui/icons/Room";
import CustomButton from "../../components/buttons/customButton";
import { icons } from "../../assets/icons";
import { colors } from "../../theme/colors";
import FollowingFollwers from "../texts/followingFollwers";
import SocialButtons from "../buttons/socialButtons";

const useStyles = makeStyles({
    wrapper: {
        border: `1px solid ${colors.lightGray}`,
        padding: "1.5rem",
        height: "100%",
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
    },
    username: {
        color: colors.lighterGray,
    },
});

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
}) => {
    const classes = useStyles();
    const lessText = bio.slice(0, 90);
    const fullText = bio.slice(0, bio.length);
    const [fullParagraph, setfullParagraph] = useState(false);

    const toggleReadmore = () => {
        setfullParagraph(!fullParagraph);
    };
    return (
        <Box className={classes.wrapper}>
            <Grid container alignItems="flex-start" justify="flex-start">
                <Box className={classes.profilePicContainer}>
                    <Avatar className={classes.avatar} src={image} onClick={onClickProfile} />
                </Box>
                <Box className={classes.profileInfoContainer}>
                    <Typography onClick={onClickProfile}>{name}</Typography>
                    <Typography className={classes.username}>{userName}</Typography>
                    <Typography>
                        {position} &nbsp; <RoomIcon /> {location}
                    </Typography>
                </Box>
            </Grid>
            <FollowingFollwers followers={followers} following={following} />
            <Typography className={classes.bioText}>
                {fullParagraph ? fullText : lessText}
                <span className={classes.readmore} onClick={toggleReadmore}>
                    {fullParagraph ? "Read less" : "Read more"}
                </span>
            </Typography>
            <SocialButtons />
            <Grid container spacing={3}>
                <Grid item xs={6} sm={8} md={8} lg={8} xl={8}>
                    <CustomButton label="Message me" externalClass={classes.fullWidthBtn} onClick={onMsgBtnClick} />
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
                    <CustomButton
                        variant="dropdownButton"
                        icon={<img src={icons.arrowDropdown} />}
                        label="Following"
                        externalClass={classes.smallBtn}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

UserProfileCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    userName: PropTypes.string,
    followers: PropTypes.string,
    following: PropTypes.string,
    position: PropTypes.string,
    location: PropTypes.string,
    bio: PropTypes.string,
    onClickProfile: PropTypes.func,
    onMsgBtnClick: PropTypes.func,
};

export default UserProfileCard;
