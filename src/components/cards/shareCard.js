import React from "react"
import PropTypes from "prop-types"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { colors } from "../../theme/colors"
import { ShareInfo } from "./shareInfo"

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
        zIndex:3,
        "@media(max-width:1024px)":{
            width: "19.375rem",
        },
        "@media(max-width:767px)":{
            width: "18.937rem",
        }
    },
    shareText: {
        fontWeight: "normal",
        fontSize: "1rem",
        lineHeight: "1.375rem",
        color: colors.black,
        marginBottom: "1rem",
    },
})

export const ShareCard = ({ onLinkCopied }) => {
    const classes = useStyles()

    const handleCopyLink = () => {
        const text = "https://www.pxl.net/galleries-project"
        window.navigator.clipboard.writeText(text).then()
        onLinkCopied()
    }

    return (
        <Box className={classes.wrapper}>
            <Typography className={classes.shareText}>Share</Typography>
            <ShareInfo handleCopyLink={handleCopyLink} />
        </Box>
    )
}

ShareCard.defaultProps = {
    onLinkCopied: () => {},
}

ShareCard.propTypes = {
    onLinkCopied: PropTypes.func,
}