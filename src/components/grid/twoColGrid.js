import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { Grid, makeStyles } from "@material-ui/core"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        width: "100%",
        backgroundColor: colors.lightGray,
        padding: "2rem orem",
        // paddingLeft: "0rem",
    },
    col1: {
        width: "27.5rem",
        "@media (min-width:200px) and (max-width:767px)": {
            display: "none",
        },
        "@media (min-width:768px) and (max-width: 1350px)": {
            width: "100%",
        },
    },

    col2: {
        width: "calc(100% - 27.5rem)",
        "@media (min-width:200px) and (max-width:767px)": {
            width: "100%",
        },
        "@media (min-width:768px) and (max-width: 1350px)": {
            width: "100%",
        },
    },
})

export const TwoColGrid = ({ col1Children, col2Children, col1Externalclass, externalclass }) => {
    const classes = useStyles()
    return (
        <Grid container display="flex" spacing={2} className={classnames(classes.wrapper, externalclass)}>
            <Grid item className={classnames(classes.col1, col1Externalclass)}>
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
    col1Externalclass: "",
}

TwoColGrid.propTypes = {
    col1Children: PropTypes.element.isRequired,
    col2Children: PropTypes.element.isRequired,
    externalclass: PropTypes.string,
    col1Externalclass: PropTypes.string,
}
