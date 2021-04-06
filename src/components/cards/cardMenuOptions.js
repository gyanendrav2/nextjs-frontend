import React, { useState } from "react"
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
    },
    option: {
        marginBottom: "1.5rem",
        userSelect: "none",
        "&:hover": {
            color: colors.pink,
        },
    },
})

export const CardMenuOptions = ({ onEdit, onHide, onShare }) => {
    const classes = useStyles()
    const [showShare, setShowShare] = useState(false)

    return (
        <Box className={classes.wrapper}>
            <Typography className={classes.option} onClick={onEdit}>
                Edit
            </Typography>
            <Typography className={classes.option} onClick={onHide}>
                Hide
            </Typography>
            <Typography className={classes.option} onClick={() => setShowShare(!showShare)}>
                Share
            </Typography>
            {showShare && <ShareInfo />}
        </Box>
    )
}

CardMenuOptions.defaultProps = {
    onEdit: () => {},
    onHide: () => {},
    onShare: () => {},
}

CardMenuOptions.propTypes = {
    onEdit: PropTypes.func,
    onHide: PropTypes.func,
    onShare: PropTypes.func,
}
