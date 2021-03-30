import React from "react"
// import PropTypes from "prop-types"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { SocialButtons } from "../buttons/socialButtons"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        position: "absolute",
        top: "3rem",
        right: 0,
        backgroundColor: colors.white,
        width: "18.312rem",
        padding: "1rem",
        background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF",
        boxShadow: "0px 4px 100px rgba(0, 0, 0, 0.25)",
    },
    shareText: {
        fontWeight: "normal",
        fontSize: "1rem",
        lineHeight: "1.375rem",
        color: colors.black,
        marginBottom: "1rem",
    },
    copylink: {
        fontWeight: "bold",
        fontSize: "0.875rem",
        lineHeight: "1rem",
        color: colors.lighterGray,
        marginBottom: "1rem",
    },
    link: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    copyButton: {
        textDecoration: "underline",
        cursor: "pointer",
        paddingTop: "1rem",
        float: "right",
        color: colors.black,
        fontSize: "1rem",
    },
})

const ShareCard = () => {
    const classes = useStyles()
    const handleCopyLink = () => {
        const text = "https://www.pxl.net/galleries-project"
        navigator.clipboard.writeText(text).then()
    }
    return (
        <Box className={classes.wrapper}>
            <Typography className={classes.shareText}>Share</Typography>
            <SocialButtons />
            <Typography className={classes.copylink}>Copy Link</Typography>
            <Typography className={classes.link}>https://www.pxl.net/galleries-project</Typography>
            <Box>
                <Typography className={classes.copyButton} onClick={handleCopyLink}>
                    Copy
                </Typography>
            </Box>
        </Box>
    )
}

ShareCard.propTypes = {}

export default ShareCard
