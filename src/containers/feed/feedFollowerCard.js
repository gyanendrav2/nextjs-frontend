import React from "react"
import { Box, Grid, makeStyles } from "@material-ui/core"
// import PropTypes from "prop-types"
import { colors } from "../../theme/colors"
import { CardWithHeader } from "../../components/cards/cardWithHeader"

const useStyles = makeStyles({
    FollowCard: {
        display: "flex",
        flexWrap: "wrap",
        marginTop: "1.5rem",
    },
    Container: {
        boxShadow: `0px 1px 1px ${colors.lightGray}`,
        display: "flex",
        flexDirection: "column",
        height: "100%",
    },
    CreatorsAuthor: {
        display: " flex;",
        alignItems: " center;",
        border: "1px solid rgba(0, 0, 0, 0.05);",
        padding: "0.5rem",
        height: "100%",
    },
    image: {
        borderRadius: "50%",
        margin: "0rem 1.125rem 0rem 1rem",
        width: "5.5rem",
        height: "5.5rem",
    },
    CreatorsAuthorName: {
        fontSize: "1rem",
        color: colors.blackPrimary,
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
    image_container: {
        width: "100%",
        height: "11.25rem",
    },
    image_: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
})

// eslint-disable-next-line react/prop-types
export const FeedFollowerCard = ({ data }) => {
    const classes = useStyles()
    return (
        <Box className={classes.FollowCard}>
            <Grid container spacing={2}>
                {data &&
                    // eslint-disable-next-line react/prop-types
                    data.map((item, i) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                                <CardWithHeader
                                    image={item.image}
                                    feedProjectImage={item.projectImage}
                                    title={item.name}
                                    subTitle={item.jobTitle}
                                    buttonText="Following"
                                    isFeedPage
                                />
                            </Grid>
                        )
                    })}
            </Grid>
        </Box>
    )
}

FeedFollowerCard.defaultProps = {
    // image: "",
    // name: "",
    // jobTitle: "",
}

FeedFollowerCard.propTypes = {
    // image: PropTypes.string,
    // name: PropTypes.string,
    // jobTitle: PropTypes.string,
    // data: PropTypes.any,
}
