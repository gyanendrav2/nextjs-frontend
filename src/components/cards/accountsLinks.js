import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { Grid, makeStyles } from "@material-ui/core"
import { colors } from "../../theme/colors"
import { CustomButton } from "../buttons/customButton"

const useStyles = makeStyles({
    wrapper: {
        borderBottom: `1px solid ${colors.lightGray}`,
        paddingBottom: "0.4rem",
        paddingTop: "0.4rem",
    },
    icon: {
        backgroundColor: colors.lightGray,
        borderRadius: "50%",
        width: "2.5rem",
        height: "2.5rem",
    },
    button: {
        height: "2.5rem",
        padding: "0.562rem 1rem",
        backgroundColor: colors.lightGray,
        color: colors.black,
    },
})

export const AccountsLinks = ({ icon, onClick, externalclass }) => {
    const classes = useStyles()
    return (
        <Grid container alignItems="center" justify="space-between" className={classes.wrapper}>
            <img alt="youtube" src={icon} className={classnames(classes.icon, externalclass)} />
            <CustomButton label="Add a link" externalclass={classes.button} onClick={onClick} />
        </Grid>
    )
}

AccountsLinks.defaultProps = {
    icon: "",
    externalclass: "",
}

AccountsLinks.propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    externalclass: PropTypes.string,
}
