import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import React, { useState } from "react"
import dynamic from "next/dynamic"
import classnames from "classnames"
import { colors } from "../theme/colors"
import { SearchBox } from "../containers/search/searchBox"
import { images } from "../assets/images"
import ContentWrapper from "../components/contentWrapper/contentWrapper"
import { CardWithHeader } from "../components/cards/cardWithHeader"

const HeaderWrapper = dynamic(() => import("../components/header/headerWrapper"))
const CardWithFooter = dynamic(() => import("../components/cards/cardWithFooter"))
const Footer = dynamic(() => import("../components/footer"))

const useStyles = makeStyles({
    searchWrapper: {
        padding: "5rem 2rem 0rem 2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: colors.white,
        "@media(max-width:1024px)": {
            padding: "5rem 2rem 0rem 2rem",
        },
        "@media(max-width:767px)": {
            padding: "4.5rem 2rem 0rem 2rem",
        },
    },
    title: {
        fontFamily: "Forno-Trial",
        fontWeight: "700",
        textAlign: "center",
        color: colors.black,
        fontSize: "3.125rem",
        margin: "2.5rem auto 2rem auto",
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
    },
    results: {
        fontFamily: "Helvetica",
        fontSize: "0.9rem",
        margin: "2rem 0",
        color: colors.lighterGray,
        "@media (min-width:768px) and (max-width:1024px)": {
            margin: "1.5rem 0 2.5rem 0",
        },
        "@media (max-width:767px)": {
            margin: "2rem 0",
        },
    },
    search: {
        transform: "none",
        width: "100%",
    },
    mobileViewResult: {
        "@media (max-width: 767px)": {
            transform: "translate(24px,-79px)",
            position: "absolute",
        },
    },
    footer: {
        "@media (min-width: 768px) and (max-width: 1024px)": {
            marginTop: "3.625rem!important",
        },
        "@media (max-width: 767px)": {
            marginTop: "3.125rem!important",
        },
    },
})

const Search = () => {
    const classes = useStyles()
    const [isFilterOpened, setIsFilterOpened] = useState(false)
    const [showPeople, setShowPeople] = useState(false)

    const getProjects = () => {
        setShowPeople(false)
    }
    const getPeople = () => {
        setShowPeople(true)
    }

    return (
        <Box>
            <HeaderWrapper isScrollDetect={false} />
            <Box className={classes.searchWrapper}>
                <Typography className={classes.title}> Search the markets </Typography>
            </Box>
            <SearchBox
                externalclass={classes.search}
                onFilter={(value) => setIsFilterOpened(value)}
                getProjects={getProjects}
                getPeople={getPeople}
            />
            <Box
                className={classnames(classes.resultsContainer, {
                    [classes.mobileViewResult]: !isFilterOpened,
                })}>
                <Box className={classes.results}>
                    <Typography> 8 results </Typography>
                </Box>
            </Box>
            <ContentWrapper>
                <>
                    <Grid container spacing={2}>
                        {!showPeople &&
                            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, i) => (
                                <Grid key={i} item xs={12} sm={6} md={6} lg={4} xl={3}>
                                    <CardWithFooter
                                        image={images.brandon}
                                        footerTitle="Brandon Landing"
                                        footerSubitle="Director assistant"
                                        title="SiR - Hair Down (Official Video) ft. Kendrick Lamar"
                                    />
                                </Grid>
                            ))}
                    </Grid>
                    <Grid container spacing={2}>
                        {showPeople &&
                            [1, 1, 1, 1, 1, 1].map((item, i) => (
                                <Grid key={i} item xs={12} sm={6} md={6} lg={4} xl={3}>
                                    <CardWithHeader
                                        image={images.brandon}
                                        title="Brandon Landing"
                                        subTitle="Director assistant"
                                        buttonText="Follow"
                                        creationCard
                                    />
                                </Grid>
                            ))}
                    </Grid>
                </>
            </ContentWrapper>
            <Footer externalclass={classes.footer} />
        </Box>
    )
}

Search.propTypes = {}

export default Search
