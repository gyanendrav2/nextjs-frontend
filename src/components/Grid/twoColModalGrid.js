import React from "react"
import PropTypes from "prop-types"
import { Box, Grid, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    col1: {
        width: "18rem",
        position: "relative",
    },
    col2: {
        width: "calc(100% - 18rem)",
    },
})

const TwoColModalGrid = ({ col1Children, col2Children }) => {
    const classes = useStyles()
    return (
        <Grid container wrap="nowrap">
            <Box className={classes.col1}>{col1Children}</Box>
            <Box className={classes.col2}>{col2Children}</Box>
        </Grid>
    )
}

TwoColModalGrid.propTypes = {
    col1Children: PropTypes.element.isRequired,
    col2Children: PropTypes.element.isRequired,
}

export default TwoColModalGrid
