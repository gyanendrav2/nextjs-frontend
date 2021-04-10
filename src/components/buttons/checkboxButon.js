import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    container: {
        display: "block",
        position: "relative",
        cursor: "pointer",
        fontSize: "2rem",
    },
})

export const CheckboxButton = ({ labelText }) => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            {labelText}
            <input className={classes.inputStyles} type="checkbox" checked="checked" />
            <span className="checkmark" />
        </div>
    )
}
CheckboxButton.defaultProps = {
    labelText: " ",
}
CheckboxButton.propTypes = {
    labelText: PropTypes.string,
}
