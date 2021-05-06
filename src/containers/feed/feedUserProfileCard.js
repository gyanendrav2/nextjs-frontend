import React, { useState } from "react"
import PropTypes from "prop-types"
import { Avatar, Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { useRouter } from "next/router"
import classnames from "classnames"
import { icons } from "../../assets/icons"
import { colors } from "../../theme/colors"
import { CustomButton } from "../../components/buttons/customButton"
import { BorderLeft } from "@material-ui/icons"

const useStyles = makeStyles({
    wrapper: {
        border: `1px solid ${colors.lightGray}`,
        padding: "1.5rem",
        height: "100%",
        background:colors.white,
        "@media (max-width:766px)": {
            border: "none",
            borderBottom: `1px solid ${colors.lightGray}`,
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
        display:"flex",
        alignItems:"flex-start",
        justifyContent:"center",
        padding:"0.2rem 0.5rem 0.2rem 0.5rem",
        // "& p": {
        //     cursor: "pointer",
        // },
    },
    textInfoContainer:{
        borderRight:`1px solid ${colors.lighterGray}`,
        paddingRight:"0.5rem",
    },
    followBtnContainer:{
        paddingLeft:"0.5rem",
        height:"2.5rem",
        width:"7rem",
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
    position: {
        color: colors.lighterGray,
        fontSize: "16px",
        lineHeight: "22px",
    },
    name:{
    fontSize: "22px",
    lineHeight: "34px",
    color:colors.black
    },
})

export const FeedUserProfileCard = ({
    image,
    name,
    category,
    Client,
    Year,
    date,
    position,
    onClickProfile,
    onMsgBtnClick,
    externalclass,
    ownProfile,
    video
}) => {
    const classes = useStyles({ externalclass })

    const routes = useRouter()

    // const handleRoute = () => {
    //     routes.push("/edit-profile/account-information")
    // }

    return (
        <Box className={classnames(classes.wrapper, externalclass)}>
            <Grid container alignItems="center" justify="flex-start">
            <Grid item >
                <Grid container alignItems="flex-start" justify="flex-start" direction="row" className={classes.profileInfoContainer}>
                <Grid item className={classes.profilePicContainer}>
                    <Avatar className={classes.avatar} src={image} />
                </Grid>
                <Grid item  className={classes.textInfoContainer}>
                    <Typography onClick={onClickProfile} className={classes.name}>{name}</Typography>
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
    followers: PropTypes.string.isRequired,
    following: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    onClickProfile: PropTypes.func,
    onMsgBtnClick: PropTypes.func,
    externalclass: PropTypes.string,
    ownProfile: PropTypes.bool,
}
