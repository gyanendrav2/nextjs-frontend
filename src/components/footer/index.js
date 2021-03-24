import React from "react";
import PropTypes from "prop-types";
import { icons } from "../../assets/icons";
import { Box, makeStyles, Typography, Grid } from "@material-ui/core";
import { colors } from "../../theme/colors";
import CopyrightIcon from "@material-ui/icons/Copyright";
import Link from "next/link";
import MobileFooter from "./mobileFooter";
import classnames from "classnames";
import ContentWrapper from "../contentWrapper/contentWrapper";

const useStyles = makeStyles({
    footer: {
        height: "6.25rem",
        display: "flex",
        marginTop: " 2.5rem",
        alignItems: "center",
        // padding: "0 2.5rem 0 2.5rem",
        backgroundColor: colors.black,
        fontSize: "1rem",
        justifyContent: " space-between",
        flexWrap: "wrap",
        "@media (min-width:768px) and (max-width:967px)": {
            height: "9.5rem",
            width: "100%",
            alignItems: "center!important",
        },
        "@media(max-width:768px)": {
            display: "none!important",
        },
    },
    titles: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        "@media (min-width:768px) and (max-width:967px)": {
            alignItems: "flex-start",
        },
    },
    spec: {
        marginRight: " 2.5rem",
        cursor: "pointer",
        color: colors.white,
        "@media (min-width:768px) and (max-width:967px)": {
            marginLeft: "3.5rem",
        },
    },
    name: {
        margin: "0 1.25rem",
        cursor: "pointer",
        color: colors.white,
    },
    Images: {
        marginLeft: "1.5rem",
        cursor: "pointer",
        "@media (max-width:768px)": {
            padding: "0.625rem",
            alignItems: "center",
        },
    },
    Images_: {
        display: "flex",
    },
    copyRightcontainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        "@media (min-width:768px) and (max-width:967px)": {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column-reverse",
        },
    },
    aboutusContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "row",
        "@media (min-width:768px) and (max-width:967px)": {
            paddingBottom: "1.5rem",
            marginLeft: "-1.6rem",
            marginTop: "1.7rem",
            alignItems: "flex-start",
            justifyContent: "flex-start",
        },
    },
    copyright: {
        fontSize: "1rem",
        color: colors.white,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        "& span": {
            fontSize: "2rem",
        },
        "@media (min-width:768px) and (max-width:967px)": {
            marginLeft: "-0.5rem",
        },
    },
    copyrightIcon: {
        fontSize: "1.2rem",
        marginRight: "0.5rem",
    },
});
const Footer = ({ externalClass }) => {
    const classes = useStyles();
    return (
        <>
            <ContentWrapper contaier externalClass={classnames(classes.footer, externalClass)}>
                <Grid item sm={6} md={10} lg={10}>
                    <Grid container className={classes.copyRightcontainer}>
                        <Link href="/">
                            <Grid item md={3} lg={3} className={classes.copyRightcontainer}>
                                <Typography className={classes.copyright}>
                                    <CopyrightIcon className={classes.copyrightIcon} />
                                    Copyright PXL
                                </Typography>
                            </Grid>
                        </Link>
                        <Grid item md={9} lg={9} className={classes.aboutusContainer}>
                            <Link href="/">
                                <Typography className={classes.name}>About us</Typography>
                            </Link>
                            <Link href="/">
                                <Typography className={classes.spec}>Privacy and cookie policy</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={6} md={2} lg={2} className={classes.titles}>
                    <Box className={classes.Images_}>
                        <Link href="/">
                            <img className={classes.Images} alt="fb" src={icons.fb}></img>
                        </Link>
                        <Link href="/">
                            <img className={classes.Images} alt="Insta" src={icons.insta}></img>
                        </Link>
                        <Link href="/">
                            <img className={classes.Images} alt="Linked In" src={icons.linkedin}></img>
                        </Link>
                    </Box>
                </Grid>
            </ContentWrapper>
            <MobileFooter />
        </>
    );
};
Footer.propTypes = {
    externalClass: PropTypes.string,
};

export default Footer;
