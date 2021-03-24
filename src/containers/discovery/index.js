import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SelectingCategories from "./featuredProjects";
import CreationCard from "./curatedProjects";
import FeaturedCards from "./featuredProjects/Card";
import Footer from "../../components/footer";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { colors } from "../../theme/colors";
import PropTypes from "prop-types";
import CustomButton from "../../components/buttons/customButton";
import MobileFooter from "../../components/footer/mobileFooter";
import HeaderWrapper from "../../components/header/headerWrapper";
import HeaderCategory from "../../components/header/headerCategory";
import Link from "next/link";
import ContentWrapper from "../../components/contentWrapper/contentWrapper";

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
        fontWeight: 800,
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
    header: {
        position: "relative",
        display: "flex",
        justifyContent: "flex-end",
        "@media (max-width:567px)": {
            visibility: "hidden",
        },
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
    signUp: {
        backgroundColor: colors.black,
        border: "none",
        padding: "0.5rem 1rem",
        width: "6.25rem",
        fontSize: "1rem",
        outline: "none",
        cursor: "pointer",
        color: colors.white,
        marginTop: "1.5rem",
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
    menuIcon: {
        fontSize: "2rem",
        color: colors.white,
    },
    mobileNavWrapper: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 2,
        "@media (min-width:767px)": {
            display: "none",
        },
    },
    mobileLogo: {
        width: "3rem",
        marginLeft: "1rem",
    },
    contentWrapper: {
        marginLeft: "2rem",
        marginRight: "2rem",
        "@media (max-width:767px)": {
            marginLeft: "1rem",
            marginRight: "1rem",
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
});

export const Discovery = ({ details }) => {
    const classes = useStyles();
    const { hero, curatedCreators, featuredProjects } = details;
    const [featuredCardsDetails, setFeaturedCardsDetails] = useState([]);
    const [totalCategories, setTotalCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        if (featuredProjects) {
            const tempCategory = [];
            // eslint-disable-next-line react/prop-types
            featuredProjects.forEach((item) => {
                if (!tempCategory.includes(item.category)) {
                    tempCategory.push(item.category);
                }
            });
            setTotalCategories(tempCategory);
        }
    }, [featuredProjects]);

    const LengthHandler = (details) => {
        if (details.length > 9) {
            setFeaturedCardsDetails(details.slice(0, 8));
        } else {
            setFeaturedCardsDetails(details.slice(0, details.length));
        }
    };
    const handleTab = (name) => {
        setActiveCategory(name);
        let details;
        if (name !== "More") {
            // eslint-disable-next-line react/prop-types
            details = featuredProjects.filter((each) => each["category"] === name);
            LengthHandler(details);
        } else if (name === "More") {
            details = [...featuredProjects];
            LengthHandler(details);
        }
    };

    useEffect(() => {
        // eslint-disable-next-line react/prop-types
        const details = featuredProjects.slice(0, 8);
        setFeaturedCardsDetails(details);
    }, []);

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
    };
    return (
        <>
            <Box className={classes.wrapper}>
                <HeaderWrapper
                    isScrollDetect={activeCategory ? false : true}
                    featuredCardsDetails={featuredCardsDetails}
                />

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
                                            style={{ backgroundImage: `url(${item.backgroundImage})` }}>
                                            <div className={classes.messageWrapper}>
                                                <Typography className={classes.title}>
                                                    {item.titleLines[0]}
                                                    <span className={classes.pinkSquare}></span>
                                                </Typography>

                                                <br />
                                                <Typography className={classes.title}>
                                                    {item.titleLines[1]}
                                                    <span className={classes.pinkSquare}></span>
                                                </Typography>
                                                <br />
                                                <Typography className={classes.title}>
                                                    {item.titleLines[2]}
                                                    <span className={classes.pinkSquare}></span>
                                                </Typography>
                                                <Typography className={classes.subtitle}>{item.subtitle}</Typography>
                                                {/* <Link href="/signup"> */}
                                                    <CustomButton label="Sign Up" externalClass={classes.bigSignup} />
                                                {/* </Link> */}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </Slider>
                )}
                <ContentWrapper>
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
                    <FeaturedCards featuredCardsDetails={featuredCardsDetails} />
                    {!activeCategory && (
                        <>
                            <Typography className={classes.headings}>Curated creators</Typography>
                            <CreationCard curatedCreators={curatedCreators} />{" "}
                        </>
                    )}
                </ContentWrapper>
                <Footer />
                {/* <MobileFooter /> */}
            </Box>
        </>
    );
};

const propsValidation = {
    hero: PropTypes.shape(
        PropTypes.shape({
            backgroundImage: PropTypes.string,
            subtitle: PropTypes.string,
            titleLines: PropTypes.arrayOf([PropTypes.string]),
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
};

Discovery.propTypes = {
    details: PropTypes.shape(
        PropTypes.shape({
            ...propsValidation,
        }).isRequired
    ),
};

SelectingCategories.prototype = {
    details: PropTypes.shape(
        PropTypes.shape({
            ...propsValidation,
        }).isRequired
    ),
};
export default Discovery;
