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
        // marginRight: "3rem",
        // position: "relative",
        "@media (max-width:767px)": {
            // width: "100%",
            // margin: "2rem",
            // // marginTop: "20rem",
            display: "none",
        },
    },

    col2: {
        width: "calc(100% - 27.5rem)",
        "@media (max-width:767px)": {
            width: "100%",
        },
    },
})

export const TwoColGrid = ({ col1Children, col2Children, externalclass }) => {
    const classes = useStyles()
    return (
        <Grid container display="flex" spacing={2} className={classnames(classes.wrapper, externalclass)}>
            <Grid item className={classes.col1}>
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
