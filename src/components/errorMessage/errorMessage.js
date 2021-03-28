import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    errorStyles: {
        fontSize: "0.875rem",
        color: colors.red,
        marginTop: "0.5rem",
    },
})

export const ErrorMessage = ({ error }) => {
    const classes = useStyles()
    return <p className={classes.errorStyles}>{error}</p>
}

ErrorMessage.defaultProps = {
    error: undefined,
}

ErrorMessage.propTypes = {
    error: PropTypes.string,
}
