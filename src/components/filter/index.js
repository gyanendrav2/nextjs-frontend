import React from "react"
import PropTypes from "prop-types"
import { Box, Grid, makeStyles } from "@material-ui/core"
import classnames from "classnames"
import { colors } from "../../theme/colors"
import { InputWithLabelIcon } from "../inputs/inputWithLabelIcon"
import SelectWithLabelIcon from "../inputs/selectWithLabelIcon"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.lighterPrimary,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "nowrap",
        color: colors.black,
        padding: (props) => props.padding,
        paddingBottom: "1rem!important",
        width: "calc(100% + 5rem)",
        marginLeft: "-2.5rem",
        "@media (min-width:768px) and (max-width:1024px)": {
            display: "block",
            width: "calc(100% + 4rem)",
            marginLeft: "-2rem",
        },
        "@media (max-width:767px)": {
            padding: "2rem 1rem!important",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
            width: "calc(100% + 2rem)",
            marginLeft: "-1rem",
        },
    },
    col1: {
        color: colors.black,
        fontSize: "1rem",
        width: "7.25rem",
        marginTop: "0.625rem",
        "@media (max-width:1024px)": {
            width: "100%",
            textAlign: "left",
            marginBottom: "1.5rem",
        },
    },
    col2: {
        width: "calc(100% - 7.25rem)",
        "@media (max-width:1024px)": {
            width: "100%",
        },
    },
    secondLevelCategoryStyles: {
        color: colors.black,
    },
    selectInput: {
        height: "2.4rem",
        padding: "0.9px",
        fontWeight: "700",
    },
    locationInput: {
        padding: "0.9px",
        fontWeight: "700",
        height: "2.58rem",
    },
    smallInput: {
        "@media (min-width: 1025px)": {
            maxWidth: "13rem",
        },
    },
    sortByInput: {
        "@media (min-width:1025px)": {
            maxWidth: "13.125rem",
            marginLeft: "auto",
        },
        "@media (min-width: 768px) and (max-width: 1024px)": {
            paddingLeft: "7.5rem",
        },
    },
})
const secondlevelCategoryItems = [
    { value: "1", label: "Category-1" },
    { value: "2", label: "Category-2" },
    { value: "3", label: "Category-3" },
    { value: "4", label: "Category-4" },
]
const years = [
    { value: "1", label: "2020" },
    { value: "2", label: "2021" },
    { value: "3", label: "2022" },
    { value: "4", label: "2023" },
]

export const Filter = ({ externalclass, padding }) => {
    const classes = useStyles({ padding })

    return (
        <Box className={classnames(classes.wrapper, externalclass)}>
            <Box className={classes.col1}>Filter by:</Box>
            <Box className={classes.col2}>
                <Grid container spacing={2}>
                    <Grid item sm={12} xs={12} md={6} lg={3}>
                        <SelectWithLabelIcon
                            label="Second level category"
                            options={secondlevelCategoryItems}
                            externalclass={classes.selectInput}
                            placeholder="Sports Photography"
                            labelColor={colors.lighterGray}
                            fontWeight="700"
                            fontSize="1rem"
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3}>
                        <InputWithLabelIcon
                            name=""
                            label="Location"
                            placeholder="Georgia, US "
                            externalclass={classes.locationInput}
                            labelColor={colors.lighterGray}
                            fontWeight="700"
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3}>
                        <Box className={classes.smallInput}>
                            <SelectWithLabelIcon
                                label="Year"
                                options={years}
                                externalclass={classes.selectInput}
                                placeholder="2019"
                                labelColor={colors.lighterGray}
                                fontWeight="700"
                            />
                        </Box>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3}>
                        <Box className={classes.sortByInput}>
                            <SelectWithLabelIcon
                                label="Sort by"
                                options={secondlevelCategoryItems}
                                variant="underlineBorder"
                                externalclass={classes.selectInput}
                                placeholder="A-Z"
                                labelColor={colors.lighterGray}
                                bgcolor={colors.lighterPrimary}
                                fontWeight="700"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

Filter.defaultProps = {
    externalclass: "",
    padding: "2rem 2.5rem",
}

Filter.propTypes = {
    externalclass: PropTypes.string,
    padding: PropTypes.string,
}
