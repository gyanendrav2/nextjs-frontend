import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { useRouter } from "next/router"
import React from "react"
import ContentWrapper from "../components/contentWrapper/contentWrapper"
import { SeenIcon } from "../components/icons/seenIcon"
import HeaderWrapper from "../components/header/headerWrapper"
import { FeedProfileCard } from "../containers/feed/feedProfileCard"
import { FeedUserProfileCard } from "../containers/feed/feedUserProfileCard"
import { colors } from "../theme/colors"
import { feedRecentData, feedOldData } from "../data/feedData"
import Footer from "../components/footer"

const useStyles = makeStyles({
    rootWraper: {
        backgroundColor: colors.lighterPrimary,
    },
    wrapper: {
        maxWidth: "70rem",
        paddingTop: "8rem",
        margin: "auto",
        backgroundColor: colors.lighterPrimary,
        "@media(max-width:1024px)": {
            paddingTop: "7.5rem",
        },
        "@media(max-width:767px)": {
            paddingTop: "5.812rem",
        },
    },
    seenContainer: {
        display: "block",
        textAlign: "center",
        margin: "4rem auto",
    },
    seenText: {
        color: colors.black,
    },
    seenIcon: {
        "@media(max-width:767px)": {
            marginBottom: "1rem",
        },
    },
})

const Feed = () => {
    const classes = useStyles()
    const routes = useRouter()
    return (
        <Box className={classes.rootWraper}>
            <HeaderWrapper isScrollDetect={false} isAuthenticated feed />
            <ContentWrapper externalclass={classes.wrapper}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4} style={{ position: "relative" }}>
                        <FeedProfileCard
                            following={15}
                            followers={25}
                            onFollowClick={() => routes.push({ pathname: "/network", query: { tab: "following" } })}
                            onFollowedClick={() => routes.push({ pathname: "/network", query: { tab: "followers" } })}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                        {feedRecentData.map((item, i) => (
                            <FeedUserProfileCard
                                key={i}
                                image={item.image}
                                name={item.name}
                                icon={item.icon}
                                position={item.position}
                                category={item.category}
                                client={item.client}
                                year={item.year}
                                time={item.time}
                                description={item.description}
                            />
                        ))}

                        <Box className={classes.seenContainer}>
                            <SeenIcon className={classes.seenIcon} />
                            <Typography className={classes.seenText}> You’ve seen the most recent posts</Typography>
                        </Box>
                        {feedOldData.map((item, i) => (
                            <FeedUserProfileCard
                                key={i}
                                image={item.image}
                                name={item.name}
                                icon={item.icon}
                                position={item.position}
                                category={item.category}
                                client={item.client}
                                year={item.year}
                                time={item.time}
                                description={item.description}
                                showfollowbtndrowdown
                            />
                        ))}
                    </Grid>
                </Grid>
            </ContentWrapper>
            <Footer />
        </Box>
    )
}

export default Feed
