import React from "react"
import PropTypes from "prop-types"
import { Avatar, Box, Grid, makeStyles, Typography } from "@material-ui/core"
import classnames from "classnames"
import { colors } from "../../theme/colors"
import CustomButton from "../../components/buttons/customButton"
import { images } from "../../assets/images"
import { MoreVertIcon } from "../../components/icons/moreVertIcon"
import { ShareIcon } from "../../components/icons/shareIcon"
import FollowButton from "../../components/buttons/followButton"

const useStyles = makeStyles({
    wrapper: {
        border: `1px solid ${colors.lightGray}`,
        padding: "1.5rem 1.5rem 2rem 1.5rem",
        background: colors.white,
        marginBottom: "1rem",
        position: "relative",
        "&:last-child": {
            marginBottom: "0rem",
        },
        "@media(max-width:767px)": {
            padding: "0.5rem 1rem",
        },
    },
    avatar: {
        width: "4rem",
        height: "4rem",
        "@media (max-width:767px)": {
            width: "3.5rem",
            height: "3.5rem",
        },
    },
    profilePicContainer: {
        width: "6rem",
        // height: "6rem",
        marginBottom: "0.5rem",
    },
    profileInfoContainer: {
        position: "relative",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "0.2rem 0.5rem 0.2rem 0rem",
        "@media(max-width:767px)": {
            padding: "0.5rem 0rem 1.5rem 0.2rem",
        },
    },
    textInfoContainer: {
        height: "3rem",
        color: colors.black,
        "@media(max-width:767px)": {
            marginLeft: "-2px",
        },
    },
    followBtnContainer: {
        borderLeft: `1px solid ${colors.lightGray}`,
        paddingLeft: "2rem",
        marginTop: "-1.2rem",
        marginLeft: "-4rem",
        "@media(max-width:767px)": {
            display: "none",
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
        minWidth: "7.375rem",
        height: "2.5rem",
        padding: "0.5rem",
        backgroundColor: colors.lighterPrimary,
    },
    readmore: {
        cursor: "pointer",
        display: "inline-block",
        textDecoration: "underline",
    },
    position: {
        color: colors.lighterGray,
        fontSize: "1rem",
    },
    name: {
        fontSize: "1.375rem",
        lineHeight: "2.125rem",
        color: colors.black,
        minWidth: "12rem",
    },
    time: {
        color: colors.lighterGray,
    },
    moreVertIcon: {
        display: "none",
        height: "18px",
        width: "4px",
        position: "absolute",
        top: "1rem",
        right: "1rem",
        "@media(max-width:767px)": {
            display: "block",
        },
    },
    subTitle1: {
        lineHeight: "2rem",
        marginTop: "1rem",
        fontSize: "1.375rem",
        "@media(max-width:767px)": {
            fontSize: "1rem",
        },
    },
    shareButton: {
        minWidth: "2.5rem",
        minHeight: "2.5rem",
        width: "2.5rem",
        height: "2.5rem",
        transform: "translateY(-10px)",
        backgroundColor: colors.lighterPrimary,
        "& hover": {
            backgroundColor: colors.pink,
        },
        "@media(max-width:767px)": {
            display: "none",
        },
    },
})

export const FeedUserProfileCard = ({
    image,
    name,
    category,
    client,
    year,
    position,
    onClickProfile,
    externalclass,
    time,
    description,
}) => {
    const classes = useStyles({ externalclass })

    return (
        <Box className={classnames(classes.wrapper, externalclass)}>
            <MoreVertIcon className={classes.moreVertIcon} />
            <Grid container alignItems="center" justify="space-between" wrap="nowrap">
                <Grid container alignItems="center" justify="flex-start">
                    <Grid item>
                        <Grid
                            container
                            alignItems="flex-start"
                            justify="flex-start"
                            direction="row"
                            className={classes.profileInfoContainer}>
                            <Grid item className={classes.profilePicContainer} xs={12} sm={12} md={3} lg={3} xl={3}>
                                <Avatar className={classes.avatar} src={image} />
                            </Grid>
                            <Grid item className={classes.textInfoContainer} xs={12} sm={12} md={9} lg={9} xl={9}>
                                <Typography onClick={onClickProfile} className={classes.name}>
                                    {name}
                                </Typography>
                                <Typography className={classes.position}>{position}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.followBtnContainer}>
                        <FollowButton
                            buttonWidth="7.375rem"
                            buttonHeight="2.5rem"
                            buttonText="Following"
                            showfollowbtndrowdown
                        />
                    </Grid>
                </Grid>
                <CustomButton
                    variant="iconLargeButton"
                    icon={<ShareIcon width={18.73} />}
                    externalclass={classes.shareButton}
                />
            </Grid>
            <Box>
                <Typography variant="subtitle1">Category: {category}</Typography>
                <Typography variant="subtitle1">Client: {client}</Typography>
                <Grid container alignItems="center" justify="space-between">
                    <Typography variant="subtitle1">Year: {year}</Typography>
                    <Typography variant="subtitle1" className={classnames(classes.time)}>
                        {time}
                    </Typography>
                </Grid>

                <img
                    src={images.masorny1}
                    alt="dummy"
                    style={{ width: "100%", height: "23rem", objectFit: "cover", marginTop: "1rem" }}
                />
                <Typography variant="subtitle1" className={classes.subTitle1}>
                    {description}
                </Typography>
            </Box>
            {/* {!ownProfile ? (
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={8} md={8} lg={8} xl={8}>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
                    </Grid>
                </Grid>
            ) : (
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <CustomButton label="Edit profile" externalclass={classes.fullWidthBtn} onClick={handleRoute} />
                    </Grid>
                </Grid>
            )} */}
        </Box>
    )
}

FeedUserProfileCard.defaultProps = {
    onClickProfile: () => {},
    externalclass: "",
}

FeedUserProfileCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    onClickProfile: PropTypes.func,
    externalclass: PropTypes.string,
    client: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
}
