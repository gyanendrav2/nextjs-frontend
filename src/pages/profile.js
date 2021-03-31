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
import { icons } from "../assets/icons"
import { ModalComponent } from "../components/modal/modalComponent"
import { UserInfo } from "../containers/profile/userInfo"
import { MessageBox } from "../containers/profile/messageBox"
import { SelectWithLabelIcon } from "../components/inputs/selectWithLabelIcon"

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
        "@media (max-width:768px)": {
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
        padding: "1.25rem",
        "@media (min-width:768px)": {
            display: "none",
        },
    },
    cardContainer: {
        "@media (max-width:768px)": {
            paddingLeft: "1.25rem",
            paddingRight: "1.25rem",
        },
    },
    selectCategoryText: {
        display: "none",
        marginBottom: "1.25rem",
        "@media (max-width:768px)": {
            display: "block",
            paddingLeft: "1.25rem",
            paddingRight: "1.25rem",
        },
    },
    userProfilecardStyles: {
        "@media (max-width:575px)": {
            padding: "1rem",
        },
        messageBoxStyles: {
            marginRight: "1rem",
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

    return (
        <>
            <HeaderWrapper isScrollDetect={false} />
            <ModalComponent openOrNot={openInfo} onClose={handleInfo}>
                <UserInfo />
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
                                image={images.maskGroup}
                                name="Brandon Landing"
                                userName="@veritas_z"
                                followers="15"
                                following="20"
                                position="Director assistant, producer"
                                location="USA, Ohio"
                                bio="I’m this awesome and cool as hell director from the states. Producing is my other passion.This is additional text, this is additional text,this is additional text,this is additional text,this is additional text,this is additional text "
                                externalclass={classes.userProfilecardStyles}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={7} lg={7} xl={7} className={classes.videoStyles}>
                            <ReactPlayer
                                width="100%"
                                height="100%"
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
                        />
                    </Box>
                    <Box className={classes.selectCategoryText}>
                        <Typography className={classnames(classes.boldText)}>{selectedCategory}</Typography>
                    </Box>
                    <Grid container spacing={2} className={classes.cardContainer}>
                        {[1, 1, 1, 1, 1, 1, 1, 1].map((item, idx) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                                    <CardWithFooter
                                        image="https://source.unsplash.com/random?fp=0"
                                        title="dummy data"
                                        hideFooter
                                        showMoreButton
                                        handleClick={() => {
                                            // setOpenModal(true);
                                        }}
                                    />
                                </Grid>
                            )
                        })}
                    </Grid>
                </>
            </ContentWrapper>

            <ContentWrapper externalclass={classes.report}>
                <>
                    <Grid container dispaly="flex" alignItems="center" justify="flex-start">
                        <img src={icons.reportContentIcon} alt="" />
                        <Typography>Report user</Typography>
                    </Grid>
                </>
            </ContentWrapper>
            <Footer externalclass={classes.footer} />
        </>
    )
}

Profile.propTypes = {}

export default Profile
