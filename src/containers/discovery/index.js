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
import { Footer } from "../../components/footer"
import { colors } from "../../theme/colors"
import { CustomButton } from "../../components/buttons/customButton"
import { HeaderWrapper } from "../../components/header/headerWrapper"
import { HeaderCategory } from "../../components/header/headerCategory"
import { ContentWrapper } from "../../components/contentWrapper/contentWrapper"
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
        // overflow: "hidden",
        // paddingBottom: "45%",
        display: "flex!important",
        "&:focus": {
            outline: "none",
        },
        // "@media (max-width:767px)": {
        //     height: "37.5rem",
        // },
        "@media (max-width:1919px)": {
            height: "37.5rem",
        },

        "@media (min-width:1920px)": {
            height: "75vh",
        },

        // "@media (min-width:1600px)": {
        //     paddingBottom: "56.25%",
        // },
    },
    carouselImage: {
        // position: "absolute",
        // top: 0,
        // left: 0,
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
        "@media (max-width:567px)": {
            fontSize: "3.125rem",
            lineHeight: "3.625rem",
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
    },
    headings: {
        color: colors.black,
        fontSize: "2rem",
        marginTop: "1.5rem",
        fontFamily: "Forno-Trial",
        fontWeight: "900",
        lineHeight: "2.75rem",
        "@media (max-width:567px)": {
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
        marginLeft: "2.875rem",
        "@media (max-width: 767px)": {
            top: "7rem",
            marginLeft: "0",
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
        height: "4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
    },
    mobileViewResultContainer: {
        "@media (max-width: 575px)": {
            transform: "translateY(-36px)",
            position: "absolute",
            display: "block",
            maxWidth: "10rem",
        },
    },
    results: {
        fontFamily: "Helvetica",
        fontSize: "0.9rem",
        lineHeight: "1rem",
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
        },
    },
})

export const Discovery = ({ details, category, showSlider, isAuthenticated, feed }) => {
    const classes = useStyles()
    const routes = useRouter()
    console.log(details, "details")
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
            <Box className={classes.wrapper}>
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
                                                </div>
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
                                <Typography className={classes.results}>8 results </Typography>
                            </Box>
                        ) : (
                            " "
                        )}
                        {!activeCategory && <Typography className={classes.headings}>Featured Projects</Typography>}
                        <FeaturedCard featuredCardsDetails={featuredCardsDetails} />
                        {/* {!activeCategory && (
                            <> */}
                        <Typography className={classes.headings}>Curated creators</Typography>
                        <CreationCard curatedCreators={curatedCreators} />
                        {/* </>
                        )} */}
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
}

Discovery.propTypes = {
    details: PropTypes.shape(propsValidation),
    category: PropTypes.string,
    showSlider: PropTypes.bool,
    showCurated: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    feed: PropTypes.bool,
}
