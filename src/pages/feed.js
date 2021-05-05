import { Box, Grid, makeStyles } from "@material-ui/core"
import React from "react"
import { ContentWrapper } from "../components/contentWrapper/contentWrapper"
import { HeaderWrapper } from "../components/header/headerWrapper"
import { ProfileCard } from "../containers/feed/profileCard"
import { colors } from "../theme/colors"

const useStyles = makeStyles({
    rootWraper: {
        backgroundColor: colors.lighterPrimary,
    },
    wrapper: {
        maxWidth: "70rem",
        paddingTop: "10rem",
        margin: "auto",
        backgroundColor: colors.lighterPrimary,
    },
})

const Feed = () => {
    const classes = useStyles()
    return (
        <Box className={classes.rootWraper}>
            <HeaderWrapper isScrollDetect={false} isAuthenticated feed />
            <ContentWrapper externalclass={classes.wrapper}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <ProfileCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                        Card item
                    </Grid>
                </Grid>
            </ContentWrapper>
        </Box>
    )
}

export default Feed
