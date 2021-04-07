import { Box, makeStyles, Typography } from "@material-ui/core"
import PropTypes from "prop-types"
import React from "react"
import { colors } from "../../theme/colors"
import { SocialButtons } from "../buttons/socialButtons"

const useStyles = makeStyles({
    copylink: {
        fontWeight: "bold",
        fontSize: "0.875rem",
        lineHeight: "1rem",
        color: colors.lighterGray,
        marginBottom: "1rem",
        marginTop: "2rem",
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
    socialbtnStyles: {
        marginRight: "1rem",
    },
    hrtag: {
        borderTop: `1px solid ${colors.lightGray}`,
    },
})

export const ShareInfo = ({ handleCopyLink }) => {
    const classes = useStyles()
    return (
        <>
            <SocialButtons externalclass={classes.socialbtnStyles} />
            <Typography className={classes.copylink}>Copy Link</Typography>
            <Typography className={classes.link}>https://www.pxl.net/galleries-project</Typography>
            <hr className={classes.hrtag} />
            <Box>
                <Typography className={classes.copyButton} onClick={handleCopyLink}>
                    Copy
                </Typography>
            </Box>
        </>
    )
}

ShareInfo.propTypes = {
    handleCopyLink: PropTypes.func.isRequired,
}
