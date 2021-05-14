import React, { useState } from "react"
import PropTypes from "prop-types"
import { Box, Grid, makeStyles } from "@material-ui/core"
import Link from "next/link"
import { useRouter } from "next/router"
import { HeadItem } from "./headItem"
import CustomButton from "../buttons/customButton"
import { icons } from "../../assets/icons"
import { colors } from "../../theme/colors"
import { images } from "../../assets/images"
import { UserProfileNav } from "../cards/userProfileNav"

const useStyles = makeStyles({
    header: {
        position: "fixed",
        display: "flex",
        width: "100%",
        zIndex: 99,
        paddingLeft: "2rem",
        paddingRight: "2rem",
        justifyContent: "space-between",
        backgroundColor: (props) => (props.bgcolor ? props.bgcolor : "transparent"),
        // transition: "all 0.2s",
        "@media (max-width:767px)": {
            visibility: "hidden",
            display: "none",
        },
    },
    button: {
        height: "2.5rem",
        backgroundColor: (props) => (props.color ? props.color : colors.white),
        color: (props) => (props.color === colors.white ? colors.black : colors.white),
    },
    logo: {
        height: "3rem",
        marginTop: "1.4rem",
        cursor: "pointer",
        margin: "1.4rem auto 1rem 2.5rem",
        "@media(min-width:768px) and (max-width:1024px)": {
            marginLeft: "2rem",
        },
        "@media(max-width:767px)": {
            marginLeft: "1rem",
        }
    },
    rightPart: {
        width: "auto",
    },
    uploadBtn: {
        backgroundColor: colors.white,
        borderRadius: 1,
        textTransform: "capitalize",
        padding: "0.437rem 1.5rem",
        height: "2.5rem",
        marginRight: "2.5rem",
        marginLeft: "2.5rem",
        "&:hover": {
            backgroundColor: colors.pink,
        },
        "@media(min-width:768px) and (max-width:1024px)": {
            marginRight: "2rem",
        },
        "@media(max-width:767px)": {
            marginRight: "1rem",
        }
    },
    UserProfileNav: {
        cursor: "pointer",
    },
})

export const Header = ({ color, bgcolor, NavItemOptions, isAuthenticated }) => {
    const classes = useStyles({ color, bgcolor })
    const router = useRouter()
    const [hoveredActive, setHoverdActive] = useState(null)
    const [showProfilenavcard, setShowProfilenavcard] = useState(false)

    const handleHoveredItem = (item) => {
        if (!hoveredActive) {
            setHoverdActive(item.pathname)
        }
    }
    const handleUserProfileNav = () => {
        setShowProfilenavcard(!showProfilenavcard)
    }
    const routeSettings = () => {
        router.push("/upload-work")
    }

    return (
        <Box className={classes.header}>
            <Link href="/">
                <img
                    className={classes.logo}
                    src={color === colors.white ? icons.logoWhite : icons.logoBlack}
                    alt="PXL-logo"
                />
            </Link>
            <Grid container alignItems="center" justifycontent="flex-end" className={classes.rightPart}>
                {NavItemOptions.map((item, index) => {
                    return (
                        <HeadItem
                            key={index}
                            id={item.id}
                            color={color}
                            isAuthenticated={isAuthenticated}
                            name={item.name}
                            routeName={item.pathname}
                            active={router.pathname === item.pathname}
                            handleMouseHover={() => handleHoveredItem(item)}
                            handleMouseLeave={() => setHoverdActive(null)}
                            icon={item.icon}
                        />
                    )
                })}
                {!isAuthenticated && (
                    <CustomButton
                        label="Sign up"
                        externalclass={classes.button}
                        onClick={() => router.push("/signup")}
                    />
                )}
                {isAuthenticated && (
                    <UserProfileNav
                        userName="Brandon"
                        profileImg={images.brandon}
                        externalclass={classes.UserProfileNav}
                        onClick={handleUserProfileNav}
                    />
                )}
                {isAuthenticated && (
                    <CustomButton className={classes.uploadBtn} label="Upload work" onClick={routeSettings} />
                )}
            </Grid>
        </Box>
    )
}

Header.defaultProps = {
    color: "",
    bgcolor: "",
    NavItemOptions: [],
    isAuthenticated: false,
}

Header.propTypes = {
    color: PropTypes.string,
    bgcolor: PropTypes.string,
    NavItemOptions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            pathname: PropTypes.string,
        })
    ),
    isAuthenticated: PropTypes.bool,
}
