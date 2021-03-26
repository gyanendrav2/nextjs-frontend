import React from "react"
// import PropTypes from "prop-types";
import { Grid, makeStyles } from "@material-ui/core"
import { icons } from "../../assets/icons"

const useStyles = makeStyles({
    buttonContainer: {
        marginBottom: "1rem",
        "& button": {
            marginRight: "1rem",
        },
    },
    socialButton: {
        minWidth: "2.5rem",
        minHeight: "2.5rem",
        marginBottom: "1rem",
        marginRight: "2rem",
        "@media(max-width:360px)": {
            marginRight: "0.5rem",
        },
    },
})

const SocialButtons = () => {
    const classes = useStyles()
    return (
        <Grid container alignItems="center" justify="flex-start" className={classes.buttonContainer}>
            <img alt="youtube" src={icons.youtube} className={classes.socialButton} />
            <img alt="vimeo" src={icons.vimeo} className={classes.socialButton} />
            <img alt="instagram" src={icons.instagram} className={classes.socialButton} />
            <img alt="linkedin" src={icons.linkedin} className={classes.socialButton} />
        </Grid>
    )
}

SocialButtons.propTypes = {}

export default SocialButtons
