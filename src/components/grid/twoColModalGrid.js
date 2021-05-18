import React from "react"
import PropTypes from "prop-types"
import { Box, Grid, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    wrapper: {
        maxHeight: "90vh",
        overflowY: "auto",
        overflowX: "hidden",
        padding: "1.25rem",
    },
    col1: {
        width: "18rem",
        position: "relative",
        "@media (max-width:767px)": {
            width: "100%",
            margin: (props) => (props.UserInfoMargin ? props.UserInfoMargin : "2rem"),
        },
    },

    col2: {
        width: "calc(100% - 18rem)",
        "@media (max-width:767px)": {
            width: "100%",
        },
    },
})

export const TwoColModalGrid = ({ col1Children, col2Children, UserInfoMargin }) => {
    const classes = useStyles({ UserInfoMargin })
    return (
        <Grid container className={classes.wrapper}>
            <Box className={classes.col1}>{col1Children}</Box>
            <Box className={classes.col2}>{col2Children}</Box>
        </Grid>
    )
}
TwoColModalGrid.defaultProps = {
    UserInfoMargin: "",
}

TwoColModalGrid.propTypes = {
    col1Children: PropTypes.element.isRequired,
    col2Children: PropTypes.element.isRequired,
    UserInfoMargin: PropTypes.string,
}
