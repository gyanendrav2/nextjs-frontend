import React, { useState, useEffect } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { Box, makeStyles, Typography } from "@material-ui/core"
import PropTypes from "prop-types"
import SelectingCategories from "./featuredProjects"
import Footer from "../../components/footer"
import { colors } from "../../theme/colors"
import CustomButton from "../../components/buttons/customButton"
import HeaderWrapper from "../../components/header/headerWrapper"
import HeaderCategory from "../../components/header/headerCategory"
import ContentWrapper from "../../components/contentWrapper/contentWrapper"
import FeaturedCard from "./featuredProjects/featuredCard"
import CreationCard from "./curatedProjects/creationCard"

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
        height: "37.5rem",
        display: "flex!important",
        "&:focus": {
            outline: "none",
        },
    },
    carouselImage: {
        width: "100%",
        height: "100%",
        padding: "0 2.5rem 2.5rem 2.5rem",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        "&:focus": {
            outline: "none",
        },
    },
    title: {
        fontSize: "4rem",
        lineHeight: "5rem",
        marginBottom: "-0.75rem",
        display: "inline",
        padding: "0.1rem 0.5rem",
        backgroundColor: colors.black,
        fontFamily: "Forno-Trial",
        fontWeight: "bold",
        letterSpacing: "0.2rem",
        transition: "all 1s ease",
        "@media (max-width:567px)": {
            fontSize: "2.2rem",
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
        margin: "0.75rem 0 0.75rem 0",
        fontFamily: "Forno-Trial",
        fontWeight: "900",
        lineHeight: "2.75rem",
        "@media (max-width:567px)": {
            fontSize: "1.5rem",
        },
    },
    messageWrapper: {
        position: "relative",
        top: "8.125rem",
        marginLeft: "3.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        animation: "fadeIn 2s",
        "@media (max-width:567px)": {
            marginLeft: 0,
            marginTop: "1rem",
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
        "@media (max-width: 767px)": {
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
})

export const Home = ({ details }) => {
    const classes = useStyles()
    const { hero, curatedCreators, featuredProjects } = details
    const [featuredCardsDetails, setFeaturedCardsDetails] = useState([])
    const [totalCategories, setTotalCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState(null)

    useEffect(() => {
        const result = featuredProjects.slice(0, 8)
        setFeaturedCardsDetails(result)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [details])

    const setProjectInitially = () => {
        if (featuredProjects) {
            const tempCategory = []
            // eslint-disable-next-line react/prop-types
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
            // eslint-disable-next-line react/prop-types
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
        height: "100vh",
    }
    return (
        <>
            <Box className={classes.wrapper}>
                <HeaderWrapper isScrollDetect={!activeCategory} featuredCardsDetails={featuredCardsDetails} />

                {activeCategory ? (
                    <HeaderCategory categoryName={activeCategory} />
                ) : (
                    <Slider {...settings}>
                        {hero &&
                            // eslint-disable-next-line react/prop-types
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
                                                <Typography className={classes.subtitle}>{item.subtitle}</Typography>
                                                {/* <Link href="/signup"> */}
                                                <CustomButton label="Sign Up" exteranlclass={classes.bigSignup} />
                                                {/* </Link> */}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </Slider>
                )}
                <ContentWrapper>
                    <>
                        <SelectingCategories
                            category={activeCategory}
                            categories={totalCategories}
                            changeTab={(e) => handleTab(e)}
                        />
                        {activeCategory ? (
                            <Box className={classes.resultsContainer}>
                                <Typography className={classes.results}>4 results </Typography>
                            </Box>
                        ) : (
                            " "
                        )}
                        {!activeCategory && <Typography className={classes.headings}>Featured Projects</Typography>}
                        <FeaturedCard featuredCardsDetails={featuredCardsDetails} />
                        {!activeCategory && (
                            <>
                                <Typography className={classes.headings}>Curated creators</Typography>
                                <CreationCard curatedCreators={curatedCreators} />{" "}
                            </>
                        )}
                    </>
                </ContentWrapper>
                <Footer />
                {/* <MobileFooter /> */}
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

Home.defaultProps = {
    details: {},
}

Home.propTypes = {
    details: PropTypes.shape(propsValidation),
}
export default Home
