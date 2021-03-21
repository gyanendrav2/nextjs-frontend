import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import HeaderWrapper from "../../components/header/headerWrapper";
import { images } from "../../assets/images";
// import CardWithHeader from "../../components/cards/cardWithHeader";
import { colors } from "../../theme/colors";
import classnames from "classnames";
import { teamMemberData } from "../../data/project";
import UserProfileRow from "../../components/cards/userProfileRow";
import MoreMemberModel from "../../containers/project/moreMemberModel";
import Slider from "../../containers/project/slider";

const useStyles = makeStyles({
    projectwrapper: {
        backgroundColor: colors.white,
    },
    profileWrapper: {
        padding: "2.5rem 3rem 0rem 5rem",
    },
    CreatorsAuthor: {
        display: " flex",
        alignItems: " center",
        padding: "2.5rem 3rem 0rem 5rem",
    },
    image: {
        borderRadius: "50%",
        margin: "0rem 1.125rem 0rem 0rem",
        width: "5.5rem",
        height: "5.5rem",
    },
    teamImage: {
        borderRadius: "50%",
        width: "2rem",
        height: "2rem",
        marginRight: "1rem",
    },

    CreatorsAuthorName: {
        fontSize: "1rem",
        color: colors,
        fontFamily: "Helvetica",
        lineHeight: "1.45rem",
    },
    CreatorsAuthorJobTitle: {
        fontSize: "0.875rem",
        color: colors.lighterGray,
        margin: "0.187rem 0 0.5rem 0",
    },
    CreatorsButton: {
        background: colors.lighterPrimary,
        fontSize: "1rem",
        color: colors.blackPrimary,
        border: " none",
        outline: "none",
        width: "5rem",
        height: "2rem",
    },
    bigTitle: {
        fontFamily: "Helvetica",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "2.5rem",
        lineHeight: "3.25rem",
        maxWidth: "29rem",
    },
    teamTitle: {
        fontFamily: "Helvetica",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "1.375rem",
        lineHeight: "2.125rem",
        marginBottom: "0.5rem",
    },
    info: {
        margin: "1rem 0",
        maxWidth: "100%",
        "@media(max-width:992px)": {
            // marginBottom: "1rem",
            marginTop: "1rem",
        },
    },
    infoTextHead: {
        fontSize: "1.375rem",
        color: colors.black,
    },
    infoText: {
        color: colors.black,
        margin: "0.1rem 0",
    },

    teamContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "0.5rem",

        // flexDirection: "column",
    },
    teamWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        flexDirection: "column",
        position: "relative",
    },
    positionText: {
        color: colors.lighterGray,
    },
    fitSizeImg: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    whiteBgImgFit: {
        width: "100%",
        height: "30.125rem",
        objectFit: "cover",
    },
    heading: {
        // font
    },
    contentWrapper: {
        padding: "8rem",
        color: colors.white,
        "& h3": {},
        "& p": {
            maxWidth: "27.25rem",
        },
    },
    contentWrapperWhiteBg: {
        padding: "8rem",
        color: colors.black,
        "& h3": {},
        "& p": {
            maxWidth: "27.25rem",
        },
    },
    darkBg: {
        backgroundColor: colors.black,
    },
    whiteBg: {
        backgroundColor: colors.white,
    },
    fullWidthContent: {
        color: colors.white,
        padding: "7.5rem 16.875rem",
    },
});

const Project = () => {
    const classes = useStyles();
    const [maxShow, setMaxShow] = useState(false);

    return (
        <Box className={classes.projectwrapper}>
            <HeaderWrapper isScrollDetect={false} />
            <img
                style={{ width: "100%", height: "30rem", marginTop: "5.375rem", objectFit: "cover" }}
                src={images.projectImage}
                alt=""
            />
            <Grid className={classes.CreatorsAuthor}>
                <Box>
                    <img className={classes.image} src={images.maskGroup} alt="maskGroup" />
                </Box>
                <Box>
                    <Typography className={classes.CreatorsAuthorName}>Brandon Landing</Typography>
                    <Typography className={classes.CreatorsAuthorJobTitle}>Director assistant</Typography>
                    <button className={classes.CreatorsButton}>follow</button>
                </Box>
            </Grid>
            <Grid container className={classes.profileWrapper}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Typography className={classes.bigTitle}>
                        SiR - Hair Down (Official Video) ft. Kendrick Lamar
                    </Typography>
                    <Grid container>
                        <Grid className={classes.info} xs={12} sm={12} md={6} lg={6}>
                            <Typography className={classes.infoTextHead}>Category:</Typography>
                            <Typography className={classnames(classes.underlineStyle, classes.infoText)}>
                                Directing
                            </Typography>
                            <Grid className={classes.info} item xs={12} sm={4} md={6} lg={6}>
                                <Typography className={classes.infoTextHead}>Client:</Typography>
                                <Typography className={classes.infoText}>SiR, Top Dog Entertainment</Typography>
                            </Grid>
                        </Grid>
                        <Grid className={classes.info} item xs={12} sm={4} md={6} lg={6}>
                            <Typography className={classes.infoTextHead}>Year</Typography>
                            <Typography className={classes.infoText}>2019</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} container className={classes.teamWrapper}>
                    <Typography className={classes.teamTitle}>Team</Typography>
                    {teamMemberData.slice(0, 5).map((item, i) => (
                        <UserProfileRow
                            key={i}
                            image={item.image}
                            name={item.memberName}
                            isDisable={item.isDisable}
                            position={item.position}
                            col1Size={6}
                            col2Size={6}
                        />
                    ))}
                    <Typography className={classes.activeMember} onClick={() => setMaxShow(true)}>
                        + 15 more members
                    </Typography>
                    {maxShow && (
                        <MoreMemberModel
                            onClose={() => setMaxShow(false)}
                            data={teamMemberData.slice(6, teamMemberData.length)}
                        />
                    )}
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <img src={images.maskGroup} className={classes.fitSizeImg} />
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8} className={classes.darkBg}>
                    <Box className={classes.contentWrapper}>
                        <Typography variant="h3">Making of</Typography>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.whiteBg}>
                    <Box className={classes.contentWrapperWhiteBg}>
                        <Typography variant="h3">Making of</Typography>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <img src={images.maskGroup} className={classes.whiteBgImgFit} />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.darkBg}>
                    <Box className={classes.fullWidthContent}>
                        <Typography variant="h3">Making of</Typography>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </Typography>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </Typography>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Slider/>
        </Box>
    );
};

Project.propTypes = {};

export default Project;
