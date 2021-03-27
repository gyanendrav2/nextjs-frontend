import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { colors } from "../theme/colors"
import HeaderWrapper from "../components/header/headerWrapper"
import Footer from "../components/footer"
import SearchBox from "../containers/search/searchBox"
import CardWithHeader from "../components/cards/cardWithHeader"
import { images } from "../assets/images"
import ContentWrapper from "../components/contentWrapper/contentWrapper"

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
    search: {
        transform: "none",
        width: "100%",
    },
})

const Search = () => {
    const classes = useStyles()
    // const [showFilter, setShowFilter] = useState(false);

    return (
        <Box>
            <HeaderWrapper isScrollDetect={false} />
            <Box className={classes.searchWrapper}>
                <Typography className={classes.title}>Search the markets</Typography>
            </Box>
            <SearchBox exteranlclass={classes.search} />
            <Box className={classes.resultsContainer}>
                <Typography className={classes.results}>4 results</Typography>
            </Box>
            <ContentWrapper>
                <Grid container spacing={2}>
                    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, i) => (
                        <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={3}>
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
    )
}

Search.propTypes = {}

export default Search
