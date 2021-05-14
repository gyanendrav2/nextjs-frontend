import React from "react"
// import PropTypes from "prop-types"
import { Box, makeStyles } from "@material-ui/core"
import Link from "next/link"
import classnames from "classnames"
import { icons } from "../../assets/icons"

const useStyles = makeStyles({
    iconContainer: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        margin: "3.562rem auto",
    },
    Images: {
        height: "2.25rem",
        width: "2.25rem",
        marginRight: "1.5rem",
    },
})

const SocialIcons = () => {
    const classes = useStyles()
    return (
        <Box className={classes.iconContainer}>
            <Link href="/">
                <img className={classnames(classes.itemPadding, classes.Images)} alt="fb" src={icons.fbBlack} />
            </Link>
            <Link href="/">
                <img
                    className={classnames(classes.itemPadding, classes.Images)}
                    alt="twitter"
                    src={icons.twitterBlack}
                />
            </Link>
            <Link href="/">
                <img
                    className={classnames(classes.itemPadding, classes.Images)}
                    alt="Linked In"
                    src={icons.linkedinBlack}
                />
            </Link>
        </Box>
    )
}

SocialIcons.propTypes = {}

export default SocialIcons
