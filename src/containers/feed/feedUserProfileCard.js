import React from "react"
import PropTypes from "prop-types"
import { Avatar, Box, Grid, makeStyles, Typography } from "@material-ui/core"
import classnames from "classnames"
import { icons } from "../../assets/icons"
import { colors } from "../../theme/colors"
import { CustomButton } from "../../components/buttons/customButton"
import { images } from "../../assets/images"

const useStyles = makeStyles({
    wrapper: {
        border: `1px solid ${colors.lightGray}`,
        padding: "1.5rem",
        background: colors.white,
        marginBottom: "1rem",
        "@media (max-width:766px)": {
            border: "none",
            borderBottom: `1px solid ${colors.lighterGray}`,
        },
    },
    avatar: {
        width: "5rem",
        height: "5rem",
    },
    profilePicContainer: {
        width: "6rem",
    },
    profileInfoContainer: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "0.2rem 0.5rem 0.2rem 0.5rem",
    },
    textInfoContainer: {
        paddingRight: "1.5rem",
        height: "3rem",
    },
    followBtnContainer: {
        borderLeft: `1px solid ${colors.lightGray}`,
        paddingLeft: "2rem",
        marginTop: "-1.2rem",
    },
    fullWidthBtn: {
        width: "100%",
        "@media(max-width:460px)": {
            maxWidth: "10rem",
        },
    },
    smallBtn: {
        width: "100%",
        height: "2.5rem",
        padding: "0.5rem",
        // borderLeft: `1px solid ${colors.lighterGray}`,
    },
    readmore: {
        cursor: "pointer",
        display: "inline-block",
        textDecoration: "underline",
    },
    position: {
        color: colors.lighterGray,
        fontSize: "16px",
        lineHeight: "22px",
    },
    name: {
        fontSize: "22px",
        lineHeight: "34px",
        color: colors.black,
    },
    time: {
        color: colors.lightGray,
    },
})

export const FeedUserProfileCard = ({
    image,
    name,
    category,
    client,
    year,
    icon,
    date,
    position,
    onClickProfile,
    onMsgBtnClick,
    externalclass,
    ownProfile,
    video,
    time,
    description,
}) => {
    const classes = useStyles({ externalclass })

    return (
        <Box className={classnames(classes.wrapper, externalclass)}>
            <Grid container alignItems="center" justify="flex-start">
                <Grid item>
                    <Grid
                        container
                        alignItems="flex-start"
                        justify="flex-start"
                        direction="row"
                        className={classes.profileInfoContainer}>
                        <Grid item className={classes.profilePicContainer}>
                            <Avatar className={classes.avatar} src={image} />
                        </Grid>
                        <Grid item className={classes.textInfoContainer}>
                            <Typography onClick={onClickProfile} className={classes.name}>
                                {name}
                            </Typography>
                            <Typography className={classes.username}>{position}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.followBtnContainer}>
                    <CustomButton
                        variant="dropdownButton"
                        icon={<img src={icons.arrowDropdown} alt="" />}
                        label="Following"
                        externalclass={classes.smallBtn}
                    />
                </Grid>
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

                <img src={images.masorny1} alt="dummy" style={{ width: "100%", height: "23rem", objectFit: "cover" }} />
                <Typography variant="subtitle1">{description}</Typography>
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
    onMsgBtnClick: () => {},
    externalclass: "",
    ownProfile: false,
}

FeedUserProfileCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    onClickProfile: PropTypes.func,
    onMsgBtnClick: PropTypes.func,
    externalclass: PropTypes.string,
    ownProfile: PropTypes.bool,
    client: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}
