import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Box, IconButton, makeStyles } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import Link from "next/link"
import { Header } from ".."
import { icons } from "../../../assets/icons"
import { loggedInUserNav, mobileNavOptions, NavItemOptions } from "../../../data/headerMenuList"
import { colors } from "../../../theme/colors"
import { MobileMenu } from "../mobilemenu/mobileMenu"

const useStyles = makeStyles({
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
    menuIcon: {
        fontSize: "2rem",
        // color: (props) => (props.mobileMenuIconColor ? props.mobileMenuIconColor : colors.white),
        color: colors.white,
    },
})

export const HeaderWrapper = ({ isScrollDetect, mobileMenuIconColor, mobileLogoType, isAuthenticated }) => {
    const classes = useStyles({ mobileMenuIconColor })
    const [scrollTop, setScrollTop] = useState(0)
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {
        const onScroll = (e) => {
            setScrollTop(e.target.documentElement.scrollTop)
        }
        if (isScrollDetect) {
            if (typeof window !== "undefined") {
                window.addEventListener("scroll", onScroll)
            }
        }

        return () => {
            if (isScrollDetect) {
                if (typeof window !== "undefined") {
                    window.removeEventListener("scroll", onScroll)
                }
            }
        }
    }, [scrollTop, isScrollDetect])

    const shouldDark = () => {
        if (!isScrollDetect) {
            return colors.black
        }
        if (scrollTop > 534) {
            return colors.black
        }
    }
    const textColor = () => {
        if (!isScrollDetect) {
            return colors.white
        }
        if (scrollTop > 534) {
            return colors.white
        }
        return colors.black
    }

    const getLogo = () => {
        if (isScrollDetect && !mobileLogoType) {
            if (scrollTop > 534) {
                return icons.logoWhite
            }
            return icons.logoBlack
        }
        return icons.logoWhite
    }

    return (
        <>
            <Header
                color={textColor()}
                bgcolor={shouldDark()}
                NavItemOptions={isAuthenticated ? loggedInUserNav : NavItemOptions}
                isAuthenticated={isAuthenticated}
            />
            <Box style={{ backgroundColor: shouldDark() }} className={classes.mobileNavWrapper}>
                <Link href="/">
                    <img src={getLogo()} className={classes.mobileLogo} alt="logo" />
                </Link>
                <IconButton className={classes.menuIconButton} onClick={() => setMobileMenu(true)}>
                    <MenuIcon className={classes.menuIcon} />
                </IconButton>
            </Box>
            <MobileMenu
                menuIconColor={mobileMenuIconColor}
                toggleMenu={mobileMenu}
                menuList={mobileNavOptions}
                onClose={() => setMobileMenu(false)}
            />
        </>
    )
}

HeaderWrapper.defaultProps = {
    isScrollDetect: () => {},
    mobileMenuIconColor: "",
    mobileLogoType: undefined,
    isAuthenticated: false,
}

HeaderWrapper.propTypes = {
    isScrollDetect: PropTypes.bool,
    mobileMenuIconColor: PropTypes.string,
    mobileLogoType: PropTypes.string,
    isAuthenticated: PropTypes.bool,
}
