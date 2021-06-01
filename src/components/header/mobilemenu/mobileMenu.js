import React from "react"
import PropTypes from "prop-types"
import { useRouter } from "next/router"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import classnames from "classnames"
import { colors } from "../../../theme/colors"
import { images } from "../../../assets/images"
import CustomButton from "../../buttons/customButton"
import { InputWithLabelIcon } from "../../inputs/inputWithLabelIcon"
import { NotificationBellIcon } from "../../icons/notificationBellIcon"
import { mobileNavOptions } from "../../../data/headerMenuList"
import { SearchIcon } from "../../icons/searchIcon"
import { CloseIconBig } from "../../icons/closeIconBig"
import { UserProfileNav } from "../../cards/userProfileNav"

const useStyles = makeStyles({
    wrapper: {
        position: "fixed",
        left: "25%",
        top: 0,
        height: "100vh",
        width: "75%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        zIndex: 100,
        "@media (min-width: 768px)": {
            display: "none",
        },
    },
    menuWrapper: {
        width: "100%",
    },
    title: {
        color: colors.white,
        marginLeft: "1rem",
    },
    img: {
        width: "1.5rem",
        marginRight: "1rem",
    },
    unorderedList: {
        padding: 0,
        display: "flex",
        alignItems: "flex-start",
        marginTop: "6rem",
        textAlign: "center",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
    },
    listStyle: {
        display: "flex",
        width: "100%",
        marginBottom: "3.125rem",
        color: colors.white,
    },
    NotificationButton: {
        padding: 0,
        marginRight: "2.75rem",
        "@media (max-width:500px)": {
            marginLeft: "0.5rem",
            marginRight: "0.5rem",
        },
    },
    closeIcon: {
        fontSize: "2rem",
        color: (props) => (props.menuIconColor ? props.menuIconColor : colors.white),
        "@media (max-width:500px)": {
            marginRight: "-1rem",
            marginLeft: "0.5rem",
        },
    },
    show: {
        transform: "translateX(0)",
        transition: "all 1s",
    },
    hide: {
        transform: "translateX(100%)",
        transition: "all 1s",
    },
    contentWrapper: {
        width: "100%",
        backgroundColor: colors.black,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "0rem 1.5rem 1.5rem 1.5rem",
        marginTop: "-0.5rem",
    },
    headerWrapper: {
        justifyContent: "space-between",
    },
    autoWidth: {
        width: "auto",
    },
    roundImage: {
        borderRadius: "50%",
        marginRight: "0.5rem",
        marginTop: "0.1rem",
        width: "2.625rem",
        height: "2.625rem",
    },
    username: {
        marginLeft: "1rem",
        color: colors.white,
        fontSize: "1rem",
        lineHeight: "1.3rem",
    },
    input: {
        backgroundColor: "transparent",
        padding: "0.3rem 0",
        borderRadius: "1px",
        "& input": {
            backgroundColor: "transparent",
            color: colors.white,
            borderColor: `${colors.lightGray}!important`,
        },
        "& svg": {
            marginTop: "0.3rem",
            color: colors.white,
            fontSize: "1.7rem",
        },
    },
    button: {
        backgroundColor: colors.white,
        borderRadius: 1,
        textTransform: "capitalize",
        padding: "0.437rem 1.5rem",
        height: "2.5rem",
        "&:hover": {
            backgroundColor: colors.pink,
        },
    },
    shadowbg: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100vh",
        zIndex: 6,
        backgroundColor: "rgba(0,0,0,0.5)",
        animation: "fadeIn 1s linear",
    },
})

export const MobileMenu = ({ toggleMenu, onClose }) => {
    const classes = useStyles()
    const routes = useRouter()

    const routeSettings = () => {
        routes.push("/upload-work")
    }
    // const handleRoute = (item) => {
    //     routes.push(item.pathname)
    // }

    return (
        <>
            <Box className={classnames(classes.wrapper, toggleMenu ? classes.show : classes.hide)}>
                <Box className={classes.contentWrapper}>
                    <Grid container className={classes.headerWrapper}>
                        <UserProfileNav userName="Brandon" profileImg={images.brandon} />
                        <Grid container alignItems="center" justifycontent="space-around" className={classes.autoWidth}>
                            <Box className={classes.NotificationButton}>
                                <NotificationBellIcon activecolor={colors.pink} className={classes.icon} />
                            </Box>
                            <Box className={classes.closeButton} onClick={onClose}>
                                <CloseIconBig className={classes.closeIcon} />
                            </Box>
                        </Grid>
                    </Grid>
                    <Box className={classes.menuWrapper}>
                        <ul className={classes.unorderedList}>
                            {mobileNavOptions.map((item, i) => (
                                <li key={i} className={classes.listStyle}>
                                    {item.icon}
                                    <Typography className={classes.title} onClick={() => routes.push(item.pathname)}>
                                        {item.name}
                                    </Typography>
                                </li>
                            ))}
                            <li className={classes.listStyle}>
                                <InputWithLabelIcon
                                    name=""
                                    placeholder="Search"
                                    placeholderColor={colors.lightGray}
                                    icon={<SearchIcon />}
                                    externalclass={classes.input}
                                />
                            </li>
                            <li className={classes.listStyle}>
                                <CustomButton className={classes.button} label="Upload work" onClick={routeSettings} />
                            </li>
                        </ul>
                    </Box>
                </Box>
            </Box>
            {toggleMenu && <Box className={classnames({ [classes.shadowbg]: toggleMenu })} onClick={onClose} />}
        </>
    )
}

MobileMenu.defaultProps = {
    toggleMenu: false,
    onClose: () => {},
}

MobileMenu.propTypes = {
    toggleMenu: PropTypes.bool,
    onClose: PropTypes.func,
}
