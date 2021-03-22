import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { images } from "../../assets/images";
import classNames from "classnames";
import RoomIcon from "@material-ui/icons/Room";
import CustomButton from "../../ui/button/CustomButton";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { colors } from "../../theme/colors";

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
    },
    followersCotainer: {
        margin: "2rem 0",
        "& p": {
            color: colors.lighterGray,
            marginRight: "1.5rem",
        },
        "& span": {
            color: colors.black,
            fontWeight: 600,
        },
    },
    bioText: {
        marginBottom: "2rem",
        "& span": {
            textDecoration: "underline",
        },
    },
    buttonContainer: {
        marginBottom: "2rem",
        "& button": {
            marginRight: "1rem",
        },
    },
    fullWidthBtn: {
        width: "100%",
    },
    socialButton:{
        minWidth: '2rem',
        minHeight: '2rem',
        marginBottom: '1rem',
    }
});

const UserProfileCard = ({ image, name, userName, followers, following, position, location, bio }) => {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <Grid container alignItems="flex-start" justify="flex-start">
                <Box className={classes.profilePicContainer}>
                    <Avatar className={classes.avatar} src={image} />
                </Box>
                <Box className={classes.profileInfoContainer}>
                    <Typography>{name}</Typography>
                    <Typography>{userName}</Typography>
                    <Typography>
                        {position} &nbsp; <RoomIcon /> {location}
                    </Typography>
                </Box>
            </Grid>
            <Grid container alignItems="center" justify="flex-start" className={classes.followersCotainer}>
                <Typography>
                    <span>{following}</span> following
                </Typography>
                <Typography>
                    <span>{followers}</span> followers
                </Typography>
            </Grid>
            <Typography className={classes.bioText}>
                {bio}
                <span>Read more</span>
            </Typography>
            <Grid container alignItems="center" justify="flex-start" className={classes.buttonContainer}>
                <CustomButton variant="circleLargeButton" icon={<YouTubeIcon />} externalClass={classes.socialButton} />
                <CustomButton variant="circleLargeButton" icon={<YouTubeIcon />} externalClass={classes.socialButton}/>
                <CustomButton variant="circleLargeButton" icon={<YouTubeIcon />} externalClass={classes.socialButton}/>
                <CustomButton variant="circleLargeButton" icon={<YouTubeIcon />} externalClass={classes.socialButton}/>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                    <CustomButton label="Message me" externalClass={classes.fullWidthBtn} />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <CustomButton label="Following" externalClass={classes.fullWidthBtn} />
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
};

export default UserProfileCard;
