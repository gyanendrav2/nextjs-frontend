import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { colors } from "../../theme/colors";
import CustomButton from "../../components/buttons/CustomButton";
import FilterIcon from "../../components/icons/filterIcon";
import Filter from "../../components/filter";
import HeaderWrapper from "../../components/header/headerWrapper";
import Footer from "../../components/footer";
import SearchBox from "../../containers/search/searchBox";
import CardWithHeader from "../../components/cards/cardWithHeader";
import { images } from "../../assets/images";
import ContentWrapper from "../../components/contentWrapper/contentWrapper";

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
    },
    filterText: {
        marginRight: "1rem",
        color: colors.black,
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
    filterWrapper: {
        padding: "2rem",
        backgroundColor: colors.white,
    },
    resultsContainer: {
        maxWidth: "100%",
        height: "4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
        // "@media (max-width: 767px)": {
        //     transform: "translateY(-36px)",
        //     position: "absolute",
        //     display: "block",
        //     maxWidth: "10rem",
        // },
    },
    results: {
        fontFamily: "Helvetica",
        fontSize: "0.9rem",
        lineHeight: "1rem",
        color: colors.lighterGray,
    },
});

const Search = () => {
    const classes = useStyles();
    const [showFilter, setShowFilter] = useState(false);

    return (
        <Box>
            <HeaderWrapper isScrollDetect={false} />
            <Box className={classes.searchWrapper}>
                <Typography className={classes.title}>Search the markets</Typography>
            </Box>
            <SearchBox />
            <Box className={classes.filterWrapper}>{showFilter && <Filter />}</Box>
            <Box className={classes.resultsContainer}>
                <Typography className={classes.results}>4 results</Typography>
            </Box>
            <ContentWrapper>
                <Grid container spacing={2}>
                    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
                        <Grid key={item} item xs={12} sm={6} md={4} lg={3} xl={3}>
                            <CardWithHeader
                                image={images.maskGroup}
                                title="Brandon Landing"
                                subTitle="Director assistant"
                                buttonText="Follow"
                            />
                        </Grid>
                    ))}
                </Grid>
            </ContentWrapper>
            <Footer />
        </Box>
    );
};

Search.propTypes = {};

export default Search;
