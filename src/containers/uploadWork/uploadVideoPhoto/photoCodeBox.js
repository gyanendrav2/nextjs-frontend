import React from "react"
import PropTypes from "prop-types"
import { Grid, makeStyles } from "@material-ui/core"
import { PhotoIcon } from "../../../components/icons/photoIcon"
import { CodeIcon } from "../../../components/icons/codeIcon"
import { colors } from "../../../theme/colors"

const useStyles = makeStyles({
    whiteBg: {
        backgroundColor: colors.white,
        padding: "2rem",
        marginBottom: "1rem",
        color: colors.white,
    },
    codeContainer: {
        backgroundColor: colors.lighterPrimary,
        padding: "3.25rem 2rem",
    },
    icon: {
        margin: "0 2rem",
    },
})

export const PhotoCodeBox = ({ flexDirection }) => {
    const classes = useStyles()
    return (
        <Grid container className={classes.whiteBg} direction={flexDirection}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Grid container alignItems="center" justify="center" className={classes.codeContainer}>
                    <PhotoIcon className={classes.icon} />
                    <CodeIcon className={classes.icon} />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} lg={6}></Grid>
        </Grid>
    )
}

PhotoCodeBox.defaultProps = {
    flexDirection: "row",
}

PhotoCodeBox.propTypes = {
    flexDirection: PropTypes.string,
}
