import React from "react"
import PropTypes from "prop-types"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import classnames from "classnames"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    disabledTeamContainer: {
        marginBottom: "0.7rem",
    },
    activeMember: {
        color: colors.black,
        textDecoration: "underline",
        cursor: "pointer",
        minWidth: "10rem",
    },
    disableMember: {
        color: colors.lighterGray,
        pointerEvents: "none",
        textDecoration: "none",
        minWidth: "10rem",
    },
    teamImage: {
        borderRadius: "50%",
        width: "2rem",
        height: "2rem",
        marginRight: "1rem",
    },
    positionText: {
        color: colors.lighterGray,
        fontSize: "0.875rem",
        textOverflow:"ellipsis",
        minWidth:"10rem",
        "@media(max-Width:768px)": {
            paddingLeft: "3rem",
        },
    },
})

export const UserProfileRow = ({ image, name, position, isDisable, col1Size, col2Size }) => {
    const classes = useStyles()
    return (
        <Grid container wrap="nowrap" alignItems="center" justify="flex-start">
            <Grid
                item
                container
                alignItems="center"
                justify="flex-start"
                xs={col1Size}
                sm={12}
                md={col1Size}
                lg={col1Size}
                xl={col1Size}
                wrap="nowrap"
                className={classes.disabledTeamContainer}>
                <img className={classes.teamImage} src={image} alt="maskGroup" />
                <Typography
                    className={classnames(classes.activeMember, {
                        [classes.disableMember]: isDisable,
                    })}>
                    {name}
                </Typography>
            </Grid>
            <Grid
                item
                xs={col2Size}
                sm={12}
                md={col2Size}
                lg={col2Size}
                xl={col2Size}
                className={classes.disabledTeamContainer}>
                <Typography className={classes.positionText}>{position}</Typography>
            </Grid>
        </Grid>
    )
}

UserProfileRow.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    isDisable: PropTypes.bool.isRequired,
    col1Size: PropTypes.number.isRequired,
    col2Size: PropTypes.number.isRequired,
}
