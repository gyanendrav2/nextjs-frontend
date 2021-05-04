import React from "react"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { useRouter } from "next/router"
import { colors } from "../theme/colors"
import { HeaderWrapper } from "../components/header/headerWrapper"
import { images } from "../assets/images"
import { teamMemberData } from "../data/project"
import { Slider } from "../containers/project/slider"
import { SocialIcons } from "../containers/project/socialIcons"
import { Footer } from "../components/footer"
import { ReportContentWrapper } from "../components/reportContentWrapper/reportContentWrapper"
import { ImageGallery } from "../components/imageGallery/imageGallery"
import { VideoInfo } from "../containers/profile/videoInfo"
import { DarkBgText } from "../containers/profile/darkBgText"

const useStyles = makeStyles({
    projectwrapper: {
        backgroundColor: colors.white,
        paddingTop: "5rem",
        "@media (max-width:992px)": {
            paddingTop: "3.5rem",
        },
    },
    videoContainer: {
        width: "100%",
        paddingTop: "45%",
        height: 0,
        position: "relative",
    },
    videoStyles: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
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
        "@media (min-width:576px) and (max-width:992px)": {
            padding: "5rem 1rem 6rem 1rem!important",
        },
        "@media (max-width:575px)": {
            padding: "5rem 1rem 2.75rem 1rem!important",
        },
        "& h3": {
            fontFamily: "Forno-Trial",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "3.125rem",
            lineHeight: "3.625rem",
            marginBottom: "1.25rem",
            "@media(max-width:992px)": {
                maxWidth: "100%",
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
            "@media (max-width:992px)": {
                maxWidth: "100%",
            },
        },
    },
    contentWrapperWhiteBg: {
        padding: "8rem 10rem",
        color: colors.black,
        "@media (min-width:576px) and (max-width:992px)": {
            padding: "5rem 1rem 6rem 1rem!important",
        },
        "@media (max-width:575px)": {
            padding: "5rem 1rem 2.75rem 1rem!important",
        },
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
            "@media (max-width:992px)": {
                maxWidth: "100%",
            },
        },
    },

    darkBg: {
        backgroundColor: colors.black,
        width: "100%",
    },
    whiteBg: {
        backgroundColor: colors.white,
        // height: "37.187rem",
    },
    reportContentwrapper: {
        marginTop: "9.625rem",
        padding: "1rem",
    },
    footer: {
        marginTop: "0rem",
    },
})

const Project = () => {
    const classes = useStyles()
    const routes = useRouter()

    return (
        <>
            <HeaderWrapper isScrollDetect={false} />
            <Box className={classes.projectwrapper}>
                <Box className={classes.videoContainer}>
                    <Box className={classes.videoStyles}>
                        <iframe
                            title="Video"
                            height="100%"
                            width="100%"
                            src="https://www.youtube.com/embed/8aGhZQkoFbQ"
                        />
                    </Box>
                </Box>
                <Grid className={classes.CreatorsAuthor}>
                    <Box>
                        <img className={classes.image} src={images.maskGroup} alt="maskGroup" />
                    </Box>
                    <Box>
                        <Typography className={classes.CreatorsAuthorName} onClick={() => routes.push("/user")}>
                            Brandon Landing
                        </Typography>
                        <Typography className={classes.CreatorsAuthorJobTitle}>Director assistant</Typography>
                        <button type="button" className={classes.CreatorsButton}>
                            follow
                        </button>
                    </Box>
                </Grid>
                <VideoInfo teamMemberData={teamMemberData} />
                <Grid container>
                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                        <img src={images.hypebeast} className={classes.fitSizeImg} alt="" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={7} xl={7} className={classes.darkBg}>
                        <Box className={classes.contentWrapper}>
                            <Typography variant="h3">Making of</Typography>
                            <Typography>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.whiteBg}>
                        <Box className={classes.contentWrapperWhiteBg}>
                            <Typography variant="h3">Behind the scenes</Typography>
                            <Typography>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <img src={images.maskGroup} className={classes.whiteBgImgFit} alt="" />
                    </Grid>
                </Grid>
                <DarkBgText />
                <Slider />
                <ImageGallery />
                <SocialIcons />
                <ReportContentWrapper externalclass={classes.reportContentwrapper} />
                <Footer externalclass={classes.footer} />
            </Box>
        </>
    )
}

export default Project
