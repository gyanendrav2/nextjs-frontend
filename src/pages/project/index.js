/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react"
// import PropTypes from "prop-types";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import classnames from "classnames"
import { useRouter } from "next/router"
import ReactPlayer from "react-player"
import HeaderWrapper from "../../components/header/headerWrapper"
import { images } from "../../assets/images"
import { colors } from "../../theme/colors"
import { teamMemberData } from "../../data/project"
import UserProfileRow from "../../components/cards/userProfileRow"
import MoreMemberModel from "../../containers/project/moreMemberModel"
import Slider from "../../containers/project/slider"
import SocialIcons from "../../containers/project/socialIcons"
import Footer from "../../components/footer"
import ReportContentWrapper from "../../components/reportContentWrapper/reportContentWrapper"
import ImageGallery from "../../components/imageGallery/imageGallery"

const useStyles = makeStyles({
    projectwrapper: {
        backgroundColor: colors.white,
    },
    profileWrapper: {
        padding: "2.5rem 3rem 2.5rem 5rem",
        "@media (max-width:992px)": {
            padding: "2.5rem 3rem 0rem 2rem",
        },
    },

    CreatorsAuthor: {
        display: " flex",
        alignItems: " center",
        padding: "2.5rem 3rem 0rem 5rem",
        "@media (max-width:992px)": {
            padding: "2.5rem 3rem 0rem 2rem",
        },
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
        cursor: "pointer",
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
    },
    teamWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        position: "relative",
    },
    activeMember: {
        cursor: "pointer",
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
        height: "100%",
        objectFit: "cover",
    },
    contentWrapper: {
        padding: "8rem",
        color: colors.white,
        "& h3": {
            fontFamily: "Forno-Trial",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "3.125rem",
            lineHeight: "3.625rem",
            marginBottom: "1.25rem",
            "@media(max-width:992px)": {
                maxWidth: "27.25rem",
                fontSize: "2.5rem",
                lineHeight: "3rem",
                marginBottom: "0.7rem",
            },
        },
        "& p": {
            maxWidth: "27.25rem",
            fontFamily: "Helvetica",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "1rem",
            lineHeight: "2rem",
        },
        "@media (max-width:992px)": {
            padding: "8rem",
            paddingLeft: "2rem",
        },
    },
    contentWrapperWhiteBg: {
        padding: "8rem",
        color: colors.black,
        "& h3": {
            fontFamily: "Forno-Trial",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "3.125rem",
            lineHeight: "3.625rem",
            marginBottom: "1.25rem",
            "@media(max-width:992px)": {
                maxWidth: "27.25rem",
                fontSize: "2.5rem",
                lineHeight: "3rem",
                marginBottom: "0.7rem",
            },
        },
        "& p": {
            maxWidth: "27.25rem",
            fontFamily: "Helvetica",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "1rem",
            lineHeight: "2rem",
        },
        "@media (max-width:992px)": {
            padding: "8rem",
            paddingLeft: "2rem",
        },
    },
    fulldarkBg: {
        backgroundColor: colors.black,
        height: "100%",
        width: "100%",
    },
    fullWidthContent: {
        color: colors.white,
        paddingLeft: "16.875rem",
        paddingRight: "16.875rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        "& h3": {
            textAlign: "center",
            fontFamily: "Forno-Trial",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "3.125rem",
            lineHeight: "3.625rem",
            marginBottom: "2.5rem",
            marginTop: "7.5rem",
            "@media(max-width:992px)": {
                textAlign: "center",
                maxWidth: "27.25rem",
                fontSize: "2.5rem",
                lineHeight: "3rem",
                marginBottom: "0.7rem",
            },
        },
        "& p": {
            maxWidth: "27.25rem",
            fontFamily: "Helvetica",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "1rem",
            lineHeight: "2rem",
            marginBottom: "2rem",
        },
        "@media (max-width:992px)": {
            padding: "8rem",
            paddingLeft: "2rem",
        },
    },
    darkBg: {
        backgroundColor: colors.black,
        height: "45.375rem",
        width: "100%",
    },
    whiteBg: {
        backgroundColor: colors.white,
        height: "37.187rem",
    },
    paragraphContent: {
        paddingBotton: "5rem",
        marginBottom: "5rem",
    },
    paragaphStyles: {
        marginBottom: "2rem",
    },
    reportContentwrapper: {
        marginTop: "9.625rem",
        marginBottom: "-2rem",
    },
    footer: {
        marginTop: "0rem",
    },
})

const Project = () => {
    const classes = useStyles()
    const [maxShow, setMaxShow] = useState(false)
    const routes = useRouter()

    return (
        <Box className={classes.projectwrapper}>
            <HeaderWrapper isScrollDetect={false} />
            <ReactPlayer
                width="100%"
                height="30rem"
                controls
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
            <Grid className={classes.CreatorsAuthor}>
                <Box>
                    <img className={classes.image} src={images.maskGroup} alt="maskGroup" />
                </Box>
                <Box>
                    <Typography
                        className={classes.CreatorsAuthorName}
                        onClick={() => routes.push("/profile")}>
                        Brandon Landing
                    </Typography>
                    <Typography className={classes.CreatorsAuthorJobTitle}>
                        Director assistant
                    </Typography>
                    <button type="button" className={classes.CreatorsButton}>follow</button>
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
                            <Typography
                                className={classnames(classes.underlineStyle, classes.infoText)}>
                                Directing
                            </Typography>
                            <Grid className={classes.info} item xs={12} sm={4} md={6} lg={6}>
                                <Typography className={classes.infoTextHead}>Client:</Typography>
                                <Typography className={classes.infoText}>
                                    SiR, Top Dog Entertainment
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid className={classes.info} item xs={12} sm={4} md={6} lg={6}>
                            <Typography className={classes.infoTextHead}>Year</Typography>
                            <Typography className={classes.infoText}>2019</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                    container
                    className={classes.teamWrapper}>
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
                <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                    <img src={images.hypebeast} className={classes.fitSizeImg} alt="" />
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7} xl={7} className={classes.darkBg}>
                    <Box className={classes.contentWrapper}>
                        <Typography variant="h3">Making of</Typography>
                        <Typography variant="p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.whiteBg}>
                    <Box className={classes.contentWrapperWhiteBg}>
                        <Typography variant="h3">Behind the scenes</Typography>
                        <Typography variant="p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <img src={images.maskGroup} className={classes.whiteBgImgFit} alt="" />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.fulldarkBg}>
                    <Box className={classes.fullWidthContent}>
                        <Typography variant="h3">The writing itself</Typography>
                        <Box className={classes.paragraphContent}>
                            <Typography variant="p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not
                                only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus
                                PageMaker including versions of Lorem Ipsum.
                            </Typography>
                            <br />
                            <br />
                            <Typography variant="p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not
                                only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus
                                PageMaker including versions of Lorem Ipsum.
                            </Typography>
                            <br />
                            <br />
                            <Typography variant="p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not
                                only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus
                                PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Slider />
            <ImageGallery />
            <SocialIcons />
            <ReportContentWrapper exteranlclass={classes.reportContentwrapper} />
            <Footer exteranlclass={classes.footer} />
        </Box>
    )
}

Project.propTypes = {}

export default Project
