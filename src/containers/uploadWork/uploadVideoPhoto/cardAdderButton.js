import React, { useState } from "react"
import PropTypes from "prop-types"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { AddCircleIcon } from "../../../components/icons/addCircleIcon"
import { colors } from "../../../theme/colors"

const useStyles = makeStyles({
    btnWrapper: {
        position: "relative",
    },
    cardWrapper: {
        boxShadow: "0 0 10px 1px rgba(0,0,0,0.2)",
        position: "absolute",
        top: "3rem",
        right: 0,
        width: "10rem",
        padding: "1rem",
        backgroundColor: colors.white,
        borderRadius: "0.2rem",
    },
    title: {
        fontSize: "0.9rem",
    },
    fixed: {
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        height: "100vh",
    },
})

export const CardAdderButton = ({ onClick }) => {
    const classes = useStyles()
    const [showCard, setShowCard] = useState(false)
    return (
        <Box className={classes.btnWrapper}>
            <AddCircleIcon onClick={() => setShowCard(!showCard)} />
            {showCard && (
                <>
                    <Grid container alignItems="center" justify="space-between" className={classes.cardWrapper}>
                        <Typography className={classes.title}>Image Left</Typography>
                        <Typography className={classes.title}>Image Right</Typography>
                        <Typography className={classes.title}>Image Code Text</Typography>
                    </Grid>
                    <Box className={classes.fixed} />
                </>
            )}
        </Box>
    )
}

CardAdderButton.propTypes = {
    onClick: PropTypes.func.isRequired,
}
