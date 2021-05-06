import { Box, Grid, makeStyles } from "@material-ui/core"
import React from "react"
import { images } from "../assets/images"
// import { UserProfileCard } from "../components/cards/userProfileCard"
import { ContentWrapper } from "../components/contentWrapper/contentWrapper"
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
                        <FeedProfileCard following="15" followers="25" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                        <FeedUserProfileCard
                            image={images.maskGroup}
                            name="Mary Tooper"
                            position="Animator assistant"
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
