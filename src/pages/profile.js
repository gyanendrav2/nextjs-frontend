/* eslint-disable max-lines */
import React, { useState } from "react"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import ReactPlayer from "react-player"
import classnames from "classnames"
import { ContentWrapper } from "../components/contentWrapper/contentWrapper"
import { HeaderWrapper } from "../components/header/headerWrapper"
import { UserProfileCard } from "../components/cards/userProfileCard"
import { images } from "../assets/images"
import { CardWithFooter } from "../components/cards/cardWithFooter"
import { Footer } from "../components/footer"
import { colors } from "../theme/colors"
import { ModalComponent } from "../components/modal/modalComponent"
import { UserInfo } from "../containers/profile/userInfo"
import { MessageBox } from "../containers/profile/messageBox"
import { SelectWithLabelIcon } from "../components/inputs/selectWithLabelIcon"
import { PenIcon } from "../components/icons/penIcon"
import { EyeClosedIcon } from "../components/icons/eyeClosedIcon"
import { EyeOpenIcon } from "../components/icons/eyeOpenIcon"
import { ReportContent } from "../components/reportContentWrapper/reportContent"
import { AddCategory } from "../containers/userProfile/addCategory"
import { Adder } from "../components/cards/adder"
import { useRouter } from "next/router"
import { NotificationCard } from "../components/cards/notificationCard"

const useStyles = makeStyles({
    wrapper: {
        paddingTop: "7rem",
        "@media (min-width:766px) and (max-width:959px)": {
            paddingTop: "5.5rem",
        },
        "@media (max-width:766px)": {
            paddingTop: "3.5rem",
            paddingLeft: 0,
            paddingRight: 0,
        },
    },
    profileHeader: {
        marginBottom: "1.5rem",
        "@media (max-width:959px)": {
            flexDirection: "column-reverse",
            marginBottom: 0,
        },
    },
    videoStyles: {
        "@media(max-width:959px)": {
            height: "15.5rem",
        },
    },
    category: {
        padding: "2rem 0",
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
        backgroundColor: colors.lightGray,
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
        padding: "1.25rem 1rem",
        "@media (min-width:767px)": {
            display: "none",
        },
    },
    cardContainer: {
        "@media (max-width:767px)": {
            paddingLeft: "1rem",
            paddingRight: "1rem",
        },
    },
    selectedCategoryStyles: {
        color: colors.red,
    },
    selectCategoryText: {
        display: "none",
        marginBottom: "1.25rem",
        "@media (max-width:767px)": {
            display: "block",
            paddingLeft: "1rem",
            paddingRight: "1rem",
        },
    },
    userProfilecardStyles: {
        // messageBoxStyles: {
        //     marginRight: "1rem",
        // },
        "@media (max-width:575px)": {
            padding: "1rem!important",
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
            paddingLeft: "1rem",
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
        "@media (max-width:767px)": {
            height: "15.5rem",
        },
    },
})

const User = () => {
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
            <ModalComponent openOrNot={addCategory} onClose={handleAddCategory}>
                <AddCategory onAddCategory={handleAddNewCategory} closeAddcategory={handleAddCategory} />
            </ModalComponent>
            <ModalComponent openOrNot={openMsg} onClose={handleMsg}>
                <MessageBox />
            </ModalComponent>
            <ContentWrapper externalclass={classes.wrapper}>
                <>
                    <Grid container spacing={2} className={classes.profileHeader}>
                        <Grid item sx={12} sm={12} md={5} lg={5} xl={5}>
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
                        <Grid item xs={12} sm={12} md={7} lg={7} xl={7} className={classes.videoStyles}>
                            <ReactPlayer
                                width="100%"
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
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.adderContainer}>
                            <Adder onAddClick={() => {}} />
                        </Grid>
                        {data.map((item, i) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
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
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
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

User.propTypes = {}

export default User
