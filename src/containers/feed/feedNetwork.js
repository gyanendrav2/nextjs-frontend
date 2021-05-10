import { Box, makeStyles, Typography } from "@material-ui/core"
import React, { useState } from "react"
import { images } from "../../assets/images"
// import { images } from "../../assets/images"
import { colors } from "../../theme/colors"
import { FeedFollowerCard } from "./feedFollowerCard"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.white,
        paddingTop: "10rem",
        margin: "auto",
        textAlign: "center",
    },
    title: {
        fontFamily: " Forno-Trial",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "50px",
        lineHeight: "58px",
        color: colors.black,
    },
})

export const FeedNetwork = () => {
    const classes = useStyles()

    const data = useState([
        {
            id: 0,
            image: images.girlImage,
            projectImage: images.projectImage1,
            title: "Brandon Landing",
            position: "Director assistant",
        },
        {
            id: 1,
            image: images.mike,
            projectImage: images.projectImage2,
            title: "mike",
            position: "Director assistant",
        },
        {
            id: 2,
            image: images.sarah,
            projectImage: images.projectImage3,
            title: "sarah",
            position: "Director assistant",
        },
        {
            id: 3,
            image: images.girlImage,
            projectImage: images.projectImage4,
            title: "Brandon Landing",
            position: "Director assistant",
        },
        {
            id: 4,
            image: images.girlImage,
            projectImage: images.projectImage1,
            title: "Brandon Landing",
            position: "Director assistant",
        },
        {
            id: 5,
            image: images.girlImage,
            projectImage: images.projectImage2,
            title: "Brandon Landing",
            position: "Director assistant",
        },
    ])

    return (
        <>
            <Box className={classes.wrapper}>
                <Typography className={classes.title}>Network</Typography>
                <Box>
                    <FeedFollowerCard data={data} />
                </Box>
            </Box>
        </>
    )
}
