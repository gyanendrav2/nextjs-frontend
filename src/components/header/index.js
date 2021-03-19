import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Grid, makeStyles } from "@material-ui/core";
import HeadItem from "./headItem";
import Link from "next/link";
import CustomButton from "../../ui/button/CustomButton";
import { icons } from "../../assets/icons";
import { colors } from "../../theme/colors";
import { images } from "../../assets/images";
import { useRouter } from "next/router";

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
});

const Header = ({ color, bgColor, NavItemOptions }) => {
    const classes = useStyles({ color, bgColor });
    const router = useRouter();
    const [hoveredActive, setHoverdActive] = useState(null);

    const handleHoveredItem = (item) => {
        if (!hoveredActive) {
            setHoverdActive(item.pathname);
        }
    };

    const getIconType = (item) => {
        if (item.pathname === hoveredActive) {
            return item.iconPink;
        } else {
            if (color === colors.white) {
                return item.iconWhite;
            } else {
                return item.iconBlack;
            }
        }
    };

    return (
        <Box className={classes.header}>
            <Link href="/">
                <img
                    className={classes.logo}
                    src={color === colors.white ? icons.LogoWhite : images.LogoImage}
                    LogoImage
                    alt="PXL-logo"
                />
            </Link>
            <Grid container alignItems="center" justifyContent="flex-end" className={classes.rightPart}>
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
                    );
                })}
                <Link href="/signup">
                    <CustomButton label="Sign up" externalClass={classes.button} />
                </Link>
            </Grid>
        </Box>
    );
};

Header.propTypes = {
    color: PropTypes.string,
    bgColor: PropTypes.string,
};

export default Header;
