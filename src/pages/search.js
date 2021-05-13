import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import React, { useState } from "react"
import classnames from "classnames"
import { colors } from "../theme/colors"
import HeaderWrapper  from "../components/header/headerWrapper"
import  Footer  from "../components/footer"
import { SearchBox } from "../containers/search/searchBox"
// import { CardWithHeader } from "../components/cards/cardWithHeader"
import { images } from "../assets/images"
import { ContentWrapper } from "../components/contentWrapper/contentWrapper"
import  CardWithFooter  from "../components/cards/cardWithFooter"

const useStyles = makeStyles({
    searchWrapper: {
        padding: "5rem 2rem 0rem 2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: colors.white,
        "@media(max-width:767px)": {
            padding: "6rem 2rem 1.5rem 2rem",
        },
    },
    title: {
        fontFamily: "Forno-Trial",
        fontWeight: "700",
        textAlign: "center",
        color: colors.black,
        fontSize: "3.125rem",
        lineHeight: "2.625",
        animation: "fadeIn 1s",
        "@media(max-width:767px)": {
            fontSize: "2.5rem",
            lineHeight: "3rem",
        },
        "@media(max-width:503px)": {
            paddingBottom: "1rem",
        },
    },
    resultsContainer: {
        maxWidth: "100%",
        height: "4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
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
    mobileViewResult: {
        "@media (max-width: 575px)": {
            transform: "translate(24px,-79px)",
            position: "absolute",
        },
    },
})

const Search = () => {
    const classes = useStyles()
    const [isFilterOpened, setIsFilterOpened] = useState(false)

    return (
        <Box>
            <HeaderWrapper isScrollDetect={false} />
            <Box className={classes.searchWrapper}>
                <Typography className={classes.title}>Search the markets</Typography>
            </Box>
            <SearchBox externalclass={classes.search} onFilter={(value) => setIsFilterOpened(value)} />
            <Box className={classnames(classes.resultsContainer, { [classes.mobileViewResult]: !isFilterOpened })}>
                <Typography className={classes.results}>8 results</Typography>
            </Box>
            <ContentWrapper>
                <Grid container spacing={2}>
                    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, i) => (
                        <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={3}>
                            <CardWithFooter
                                image={images.brandon}
                                footerTitle="Brandon Landing"
                                footerSubitle="Director assistant"
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
