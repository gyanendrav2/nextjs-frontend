import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { Grid, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    wrapper: {
        width: "100%",
    },
    col1: {
        width: "27.5rem",
        "@media (min-width:768px) and (max-width: 1024px)": {
            width: "100%",
        },
        "@media (min-width:200px) and (max-width:767px)": {
            width: "100%",
        },
    },

    col2: {
        width: "calc(100% - 27.5rem)",
        "@media (min-width:200px) and (max-width:767px)": {
            width: "100%",
        },
        "@media (min-width:768px) and (max-width: 1024px)": {
            width: "100%",
        },
    },
})

const TwoColGrid = ({ col1Children, col2Children, externalclass }) => {
    const classes = useStyles()
    return (
        <Grid container display="flex" spacing={2} className={classnames(classes.wrapper, externalclass)}>
            <Grid item className={classnames(classes.col1, externalclass)}>
                {col1Children}
            </Grid>
            <Grid item className={classes.col2}>
                {col2Children}
            </Grid>
        </Grid>
    )
}

TwoColGrid.defaultProps = {
    externalclass: "",
}

TwoColGrid.propTypes = {
    col1Children: PropTypes.element.isRequired,
    col2Children: PropTypes.element.isRequired,
    externalclass: PropTypes.string,
}

export default TwoColGrid
