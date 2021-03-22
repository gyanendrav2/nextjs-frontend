import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { colors } from "../../theme/colors";
import SelectWithLabelIcon from "../inputs/SelectWithLabelIcon";
import InputWithLabelIcon from "../inputs/InputWithLabelIcon";
import classnames from "classnames";

const useStyles = makeStyles({
    wrapper: {
        width: "105%",
        backgroundColor: colors.lighterPrimary,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "nowrap",
        color: colors.black,
        padding: "1.5rem 2.3rem 2rem 1.8rem",
        transform: "translateX(-2%)",
        "@media (max-width:767px)": {
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
        },
        "@media (min-width:768px) and (max-width:967px)": {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
        },
    },
    col1: {
        color: colors.black,
        fontSize: "1rem",
        width: "5rem",
        // paddingRight: "1.5rem",
        "@media (max-width:967px)": {
            width: "100%",
            textAlign: "left",
            marginBottom: "1.5rem",
        },
    },
    col2: {
        width: "calc(100% - 5rem)",
        "@media (max-width:967px)": {
            width: "100%",
        },
    },
    secondLevelCategoryStyles: {
        color: colors.black,
    },
    locationInput: {
        padding: "0.9px",
    },
});
const secondlevelCategoryItems = [
    { value: "1", label: "category-1" },
    { value: "2", label: "category-2" },
    { value: "3", label: "category-3" },
    { value: "4", label: "category-4" },
];
const years = [
    { value: "1", label: "2020" },
    { value: "2", label: "2021" },
    { value: "3", label: "2022" },
    { value: "4", label: "2023" },
];

const Filter = ({ externalClass }) => {
    const classes = useStyles();

    return (
        <Box className={classnames(classes.wrapper, externalClass)}>
            <Box className={classes.col1}>Filter by:</Box>
            <Box className={classes.col2}>
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12} md={3} lg={3}>
                        <SelectWithLabelIcon
                            label="Second level category"
                            options={secondlevelCategoryItems}
                            externalClass={classes.locationInput}
                            placeholder="Sports Photography"
                            labelColor={colors.lighterGray}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12} md={3} lg={3}>
                        <InputWithLabelIcon
                            label="Location"
                            placeholder="Georgia, US "
                            externalClass={classes.locationInput}
                            labelColor={colors.lighterGray}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12} md={3} lg={3}>
                        <SelectWithLabelIcon
                            label="Year"
                            options={years}
                            externalClass={classes.yearInput}
                            placeholder="-"
                            labelColor={colors.lighterGray}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12} md={3} lg={3}>
                        <SelectWithLabelIcon
                            label="Sort by"
                            options={secondlevelCategoryItems}
                            variant="underlineBorder"
                            externalClass={classes.sortInput}
                            placeholder="A-Z"
                            labelColor={colors.lighterGray}
                            bgColor={colors.lighterPrimary}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

Filter.propTypes = {
    externalClass: PropTypes.string,
};

export default Filter;
