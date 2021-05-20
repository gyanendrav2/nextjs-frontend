import React from "react"
import PropTypes from "prop-types"
import { Grid, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
    wrapper: {
        cursor: "pointer",
        opacity: (props) => (props.disabledButton ? 0.3 : 1),
    },
    buttonName: {
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        "@media(max-width:767px)": {
            paddingLeft: "1rem",
            paddingRight: "1rem",
        },
    },
})

export const SliderButton = ({ buttonIcon, buttonName, flexDirection, onClick, disabledButton }) => {
    const classes = useStyles({ disabledButton })
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
    disabledButton: PropTypes.bool.isRequired,
}
