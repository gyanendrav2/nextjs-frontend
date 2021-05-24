/* eslint-disable max-lines */
import React, { useState } from "react"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import classnames from "classnames"
import { images } from "../assets/images"
import { colors } from "../theme/colors"

const HeaderWrapper = dynamic(() => import("../components/header/headerWrapper"))
const UserProfileCard = dynamic(() => import("../components/cards/userProfileCard"))
const AddCategory = dynamic(() => import("../containers/userProfile/addCategory"))
const MessageBox = dynamic(() => import("../containers/profile/messageBox"))
const CardWithFooter = dynamic(() => import("../components/cards/cardWithFooter"))
const SelectWithLabelIcon = dynamic(() => import("../components/inputs/selectWithLabelIcon"))
const Footer = dynamic(() => import("../components/footer"))
const NotificationCard = dynamic(() => import("../components/cards/notificationCard"))
const ModalComponent = dynamic(() => import("../components/modal/modalComponent"))
const UserInfo = dynamic(() => import("../containers/profile/userInfo"))
const Adder = dynamic(() => import("../components/cards/adder"))
const ContentWrapper = dynamic(() => import("../components/contentWrapper/contentWrapper"))
const ReportContent = dynamic(() => import("../components/reportContentWrapper/reportContent"))
const PenIcon = dynamic(() => import("../components/icons/penIcon"))
const EyeClosedIcon = dynamic(() => import("../components/icons/eyeClosedIcon"))
const EyeOpenIcon = dynamic(() => import("../components/icons/eyeOpenIcon"))
const ReactPlayer = dynamic(() => import("react-player"))

const useStyles = makeStyles({
    wrapper: {
        overflow: "hidden",
    },
    profileHeader: {
        marginBottom: "3.5rem",
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
        paddingTop: 0,
        "@media (max-width:1024px)": {
            paddingTop: "2rem",
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
        "& svg": {
            transform: "translateY(0.625rem)",
        },
        "@media(max-width:890px)": {
            marginRight: "2rem",
        },
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
    },
    footer: {
        marginTop: "0!important",
    },

    selectCategories: {
        paddingTop: "1.1rem",
        "@media (min-width:768px)": {
            display: "none",
        },
    },
    cardContainer: {},
    selectedCategoryStyles: {
        color: colors.red,
    },
    selectCategoryText: {
        display: "none",
        marginBottom: "1.25rem",
    },
    userProfilecardStyles: {
        "@media (max-width:767px)": {
            padding: "1rem!important",
        },
        "@media (min-width:768px) and (max-width:1024px)": {
            marginLeft: "2rem",
            marginRight: "2rem",
            marginTop: "1rem",
        },
    },
    addCategoryButton: {
        fontSize: "1.375rem",
        lineHeight: "2.125rem",
        textAlign: "right",
        userSelect: "none",
        cursor: "pointer",
        fontWeight: 900,
        marginBottom: "1.5rem",
        "&:hover": {
            color: colors.pink,
        },
        "@media (max-width:890px)": {
            textAlign: "left",
        },
        "@media (max-width:767px)": {
            textAlign: "left",
        },
    },
    hiddenCategory: {
        userSelect: "none",
        cursor: "pointer",
        fontSize: "1rem",
        textDecoration: "underline",
        fontWeight: 400,
        marginBottom: "3.625rem",
        marginTop: "2.5rem",
        "& svg": {
            transform: "translateY(0.3rem)",
        },
        "&:hover": {
            color: colors.pink,
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
    videoWrapper: {
        paddingTop: "7.5rem",
        overflowX: "hidden",
        "@media (max-width:1024px)": {
            paddingLeft: "0!important",
            paddingRight: "0!important",
            paddingTop: "3.5rem",
        },
    },
})

const Profile = () => {
    const classes = useStyles()
    const { query } = useRouter()
    const { showNotification } = query
    const [openInfo, setOpenInfo] = useState(false)
    const [openMsg, setOpenMsg] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState("All (6)")
    const [hiddenCategory, setHiddenCategory] = useState(false)
    const [notification, setNotification] = useState(true)
    const [hideNotification, setHideNotification] = useState(false)
    const [categories, setCategories] = useState([
        { value: "All (6)", label: "All (6)", active: true },
        { value: "Directing (3)", label: "Directing (3)", active: false },
        { value: "Production (3)", label: "Production (3)", active: false },
    ])

    const [data, setData] = useState([
        { id: 0, image: "https://source.unsplash.com/random?fp=0", title: "dummy data" },
        { id: 1, image: "https://source.unsplash.com/random?fp=1", title: "dummy data" },
        { id: 2, image: "https://source.unsplash.com/random?fp=2", title: "dummy data" },
        { id: 3, image: "https://source.unsplash.com/random?fp=3", title: "dummy data" },
        { id: 4, image: "https://source.unsplash.com/random?fp=4", title: "dummy data" },
        { id: 5, image: "https://source.unsplash.com/random?fp=5", title: "dummy data" },
    ])
    const [hideData, setHideData] = useState([])
    const [addCategory, setAddCategory] = useState(false)

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

    const handleUnhide = (i) => {
        const tempData = [...hideData]
        const tempHideData = tempData[i]
        tempData.splice(i, 1)
        setHideData(tempData)
        const unhideData = [...data]
        unhideData.splice(tempHideData.id, 0, tempHideData)
        setData(unhideData)
    }

    const handleHide = (i) => {
        const tempHideData = [...hideData]
        tempHideData.push(data[i])
        setHideData(tempHideData)
        const tempData = [...data]
        tempData.splice(i, 1)
        setData(tempData)
        setHideNotification(true)
    }
    const handleAddCategory = () => {
        setAddCategory(!addCategory)
    }

    const handleAddNewCategory = (category) => {
        const newCategory = [...categories]
        newCategory.push(category)
        setCategories(newCategory)
        handleAddCategory()
    }

    return (
        <>
            {showNotification && (
                <NotificationCard
                    message="Your work has been successfully deleted!"
                    isVisible={notification}
                    timeout={4000}
                    hideButton
                    handleHideNotification={() => setNotification(!notification)}
                />
            )}
            {hideNotification && (
                <NotificationCard
                    message="You have successfully hidden the project."
                    isVisible={notification}
                    timeout={4000}
                    hideButton
                    handleHideNotification={() => setHideNotification(!hideNotification)}
                />
            )}
            <HeaderWrapper isAuthenticated isScrollDetect={false} />
            <ModalComponent openOrNot={openInfo} onClose={handleInfo}>
                <UserInfo />
            </ModalComponent>
            <ModalComponent padding="0" openOrNot={addCategory} onClose={handleAddCategory}>
                <AddCategory onAddCategory={handleAddNewCategory} closeAddcategory={handleAddCategory} />
            </ModalComponent>
            <ModalComponent openOrNot={openMsg} onClose={handleMsg}>
                <MessageBox />
            </ModalComponent>
            <ContentWrapper externalclass={classes.videoWrapper}>
                <Grid container spacing={2} className={classes.profileHeader}>
                    <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
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
                            bio="I’m this awesome and cool as hell director from the states. Producing is my other passion.This is additional text, this is additional text,this is additional text,this is additional text,this is additional text,this is additional text "
                            externalclass={classes.userProfilecardStyles}
                            ownProfile
                        />
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
            </ContentWrapper>
            <ContentWrapper externalclass={classes.wrapper}>
                <>
                    <Grid container alignItems="center" justify="flex-start" className={classes.category}>
                        {categories.map((item, i) => (
                            <Typography
                                key={i}
                                style={{ marginBottom: "1.5rem" }}
                                className={classnames(classes.boldText, {
                                    [classes.activeCategory]: item.active,
                                })}
                                onClick={() => handleCategory(i)}>
                                {item.label} <PenIcon />
                            </Typography>
                        ))}
                    </Grid>
                    <Box className={classes.selectCategories}>
                        <SelectWithLabelIcon
                            options={categories}
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            externalclass={classes.selectedCategoryStyles}
                        />
                    </Box>
                    <Box className={classes.selectCategoryText}>
                        <Typography className={classnames(classes.boldText)}>{selectedCategory}</Typography>
                    </Box>
                    <Typography className={classes.addCategoryButton} onClick={handleAddCategory}>
                        Add category section +
                    </Typography>
                    <Grid container spacing={2} className={classes.cardContainer}>
                        <Grid item xs={12} sm={12} md={6} lg={3} xl={3} className={classes.adderContainer}>
                            <Adder onAddClick={() => {}} />
                        </Grid>
                        {data.map((item, i) => {
                            return (
                                <Grid item xs={12} sm={12} md={6} lg={3} key={i}>
                                    <CardWithFooter
                                        image={item.image}
                                        title={item.title}
                                        hideFooter
                                        hideText="Hide"
                                        showMoreButton
                                        handleHide={() => handleHide(i)}
                                    />
                                </Grid>
                            )
                        })}
                    </Grid>
                    <Typography className={classes.hiddenCategory} onClick={() => setHiddenCategory(!hiddenCategory)}>
                        {hiddenCategory ? <EyeOpenIcon /> : <EyeClosedIcon />} You have {hideData.length} hidden project
                    </Typography>
                    <Grid container spacing={2} className={classes.cardContainer}>
                        {hiddenCategory &&
                            hideData.map((item, i) => {
                                return (
                                    <Grid item xs={12} sm={12} md={6} lg={3} key={i}>
                                        <CardWithFooter
                                            image={item.image}
                                            title={item.title}
                                            hideFooter
                                            categoryHidden
                                            showMoreButton
                                            handleHide={() => handleUnhide(i)}
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
