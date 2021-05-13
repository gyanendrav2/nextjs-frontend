import React from "react"
import PropTypes from "prop-types"
import { Box, Grid, makeStyles } from "@material-ui/core"
import classnames from "classnames"
import { colors } from "../../theme/colors"
import { InputWithLabelIcon } from "../inputs/inputWithLabelIcon"
import  SelectWithLabelIcon  from "../inputs/selectWithLabelIcon"

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
})
const secondlevelCategoryItems = [
    { value: "1", label: "category-1" },
    { value: "2", label: "category-2" },
    { value: "3", label: "category-3" },
    { value: "4", label: "category-4" },
]
const years = [
    { value: "1", label: "2020" },
    { value: "2", label: "2021" },
    { value: "3", label: "2022" },
    { value: "4", label: "2023" },
]

export const Filter = ({ externalclass }) => {
    const classes = useStyles()

    return (
        <Box className={classnames(classes.wrapper, externalclass)}>
            <Box className={classes.col1}>Filter by:</Box>
            <Box className={classes.col2}>
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12} md={3} lg={3}>
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
                    <Grid item sm={6} xs={12} md={3} lg={3}>
                        <InputWithLabelIcon
                            name=""
                            label="Location"
                            placeholder="Georgia, US "
                            externalclass={classes.locationInput}
                            labelColor={colors.lighterGray}
                            fontWeight="700"
                        />
                    </Grid>
                    <Grid item sm={6} xs={12} md={3} lg={3}>
                        <SelectWithLabelIcon
                            label="Year"
                            options={years}
                            externalclass={classes.selectInput}
                            placeholder="-"
                            labelColor={colors.lighterGray}
                            fontWeight="700"
                        />
                    </Grid>
                    <Grid item sm={6} xs={12} md={3} lg={3}>
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
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

Filter.defaultProps = {
    externalclass: "",
}

Filter.propTypes = {
    externalclass: PropTypes.string,
}
