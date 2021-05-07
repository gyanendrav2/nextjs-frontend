import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { useRouter } from "next/router"
import React from "react"
import { ContentWrapper } from "../components/contentWrapper/contentWrapper"
import { SeenIcon } from "../components/icons/seenIcon"
import { HeaderWrapper } from "../components/header/headerWrapper"
import { FeedProfileCard } from "../containers/feed/feedProfileCard"
import { FeedUserProfileCard } from "../containers/feed/feedUserProfileCard"
import { colors } from "../theme/colors"
import { feedRecentData, feedOldData } from "../data/feedData"

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
    console.log("feedRecentData", feedRecentData)
    return (
        <Box className={classes.rootWraper}>
            <HeaderWrapper isScrollDetect={false} isAuthenticated feed />
            <ContentWrapper externalclass={classes.wrapper}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} style={{ position: "relative" }}>
                        <FeedProfileCard
                            following="15"
                            followers="25"
                            onFollowClick={() => routes.push({ pathname: "/network", query: { tab: "following" } })}
                            onFollowedClick={() => routes.push({ pathname: "/network", query: { tab: "followers" } })}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                        {
                            feedRecentData.map((item)=>(
                                <FeedUserProfileCard
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
                            ))
                        }
                       
                        <Box className={classes.seenContainer}>
                            <SeenIcon />
                            <Typography className={classes.seenText}> You’ve seen the most recent posts</Typography>
                        </Box>
                        {
                            feedOldData.map((item)=>(
                        <FeedUserProfileCard
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
                        ))
                    }
                     </Grid>
                </Grid>
            </ContentWrapper>
        </Box>
    )
}

export default Feed
