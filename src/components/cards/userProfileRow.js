import React from "react";
import PropTypes from "prop-types";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { colors } from "../../theme/colors";
import classnames from "classnames";

const useStyles = makeStyles({
    disabledTeamContainer: {
        marginBottom: "0.7rem",
    },
    activeMember: {
        color: colors.black,
        textDecoration: "underline",
        cursor: "pointer",
    },
    disableMember: {
        color: colors.lighterGray,
        pointerEvents: "none",
        textDecoration: "none",
    },
    teamImage: {
        borderRadius: "50%",
        width: "2rem",
        height: "2rem",
        marginRight: "1rem",
    },
});

const UserProfileRow = ({ image, name, position, isDisable, col1Size, col2Size }) => {
    const classes = useStyles();
    return (
        <Grid container wrap="nowrap">
            <Grid
                item
                container
                alignItems="center"
                justifyContent="flex-start"
                xs={col1Size}
                sm={12}
                md={col1Size}
                lg={col1Size}
                xl={col1Size}
                className={classes.disabledTeamContainer}>
                <img className={classes.teamImage} src={image} alt="maskGroup" />
                <Typography
                    className={classnames(classes.activeMember, {
                        [classes.disableMember]: isDisable,
                    })}>
                    {name}
                </Typography>
            </Grid>
            <Grid item xs={col2Size} sm={12} md={col2Size} lg={col2Size} xl={col2Size} className={classes.disabledTeamContainer}>
                <Typography className={classes.positionText}>{position}</Typography>
            </Grid>
        </Grid>
    );
};

UserProfileRow.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    isDisable: PropTypes.bool,
    col1Size: PropTypes.string,
    col2Size: PropTypes.string
};

export default UserProfileRow;
