import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { colors } from "../../../theme/colors";
import PropTypes from "prop-types";

const useStyles = makeStyles({
    CuratorCard: {
        display: "flex",
        flexWrap: "wrap",
    },
    Container: {
        boxShadow: `0px 1px 1px ${colors.lightGray}`,
        display: "flex",
        flexDirection: "column",
        height: "100%",
    },
    CreatorsAuthor: {
        display: " flex;",
        alignItems: " center;",
        border: "1px solid rgba(0, 0, 0, 0.05);",
        padding: "0.5rem",
        height: "100%",
    },
    image: {
        borderRadius: "50%",
        margin: "0rem 1.125rem 0rem 1rem",
        width: "5.5rem",
        height: "5.5rem",
    },
    CreatorsAuthorName: {
        fontSize: "1rem",
        color: colors.blackPrimary,
        fontFamily: "Helvetica",
        lineHeight: "1.45rem",
    },
    CreatorsAuthorJobTitle: {
        fontSize: "0.875rem",
        color: colors.lighterGray,
        margin: "0.187rem 0 0.5rem 0",
    },
    CreatorsButton: {
        background: colors.lighterPrimary,
        fontSize: "1rem",
        color: colors.blackPrimary,
        border: " none",
        outline: "none",
        width: "5rem",
        height: "2rem",
    },
    image_container: {
        width: "100%",
        height: "11.25rem",
    },
    image_: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
});

const CreationCard = ({ curatedCreators }) => {
    const classes = useStyles();
    return (
        <Box className={classes.CuratorCard}>
            <Grid container spacing={5}>
                {curatedCreators &&
                    curatedCreators.map((data, i) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                                <Box key={i} className={classes.Container}>
                                    <Box className={classes.CreatorsAuthor}>
                                        <Box>
                                            <img className={classes.image} src={data.image} alt={data.name} />
                                        </Box>
                                        <Box>
                                            <Typography className={classes.CreatorsAuthorName}>{data.name}</Typography>
                                            <Typography className={classes.CreatorsAuthorJobTitle}>
                                                {data.jobTitle}
                                            </Typography>
                                            <button className={classes.CreatorsButton}>Follow</button>
                                        </Box>
                                    </Box>
                                    <Box className={classes.image_container}>
                                        <img className={classes.image_} src={data.image} alt={data.name} />
                                    </Box>
                                </Box>
                            </Grid>
                        );
                    })}
            </Grid>
        </Box>
    );
};

CreationCard.propTypes = {
    curatedCreators: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            jobTitle: PropTypes.string,
        })
    ),
};
export default CreationCard;
