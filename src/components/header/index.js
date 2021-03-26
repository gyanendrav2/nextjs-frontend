import React, { useState } from "react"
import PropTypes from "prop-types"
import { Box, Grid, makeStyles } from "@material-ui/core"
import Link from "next/link"
import { useRouter } from "next/router"
import HeadItem from "./headItem"
import CustomButton from "../buttons/customButton"
import { icons } from "../../assets/icons"
import { colors } from "../../theme/colors"
import { images } from "../../assets/images"

const useStyles = makeStyles({
    header: {
        position: "fixed",
        display: "flex",
        width: "100%",
        zIndex: 2,
        paddingLeft: "2rem",
        paddingRight: "2rem",
        justifyContent: "space-between",
        backgroundColor: (props) => (props.bgColor ? props.bgColor : "transparent"),
        transition: "all 0.2s",
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
    },
    rightPart: {
        width: "auto",
    },
})

const Header = ({ color, bgColor, NavItemOptions }) => {
    const classes = useStyles({ color, bgColor })
    const router = useRouter()
    const [hoveredActive, setHoverdActive] = useState(null)

    const handleHoveredItem = (item) => {
        if (!hoveredActive) {
            setHoverdActive(item.pathname)
        }
    }

    const getIconType = (item) => {
        if (item.pathname === hoveredActive) {
            return item.iconPink
        }
        if (color === colors.white) {
            return item.iconWhite
        }
        return item.iconBlack
    }

    return (
        <Box className={classes.header}>
            <Link href="/">
                <img
                    className={classes.logo}
                    src={color === colors.white ? icons.logoWhite : images.logoImage}
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
                            name={item.name}
                            routeName={item.pathname}
                            active={router.pathname === item.pathname}
                            handleMouseHover={() => handleHoveredItem(item)}
                            handleMouseLeave={() => setHoverdActive(null)}
                            icon={getIconType(item)}
                        />
                    )
                })}
                {/* <Link href="/signup"> */}
                <CustomButton label="Sign up" exteranlclass={classes.button} />
                {/* </Link> */}
            </Grid>
        </Box>
    )
}

Header.defaultProps = {
    color: "",
    bgColor: "",
    NavItemOptions: [],
}

Header.propTypes = {
    color: PropTypes.string,
    bgColor: PropTypes.string,
    NavItemOptions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            pathname: PropTypes.string,
        }).isRequired
    ),
}

export default Header
