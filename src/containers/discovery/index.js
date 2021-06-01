/* eslint-disable max-lines */
import React, { useState, useEffect } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { useRouter } from "next/router"
import classnames from "classnames"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { useCookies } from "react-cookie"
import PropTypes from "prop-types"
import { SelectingCategories } from "./categories/selectingCategories"
import Footer from "../../components/footer"
import { colors } from "../../theme/colors"
import CustomButton from "../../components/buttons/customButton"
import HeaderWrapper from "../../components/header/headerWrapper"
import { HeaderCategory } from "../../components/header/headerCategory"
import ContentWrapper from "../../components/contentWrapper/contentWrapper"
import { FeaturedCard } from "./featuredProjects/featuredCard"
import { CreationCard } from "./curatedProjects/creationCard"
import { CookieCard } from "../../components/cards/cookieCard"

const useStyles = makeStyles({
    wrapper: {
        color: colors.white,
        backgroundColor: colors.white,
        width: "100%",
        position: "relative",
        overflowX: "hidden",
        "& .slick-slider": {
            "&:focus": {
                outline: "none",
            },
        },
        "& .slick-track": {
            "&:focus": {
                outline: "none",
            },
        },
    },
    carouselContainer: {
        width: "100%",
        position: "relative",
        display: "flex!important",
        marginBottom: "1.5rem",
        "&:focus": {
            outline: "none",
        },
        "@media (max-width:1919px)": {
            height: "37.5rem",
        },

        "@media (min-width:1920px)": {
            height: "75vh",
        },
    },
    carouselImage: {
        width: "100%",
        height: "100%",
        padding: "0 2.5rem 2.5rem 2rem",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        "&:focus": {
            outline: "none",
        },
        "@media (max-width:767px)": {
            paddingLeft: "1rem",
            paddingRight: "1rem",
        },
    },
    title: {
        fontSize: "4.375rem",
        lineHeight: "5.375rem",
        marginBottom: "-0.75rem",
        display: "inline",
        padding: "0.1rem 0.5rem",
        backgroundColor: colors.black,
        fontFamily: "Forno-Trial",
        fontWeight: "bold",
        letterSpacing: "0.2rem",
        transition: "all 1s ease",
        color: colors.white,
        "@media (min-width: 1921px)": {
            fontSize: "8.375rem",
            lineHeight: "9.375rem",
        },
        "@media (max-width:567px)": {
            fontSize: "3.125rem",
            lineHeight: "4rem",
        },
        "@media (max-width:359px)": {
            fontSize: "2.1rem",
            lineHeight: "3.5rem",
        },
    },
    subtitle: {
        fontSize: "1rem",
        marginBottom: "1.5rem",
        marginTop: "2.3rem",
        "@media (max-width:767px)": {
            maxWidth: "13rem",
        },
    },
    headings: {
        color: colors.black,
        fontSize: "2rem",
        marginTop: "2.5rem",
        marginBottom: "1rem",
        fontFamily: "Forno-Trial",
        fontWeight: "900",
        "@media (max-width:1024px)": {
            marginTop: "2rem",
        },
        "@media (max-width:767px)": {
            fontSize: "1.875rem",
        },
    },
    messageWrapper: {
        position: "relative",
        top: "8.125rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        animation: "fadeIn 2s",
        marginLeft: "4.437rem",
        "@media(min-width:568px) and (max-width: 767px)": {
            top: "5rem",
            marginLeft: "2.437rem",
        },
        "@media (max-width: 567px)": {
            top: "7rem",
            marginLeft: "0",
        },
        "@media (min-width:1921px)": {
            marginLeft: "5.5rem",
        },
    },
    bigSignup: {
        backgroundColor: colors.white,
        color: colors.black,
    },
    pinkSquare: {
        display: "inline-block",
        height: "0.85rem",
        width: "0.85rem",
        backgroundColor: colors.pink,
        marginLeft: "0.4rem",
        "@media(max-width:768)": {
            display: "flex",
        },
    },

    resultsContainer: {
        maxWidth: "100%",
        padding: "2rem 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
        "@media (max-width: 767px)": {
            padding: 0,
        },
    },
    mobileViewResultContainer: {
        "@media (max-width: 767px)": {
            transform: "translateY(-46px)",
            position: "absolute",
            display: "block",
            maxWidth: "10rem",
        },
    },
    results: {
        fontFamily: "Helvetica",
        fontSize: "0.9rem",
        color: colors.lighterGray,
    },
    mobileShow: {
        display: "none",
        "@media(max-width:767px)": {
            display: "block",
            fontFamily: "Forno-Trial",
            fontWeight: "bold",
            fontSize: "1.875rem",
            lineHeight: "2.5rem",
            color: colors.black,
            marginTop: "2rem",
            marginBottom: "1rem",
        },
    },
    projectAuthor: {
        position: "absolute",
        right: "2.5rem",
        bottom: "4.25rem",
        fontFamily: "Helvetica",
        fontSize: "1rem",
        lineHeight: "1.375rem",
        color: colors.white,
        opacity: "0.8",
        "@media(max-width:1024px)": {
            bottom: "2.25rem",
        },
        "@media(max-width:767px)": {
            display: "none",
        },
    },
    projectAuthorTitle: {
        textDecoration: "underline",
    },
    projectAuthorMobile: {
        "@media(min-width:768px)": {
            display: "none",
        },
        marginTop: "2rem",
        opacity: "0.8",
    },
    projectAuthorTitleMobile: {
        textDecoration: "underline",
    },
    marginFilterOpen: {
        "@media (max-width:767px)": {
            margin: "1.5rem 0",
        },
    },
})

const Discovery = ({ details, category, showSlider, isAuthenticated, feed, hideCurated }) => {
    const classes = useStyles()
    const routes = useRouter()
    const { hero, curatedCreators, featuredProjects } = details
    const [featuredCardsDetails, setFeaturedCardsDetails] = useState([])
    const [totalCategories, setTotalCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState(category)
    const [isFilterOpened, setIsFilterOpened] = useState(false)
    const cookies = useCookies(["pxl-user"])

    useEffect(() => {
        const result = featuredProjects.slice(0, 8)
        setFeaturedCardsDetails(result)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [details])

    const setProjectInitially = () => {
        if (featuredProjects) {
            const tempCategory = []
            featuredProjects.forEach((item) => {
                if (!tempCategory.includes(item.category)) {
                    tempCategory.push(item.category)
                }
            })
            setTotalCategories(tempCategory)
        }
    }
    useEffect(setProjectInitially, [featuredProjects])

    const LengthHandler = (data) => {
        if (data.length > 9) {
            setFeaturedCardsDetails(data.slice(0, 8))
        } else {
            setFeaturedCardsDetails(data.slice(0, data.length))
        }
    }

    const handleTab = (name) => {
        setActiveCategory(name)
        if (name !== "More") {
            const result = featuredProjects.filter((each) => each.category === name)
            LengthHandler(result)
        } else if (name === "More") {
            const result = [...featuredProjects]
            LengthHandler(result)
        }
    }

    const settings = {
        infinite: true,
        speed: 1000,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        autoplay: false,
        arrows: false,
        slidesToScroll: 1,
        dots: false,
    }
    return (
        <>
            {Object.keys(cookies[0]).length === 0 && <CookieCard />}
            <Box className={`discovery__wrapper ${classes.wrapper}`}>
                <HeaderWrapper
                    isAuthenticated={isAuthenticated}
                    feed={feed}
                    isScrollDetect={!activeCategory}
                    featuredCardsDetails={featuredCardsDetails}
                />
                {activeCategory ? (
                    <HeaderCategory categoryName={activeCategory} />
                ) : (
                    showSlider && (
                        <Slider {...settings}>
                            {hero &&
                                hero.map((item, index) => {
                                    return (
                                        <div key={index} className={classes.carouselContainer}>
                                            <div
                                                className={classes.carouselImage}
                                                style={{
                                                    backgroundImage: `url(${item.backgroundImage})`,
                                                }}>
                                                <div className={classes.messageWrapper}>
                                                    <Typography className={classes.title}>
                                                        {item.titleLines[0]}
                                                        <span className={classes.pinkSquare} />
                                                    </Typography>

                                                    <br />
                                                    <Typography className={classes.title}>
                                                        {item.titleLines[1]}
                                                        <span className={classes.pinkSquare} />
                                                    </Typography>
                                                    <br />
                                                    <Typography className={classes.title}>
                                                        {item.titleLines[2]}
                                                        <span className={classes.pinkSquare} />
                                                    </Typography>
                                                    <Typography className={classes.subtitle}>
                                                        {item.subtitle}
                                                    </Typography>
                                                    <CustomButton
                                                        label="Sign Up"
                                                        externalclass={classes.bigSignup}
                                                        onClick={() => routes.push("/signup")}
                                                    />
                                                    <Typography className={classes.projectAuthorMobile}>
                                                        Work by:&nbsp;
                                                        <span className={classes.projectAuthorTitleMobile}>
                                                            Jason Peterson
                                                        </span>
                                                    </Typography>
                                                </div>
                                                <Typography className={classes.projectAuthor}>
                                                    Work by:&nbsp;
                                                    <span className={classes.projectAuthorTitle}>Jason Peterson</span>
                                                </Typography>
                                            </div>
                                        </div>
                                    )
                                })}
                        </Slider>
                    )
                )}
                <ContentWrapper>
                    <>
                        {!activeCategory ? <Typography className={classes.mobileShow}> Discovery</Typography> : " "}
                        <SelectingCategories
                            category={activeCategory}
                            categories={totalCategories}
                            changeTab={(e) => handleTab(e)}
                            onFilter={(value) => setIsFilterOpened(value)}
                        />
                        {activeCategory ? (
                            <Box
                                className={classnames(classes.resultsContainer, {
                                    [classes.mobileViewResultContainer]: !isFilterOpened,
                                })}>
                                <Typography
                                    className={classnames(classes.results, {
                                        [classes.marginFilterOpen]: isFilterOpened,
                                    })}>
                                    8 results
                                </Typography>
                            </Box>
                        ) : (
                            " "
                        )}
                        {!activeCategory && <Typography className={classes.headings}>Featured Projects</Typography>}
                        <FeaturedCard featuredCardsDetails={featuredCardsDetails} />
                        {!hideCurated && (
                            <>
                                <Typography className={classes.headings}>Curated creators</Typography>
                                <CreationCard curatedCreators={curatedCreators} />
                            </>
                        )}
                    </>
                </ContentWrapper>
                <Footer />
            </Box>
        </>
    )
}

const propsValidation = {
    hero: PropTypes.arrayOf(
        PropTypes.shape({
            backgroundImage: PropTypes.string,
            subtitle: PropTypes.string,
            titleLines: PropTypes.arrayOf(PropTypes.string),
        })
    ),
    curatedCreators: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            jobTitle: PropTypes.string,
        })
    ),
    featuredProjects: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string,
            title: PropTypes.string,
            category: PropTypes.string,
            author: PropTypes.shape({
                jobTitle: PropTypes.string,
                name: PropTypes.string,
            }),
        })
    ),
}

Discovery.defaultProps = {
    details: {},
    category: null,
    showSlider: true,
    showCurated: false,
    isAuthenticated: false,
    feed: false,
    hideCurated: false,
}

Discovery.propTypes = {
    details: PropTypes.shape(propsValidation),
    category: PropTypes.string,
    showSlider: PropTypes.bool,
    showCurated: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    feed: PropTypes.bool,
    hideCurated: PropTypes.bool,
}

export default Discovery
