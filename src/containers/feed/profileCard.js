import { Avatar, Box, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { images } from "../../assets/images"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        border: `1px solid ${colors.lightGray}`,
        backgroundColor: colors.white,
        padding: "2rem",
    },
    avatar: {
        width: "6.5rem",
        height: "6.5rem",
        margin: "auto",
    },
    title: {
        fontWeight: 400,
        fontSize: "1.375rem",
        color: colors.black,
        textAlign: "center",
        marginTop: "1rem",
    },
    subTitle: {
        fontWeight: 400,
        fontSize: "1",
        color: colors.lighterGray,
        textAlign: "center",
        marginBottom: "1rem",
    },
})

export const ProfileCard = () => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <Avatar src={images.masorny1} className={classes.avatar} />
            <Typography className={classes.title}>Brandon Landing</Typography>
            <Typography className={classes.subTitle}>Director assistant, producer</Typography>
        </Box>
    )
}
