import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { colors } from "../../theme/colors"
import CustomButton from "../../components/buttons/customButton"
import { FilterIcon } from "../../components/icons/filterIcon"
import { Filter } from "../../components/filter"

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
        padding: "1.5rem",
        position: "relative",
        "@media (max-width: 767px)": {
            padding: "1rem",
        },
    },
    filterWrapper: {
        // padding: "2rem",
        backgroundColor: colors.lighterPrimary,
        paddingLeft: "2.5rem",
        paddingRight: "2.5rem",
    },

    searchInput: {
        // width: "calc(100%-10rem)",
    },
    confirmButton: {
        // width: "10rem",
    },
    mobileFilterWrapper: {
        padding: "2rem 0",
        backgroundColor: colors.white,
        "@media (min-width: 1025px)": {
            display: "none",
        },
    },
    showFilterMobile: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        right: "2rem",
        position: "relative",
        "@media (max-width: 767px)": {
            right: "1rem",
        },
    },
    filterContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        position: "absolute",
        right: "2rem",
        "@media (max-width: 1025px)": {
            display: "none",
        },
    },
    filterText: {
        marginRight: "1rem",
        color: colors.black,
    },
    inputBoxSize: {
        maxWidth: "56.25rem",
        "@media (min-width:600px) and (max-width: 1185px)": {
            maxWidth: "44rem",
        },
        "@media (max-width: 600px)": {
            display: "block",
        },
        "@media (min-width: 600px) and (max-width: 1024px)": {
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
        "@media (max-width:600px)": {
            width: "100%",
            position: "relative",
        },
    },
    col2: {
        width: "6.437rem",
        "@media (max-width:600px)": {
            width: "100%",
            "& button": {
                width: "100%",
                marginTop: "4.5rem",
            },
        },
    },
    inputCol1: {
        width: "calc(100% - 13.3rem)",
        "@media (max-width:600px)": {
            width: "100%",
        },
    },
    inputCol2: {
        width: "10rem",
        "@media (max-width:600px)": {
            width: "100%",
            position: "absolute",
            zIndex: 1,
            bottom: "-3.5rem",
            "& button": {
                width: "50%",
            },
        },
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
    search: {
        transform: "none!important",
        width: "100%!important",
        margin: "auto",
        borderTop: `1px solid ${colors.lightGray}`,
        "@media(max-width:1024px)": {
            borderTop: "none",
        },
    },
})

export const SearchBox = ({ onFilter }) => {
    const classes = useStyles()

    const [showFilter, setShowFilter] = useState(false)

    useEffect(() => {
        onFilter(showFilter)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showFilter])

    return (
        <>
            <Grid container alignItems="center" justifycontent="center" className={classes.searchContainer}>
                <Grid
                    container
                    alignItems="center"
                    // justifycontent="flex-start"
                    wrap="nowrap"
                    className={classes.inputBoxSize}>
                    <Grid container className={classes.col1}>
                        <Grid item className={classes.inputCol1}>
                            <input
                                type="text"
                                placeholder="Insert project name or a username"
                                className={classes.input}
                            />
                        </Grid>
                        <Grid item className={classes.inputCol2}>
                            <Grid container alignItems="center" justifycontent="flex-start" wrap="nowrap">
                                <CustomButton externalclass={classes.buttonGroupItem} label="Work" />
                                <CustomButton externalclass={classes.buttonGroupItem} label="People" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.col2}>
                        <CustomButton label="Search" type="submit" externalclass={classes.confirmButton} />
                    </Grid>
                </Grid>
                {/* </Grid> */}
                {/* <Grid item sm={12} md={3} lg={2}> */}
                <Grid className={classes.filterContainer}>
                    <Typography className={classes.filterText}>Filter</Typography>
                    <CustomButton
                        variant="iconButton"
                        icon={<FilterIcon />}
                        onClick={() => setShowFilter(!showFilter)}
                    />
                </Grid>
            </Grid>
            <Box className={classes.mobileFilterWrapper}>
                <Grid className={classes.showFilterMobile}>
                    <Typography className={classes.filterText}>Filter</Typography>
                    <CustomButton
                        variant="iconButton"
                        icon={<FilterIcon />}
                        onClick={() => setShowFilter(!showFilter)}
                    />
                </Grid>
            </Box>
            <Box className={classes.filterWrapper}>
                {showFilter && <Filter padding="2rem 0" externalclass={classes.search} />}
            </Box>
        </>
    )
}

SearchBox.defaultProps = {
    onFilter: () => {},
}

SearchBox.propTypes = {
    onFilter: PropTypes.func,
}
