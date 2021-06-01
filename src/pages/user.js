import React, { useState } from "react"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import dynamic from "next/dynamic"
import classnames from "classnames"
import { images } from "../assets/images"
import { colors } from "../theme/colors"

const Footer = dynamic(() => import("../components/footer"))
const MessageBox = dynamic(() => import("../containers/profile/messageBox"))
const SelectWithLabelIcon = dynamic(() => import("../components/inputs/selectWithLabelIcon"))
const ReactPlayer = dynamic(() => import("react-player"))
const CardWithFooter = dynamic(() => import("../components/cards/cardWithFooter"))
const ModalComponent = dynamic(() => import("../components/modal/modalComponent"))
const ReportContent = dynamic(() => import("../components/reportContentWrapper/reportContent"))
const HeaderWrapper = dynamic(() => import("../components/header/headerWrapper"))
const ContentWrapper = dynamic(() => import("../components/contentWrapper/contentWrapper"))
const UserInfo = dynamic(() => import("../containers/profile/userInfo"))
const UserProfileCard = dynamic(() => import("../components/cards/userProfileCard"))

const useStyles = makeStyles({
    wrapper: {
        paddingTop: "7rem",
        overflowX: "hidden",
        "@media(min-width:768px) and (max-width:1024px)": {
            paddingTop: "5.5rem",
            paddingLeft: "0!important",
            paddingRight: "0!important",
        },
        "@media(max-width:767px)": {
            paddingTop: "3.5rem",
            paddingLeft: "0!important",
            paddingRight: "0!important",
        },
    },
    profileHeader: {
        marginBottom: "1.5rem",
        "@media (max-width:1024px)": {
            flexDirection: "column-reverse",
            marginBottom: 0,
        },
    },
    videoStyles: {
        "@media(max-width:1024px)": {
            height: "25.25rem",
        },
        "@media(max-width:767px)": {
            height: "15.5rem",
        },
    },
    category: {
        padding: "2rem 0",
        "@media (min-width:768px) and (max-width:1024px)": {
            padding: "0 2rem",
        },
        "@media (max-width:767px)": {
            display: "none",
        },
    },
    boldText: {
        fontFamily: "Forno-Trial",
        fontWeight: 900,
        fontSize: "2rem",
        lineHeight: "2.75rem",
        marginRight: "4rem",
        cursor: "pointer",
    },
    activeCategory: {
        color: colors.pink,
    },
    report: {
        marginTop: "3.5rem",
        backgroundColor: `${colors.lighterPrimary}!important`,
        paddingTop: "1.812rem",
        paddingBottom: "1.812rem",
        "& p": {
            lineHeight: 0.7,
            marginLeft: "0.5rem",
        },
        "@media (min-width:768px) and (max-width:1024px)": {
            marginTop: "1rem",
        },
        "@media (max-width:767px)": {
            marginTop: "3.5rem",
        },
    },
    footer: {
        marginTop: "0!important",
    },
    selectCategories: {
        padding: "1.25rem",
        color: `${colors.lighterGray}!important`,
        "@media (min-width:768px)": {
            display: "none",
        },
    },
    cardContainer: {
        width: "100%",
        margin: 0,
        "@media (min-width:768px) and (max-width:1024px)": {
            padding: "2rem 1.5rem",
        },
        "@media (max-width:767px)": {
            paddingLeft: "1rem",
            paddingRight: "1rem",
        },
    },
    selectCategoryText: {
        display: "none",
        marginBottom: "1.25rem",
        "@media (max-width:767px)": {
            display: "block",
            paddingLeft: "1.25rem",
            paddingRight: "1.25rem",
        },
    },
    player: {
        height: "100%",
        "@media(min-width:768px) and (max-width:1024px)": {
            height: "25.25rem!important",
        },
        "@media(max-width:767px)": {
            height: "15.5rem!important",
        },
    },
    userCardstyle: {
        "@media(min-width:768px) and (max-width:1024px)": {
            padding: "0.75rem 2rem 0.75 2rem",
        },
    },
    itemWrapper: {
        "@media (max-width:767px)": {
            paddingLeft: "0!important",
            paddingRight: "0!important",
            paddingBottom: "1rem!important",
            "&:last-child": {
                paddingBottom: "0!important",
            },
        },
    },
})

const Profile = () => {
    const classes = useStyles()
    const [openInfo, setOpenInfo] = useState(false)
    const [openMsg, setOpenMsg] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState("All (6)")
    const [categories, setCategories] = useState([
        { value: "All (6)", label: "All (6)", active: true },
        { value: "Directing (3)", label: "Directing (3)", active: false },
        { value: "Production (3)", label: "Production (3)", active: false },
    ])

    const handleCategory = (i) => {
        const result = categories.map((item) => {
            return { ...item, active: false }
        })
        result[i].active = true
        setCategories(result)
    }

    const handleInfo = () => {
        setOpenInfo(!openInfo)
    }

    const handleMsg = () => {
        setOpenMsg(!openMsg)
    }
    const handleMsgClick = () => {
        handleInfo()
        handleMsg()
    }

    return (
        <>
            <HeaderWrapper isScrollDetect={false} />
            <ModalComponent padding="0" openOrNot={openInfo} onClose={handleInfo}>
                <UserInfo handleMsgClick={handleMsgClick} />
            </ModalComponent>
            <ModalComponent padding="0" openOrNot={openMsg} onClose={handleMsg}>
                <MessageBox />
            </ModalComponent>
            <ContentWrapper externalclass={classes.wrapper}>
                <>
                    <Grid container spacing={2} className={classes.profileHeader}>
                        <Grid item sx={12} sm={12} md={12} lg={5} xl={5}>
                            <Box className={classes.userCardstyle}>
                                <UserProfileCard
                                    onClickProfile={handleInfo}
                                    onMsgBtnClick={handleMsg}
                                    image={images.brandon}
                                    name="Brandon Landing"
                                    userName="@veritas_z"
                                    followers="15"
                                    following="20"
                                    position="Director assistant, producer"
                                    location="USA, Ohio"
                                    bio="I’m this awesome and cool as hell director from the states. Producing is my other passion.This is additional text, this is additional text,this is additional text,this is additional text,this is additional text,this is additional text. "
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={7} xl={7} className={classes.videoStyles}>
                            <ReactPlayer
                                width="100%"
                                height="100%"
                                className={classes.player}
                                controls
                                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                            />
                        </Grid>
                    </Grid>

                    <Grid container alignItems="center" justify="flex-start" className={classes.category}>
                        {categories.map((item, i) => (
                            <Typography
                                key={i}
                                className={classnames(classes.boldText, {
                                    [classes.activeCategory]: item.active,
                                })}
                                onClick={() => handleCategory(i)}>
                                {item.label}
                            </Typography>
                        ))}
                    </Grid>
                    <Box className={classes.selectCategories}>
                        <SelectWithLabelIcon
                            options={categories}
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            inputColor={colors.lighterGray}
                        />
                    </Box>
                    <Box className={classes.selectCategoryText}>
                        <Typography className={classnames(classes.boldText)}>{selectedCategory}</Typography>
                    </Box>
                    <Grid container spacing={2} className={classes.cardContainer}>
                        {[1, 1, 1, 1, 1, 1, 1, 1].map((item, idx) => {
                            return (
                                <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={6}
                                    lg={4}
                                    xl={3}
                                    key={idx}
                                    className={classes.itemWrapper}>
                                    <CardWithFooter
                                        image="https://source.unsplash.com/random?fp=0"
                                        title="Nike “Beginnings” commercial about key moments in James’ path  2020"
                                        hideFooter
                                        showMoreButton
                                        anonymous
                                        handleClick={() => {}}
                                    />
                                </Grid>
                            )
                        })}
                    </Grid>
                </>
            </ContentWrapper>

            <ContentWrapper externalclass={classes.report}>
                <ReportContent />
            </ContentWrapper>
            <Footer externalclass={classes.footer} />
        </>
    )
}

Profile.propTypes = {}

export default Profile
