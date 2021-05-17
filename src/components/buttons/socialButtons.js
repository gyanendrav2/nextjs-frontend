import React from "react"
import classnames from "classnames"
import PropTypes from "prop-types"
import { Grid, makeStyles } from "@material-ui/core"
import { icons } from "../../assets/icons"

const useStyles = makeStyles({
    buttonContainer: {
        marginBottom: "2.437rem",
        "& button": {
            marginRight: "1rem",
        },
    },
    socialButton: {
        minWidth: "2.5rem",
        marginRight: "1rem",
        "@media(max-width:360px)": {
            marginBottom: "0rem",
        },
    },
})

export const SocialButtons = ({ externalclass }) => {
    const classes = useStyles()
    return (
        <Grid container alignItems="center" justify="flex-start" className={classes.buttonContainer}>
            <img alt="youtube" src={icons.youtube} className={classnames(classes.socialButton, externalclass)} />
            <img alt="vimeo" src={icons.vimeo} className={classnames(classes.socialButton, externalclass)} />
            <img alt="instagram" src={icons.instagram} className={classnames(classes.socialButton, externalclass)} />
            <img alt="linkedin" src={icons.linkedinBlack} className={classes.socialButton} />
        </Grid>
    )
}

SocialButtons.defaultProps = {
    externalclass: "",
}
SocialButtons.propTypes = {
    externalclass: PropTypes.string,
}
