import React from "react"
import PropTypes from "prop-types"
import { Grid, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
    wrapper: {
        cursor: "pointer",
    },
    buttonName: {
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
    },
})

export const SliderButton = ({ buttonIcon, buttonName, flexDirection, onClick }) => {
    const classes = useStyles()
    return (
        <Grid
            container
            alignItems="center"
            justify="space-between"
            direction={flexDirection}
            onClick={onClick}
            className={classes.wrapper}>
            <Typography className={classes.buttonName}> {buttonName}</Typography>
            {buttonIcon}
        </Grid>
    )
}

SliderButton.propTypes = {
    buttonIcon: PropTypes.element.isRequired,
    buttonName: PropTypes.string.isRequired,
    flexDirection: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}
