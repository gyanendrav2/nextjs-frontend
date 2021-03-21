import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { colors } from "../../theme/colors";
import CustomButton from "../../components/buttons/CustomButton";
import FilterIcon from "../../components/icons/filterIcon";
import Filter from "../../components/filter";

const useStyles = makeStyles({
    searchWrapper: {
        padding: "5rem 2rem 0rem 2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: colors.white,
    },
    title: {
        fontFamily: "Forno-Trial",
        fontWeight: "700",
        textAlign: "center",
        color: colors.black,
        fontSize: "3.125rem",
        lineHeight: "2.625",
        animation: "fadeIn 1s",
        "@media(max-width:432px)": {
            lineHeight: "4.75rem",
        },
    },
    searchContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.lighterPrimary,
        padding: "2rem",
        // "@media (max-width: 990px)": {
        //     // marginBottom: "2rem",
        // },
    },
    filterWrapper: {
        // padding: "2rem",
        // backgroundColor: colors.white,
    },

    searchInput: {
        // width: "calc(100%-10rem)",
    },
    confirmButton: {
        // width: "10rem",
    },
    filterContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        position: "absolute",
        right: "2rem",
        // "@media (max-width: 990px)": {
        //     transform: "translateY(6.875rem)",
        // },
    },
    filterText: {
        marginRight: "1rem",
        color: colors.black,
    },
    inputBoxSize: {
        maxWidth: "44rem",
        "@media (max-width: 990px)": {
            maxWidth: "100%",
        },
    },
    col1: {
        width: "calc(100% - 6.437rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        border: `1px solid ${colors.lightGray}`,
        backgroundColor: colors.white,
    },
    col2: {
        width: "6.437rem",
    },
    inputCol1: {
        width: "calc(100% - 13.3rem)",
    },
    inputCol2: {
        width: "10rem",
    },
    input: {
        width: "100%",
        border: "none",
        fontSize: "1rem",
        padding: "1.1rem",
        "&:focus": {
            outline: "none",
        },
    },
    buttonGroupItem: {
        width: "5rem",
        height: "2.5rem",
        border: `1px solid ${colors.lightGray}`,
        color: colors.black,
        textTransform: "capitalize",
        backgroundColor: colors.white,
        "&:hover": {
            backgroundColor: colors.lightGray,
        },
        "&:nth-child(1)": {
            borderRight: "none",
        },
    },
});

const SearchBox = () => {
    const classes = useStyles();

    const [showFilter, setShowFilter] = useState(false);
    return (
        <Grid container alignItems="center" justify="center" className={classes.searchContainer}>
            {/* <Grid item sm={12} md={3} lg={2}></Grid>
                <Grid item sm={12} md={6} lg={8}> */}
            <Grid
                container
                alignItems="center"
                justifyContent="flex-start"
                wrap="nowrap"
                className={classes.inputBoxSize}>
                <Grid container className={classes.col1}>
                    <Grid item className={classes.inputCol1}>
                        <input type="text" placeholder="Insert project name or a username" className={classes.input} />
                    </Grid>
                    <Grid item className={classes.inputCol2}>
                        <Grid container alignItems="center" justifyContent="flex-start" wrap="nowrap">
                            <CustomButton externalClass={classes.buttonGroupItem} label="Work" />
                            <CustomButton externalClass={classes.buttonGroupItem} label="People" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container className={classes.col2}>
                    <CustomButton label="Search" type="submit" externalClass={classes.confirmButton} />
                </Grid>
            </Grid>
            {/* </Grid> */}
            {/* <Grid item sm={12} md={3} lg={2}> */}
            <Grid className={classes.filterContainer}>
                <Typography className={classes.filterText}>Filter</Typography>
                <CustomButton variant="iconButton" icon={<FilterIcon />} onClick={() => setShowFilter(!showFilter)} />
            </Grid>

            <Box className={classes.filterWrapper}>{showFilter && <Filter />}</Box>
        </Grid>
    );
};

SearchBox.propTypes = {};

export default SearchBox;
