import React from "react"
import PropTypes from "prop-types"
import { Avatar, Box, Grid, IconButton, makeStyles, Typography } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import classnames from "classnames"
import { colors } from "../../../theme/colors"
import { images } from "../../../assets/images"
import { CustomButton } from "../../buttons/customButton"
import { InputWithLabelIcon } from "../../inputs/inputWithLabelIcon"
import { NotificationBellIcon } from "../../icons/notificationBellIcon"
import { mobileNavOptions } from "../../../data/headerMenuList"
import { SearchIcon } from "../../icons/searchIcon"

const useStyles = makeStyles({
    wrapper: {
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        zIndex: 3,
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
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
    },
    listStyle: {
        display: "flex",
        alignItems: "left",
        width: "100%",
        marginBottom: "3.125rem",
    },
    closeButton: {
        padding: 0,
        marginLeft: "1.5rem",
        "@media (max-width:350px)": {
            marginLeft: "0.5rem",
        },
    },
    closeIcon: {
        fontSize: "2rem",
        color: (props) => (props.menuIconColor ? props.menuIconColor : colors.white),
    },
    icon: {
        fontSize: "2rem",
        color: colors.white,
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
        width: "80%",
        backgroundColor: colors.black,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "1rem 1.5rem 1.5rem 1.5rem",
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
        borderColor: colors.lightGray,
        "& input": {
            backgroundColor: "transparent",
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
})

export const MobileMenu = ({ toggleMenu, onClose }) => {
    const classes = useStyles()

    return (
        <Box className={classnames(classes.wrapper, toggleMenu ? classes.show : classes.hide)}>
            <Box className={classes.contentWrapper}>
                <Grid container alignItems="center" justifycontent="space-between" className={classes.headerWrapper}>
                    <Grid container alignItems="center" justifycontent="space-between" className={classes.autoWidth}>
                        <Avatar src={images.maskGroup} />
                        <Typography className={classes.username}>Brandon</Typography>
                    </Grid>
                    <Grid container alignItems="center" justifycontent="space-around" className={classes.autoWidth}>
                        <IconButton className={classes.closeButton} onClick={onClose}>
                            <NotificationBellIcon activecolor={colors.pink} className={classes.icon} />
                        </IconButton>
                        <IconButton className={classes.closeButton} onClick={onClose}>
                            <CloseIcon className={classes.icon} />
                        </IconButton>
                    </Grid>
                </Grid>
                <Box className={classes.menuWrapper}>
                    <ul className={classes.unorderedList}>
                        {mobileNavOptions.map((item, i) => (
                            <li key={i} className={classes.listStyle}>
                                {item.icon}
                                <Typography className={classes.title}>{item.name}</Typography>
                            </li>
                        ))}
                        <li className={classes.listStyle}>
                            <InputWithLabelIcon
                                name=""
                                placeholder="Search"
                                icon={<SearchIcon />}
                                exteranlclass={classes.input}
                            />
                        </li>
                        <li className={classes.listStyle}>
                            <CustomButton
                                wantFile
                                allowMultiple
                                onFileChange={(e) => console.log(e.target.files)}
                                className={classes.button}
                                label="Upload work"
                                type="file"
                            />
                        </li>
                    </ul>
                </Box>
            </Box>
        </Box>
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
