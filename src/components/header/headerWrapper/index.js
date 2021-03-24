import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "..";
import { Box, IconButton, makeStyles } from "@material-ui/core";
import { icons } from "../../../assets/icons";
import { mobileNavOptions, NavItemOptions } from "../../../data/headerMenuList";
import { colors } from "../../../theme/colors";
import MobileMenu from "../../../components/header/mobilemenu/MobileMenu";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";

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
        color: (props) => (props.mobileMenuIconColor ? props.mobileMenuIconColor : colors.white),
    },
});

const HeaderWrapper = ({ isScrollDetect, mobileMenuIconColor, featuredCardsDetails }) => {
    const classes = useStyles({ mobileMenuIconColor });
    const [scrollTop, setScrollTop] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const onScroll = (e) => {
            setScrollTop(e.target.documentElement.scrollTop);
        };
        if (isScrollDetect) {
            window.addEventListener("scroll", onScroll);
        }

        return () => {
            if (isScrollDetect) {
                window.removeEventListener("scroll", onScroll);
            }
        };
    }, [scrollTop]);

    const shouldDark = () => {
        if (!isScrollDetect) {
            return colors.black;
        } else if (scrollTop > 534) {
            return colors.black;
        } else {
            colors.white;
        }
    };

    const textColor = () => {
        if (!isScrollDetect) {
            return colors.white;
        } else {
            if (scrollTop > 534) {
                return colors.white;
            } else {
                return colors.black;
            }
        }
    };

    return (
        <>
            <Header color={textColor()} bgColor={shouldDark()} NavItemOptions={NavItemOptions} />
            <Box style={{ backgroundColor: shouldDark() }} className={classes.mobileNavWrapper}>
                <Link href="/">
                    <img
                        src={scrollTop > 534 ? icons.logoWhite : icons.logoBlack}
                        className={classes.mobileLogo}
                        alt="logo"
                    />
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
                featuredCardsDetails={featuredCardsDetails}
            />
        </>
    );
};

HeaderWrapper.propTypes = {
    isScrollDetect: PropTypes.bool,
    mobileMenuIconColor: PropTypes.string,
    featuredCardsDetails: PropTypes.any,
};

export default HeaderWrapper;
