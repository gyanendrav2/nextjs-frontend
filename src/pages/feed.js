import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { useRouter } from "next/router"
import React from "react"
import { images } from "../assets/images"
// import { UserProfileCard } from "../components/cards/userProfileCard"
import { ContentWrapper } from "../components/contentWrapper/contentWrapper"
import { SeenIcon } from "../components/icons/seenIcon"
import { HeaderWrapper } from "../components/header/headerWrapper"
import { FeedProfileCard } from "../containers/feed/feedProfileCard"
import { FeedUserProfileCard } from "../containers/feed/feedUserProfileCard"
import { colors } from "../theme/colors"

const useStyles = makeStyles({
    rootWraper: {
        backgroundColor: colors.lighterPrimary,
    },
    wrapper: {
        maxWidth: "70rem",
        paddingTop: "8rem",
        margin: "auto",
        backgroundColor: colors.lighterPrimary,
    },
    seenContainer: {
        display: "block",
        textAlign: "center",
        margin: "4rem auto",
    },
    seenText: {},
})

const Feed = () => {
    const classes = useStyles()
    const routes = useRouter()
    return (
        <Box className={classes.rootWraper}>
            <HeaderWrapper isScrollDetect={false} isAuthenticated feed />
            <ContentWrapper externalclass={classes.wrapper}>
                <Grid container spacing={2}>
                    <Grid style={{ position: "relative" }} item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <FeedProfileCard
                            following="15"
                            followers="25"
                            onFollowClick={() => routes.push({ pathname: "/network", query: { tab: "following" } })}
                            onFollowedClick={() => routes.push({ pathname: "/network", query: { tab: "followers" } })}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                        <FeedUserProfileCard
                            image={images.girlImage}
                            name="Mary Tooper"
                            position="Animator assistant"
                            category="Animation"
                            client="Nike"
                            year="2021"
                            time="09.10.20"
                            description="Nike “Beginnings” commercial about key moments in James’ path"
                        />
                        <FeedUserProfileCard
                            image={images.simon}
                            name="Simon Bowell"
                            position="Photographer"
                            category="Photography"
                            client="NBA"
                            year="2020"
                            time="09.10.20"
                            description="LeBron James charity event photography for childrens’ hospital"
                        />
                        <Box className={classes.seenContainer}>
                            <SeenIcon />
                            <Typography className={classes.seenText}> You’ve seen the most recent posts</Typography>
                        </Box>
                        <FeedUserProfileCard
                            image={images.mike}
                            name="Mary Tooper"
                            position="Animator assistant"
                            category="Animation"
                            client="Nike"
                            year="2021"
                            time="09.10.20"
                            description="Nike “Beginnings” commercial about key moments in James’ path"
                        />
                        <FeedUserProfileCard
                            image={images.sarah}
                            name="Mary Tooper"
                            position="Animator assistant"
                            category="Animation"
                            client="Nike"
                            year="2021"
                            time="09.10.20"
                            description="Nike “Beginnings” commercial about key moments in James’ path"
                        />
                        {/* <UserProfileCard
                                // onClickProfile={handleInfo}
                                // onMsgBtnClick={handleMsg}
                                image={images.maskGroup}
                                name="Brandon Landing"
                                userName="@veritas_z"
                                followers="15"
                                following="20"
                                position="Director assistant, producer"
                                location="USA, Ohio"
                                bio="I’m this awesome and cool as hell director from the states. Producing is my other passion.This is additional text, this is additional text,this is additional text,this is additional text,this is additional text,this is additional text "
                                // externalclass={classes.userProfilecardStyles}
                                ownProfile
                            /> */}
                    </Grid>
                </Grid>
            </ContentWrapper>
        </Box>
    )
}

export default Feed
