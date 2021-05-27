import React, { useState } from "react"
import PropTypes from "prop-types"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { colors } from "../../theme/colors"
import { ShareInfo } from "./shareInfo"
import { ArrowDownIcon } from "../icons/arrowDownIcon"
import { ArrowUpIcon } from "../icons/arrowUpIcon"

const useStyles = makeStyles({
    wrapper: {
        position: "absolute",
        top: "3.812rem",
        right: "1.031rem",
        backgroundColor: colors.white,
        width: "18.312rem",
        padding: "1rem",
        background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF",
        boxShadow: "0px 4px 100px rgba(0, 0, 0, 0.25)",
        zIndex: 21,
    },
    option: {
        marginBottom: "1.5rem",
        userSelect: "none",
        "&:hover": {
            color: colors.pink,
        },
    },
    arrowIcon: {
        height: "5px",
        width: "8px",
        marginLeft: "0.5rem",
        marginBottom: "0.1rem",
    },
})

export const CardMenuOptions = ({ onEdit, onHide, hiddenCategory, onLinkCopied }) => {
    const classes = useStyles()
    const [showShare, setShowShare] = useState(false)

    return (
        <Box className={classes.wrapper}>
            <Typography className={classes.option} onClick={onEdit}>
                Edit
            </Typography>
            {!hiddenCategory ? (
                <Typography className={classes.option} onClick={onHide}>
                    Hide
                </Typography>
            ) : (
                <Typography className={classes.option} onClick={onHide}>
                    unhide
                </Typography>
            )}

            <Typography className={classes.option} onClick={() => setShowShare(!showShare)}>
                Share
                {!showShare ? (
                    <ArrowDownIcon className={classes.arrowIcon} />
                ) : (
                    <ArrowUpIcon className={classes.arrowIcon} />
                )}
            </Typography>

            {showShare && <ShareInfo handleCopyLink={onLinkCopied} />}
        </Box>
    )
}

CardMenuOptions.defaultProps = {
    onEdit: () => {},
    onHide: () => {},
    hiddenCategory: false,
}

CardMenuOptions.propTypes = {
    onEdit: PropTypes.func,
    onHide: PropTypes.func,
    hiddenCategory: PropTypes.bool,
    onLinkCopied: PropTypes.func.isRequired,
}
