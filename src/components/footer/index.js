import React from "react"
import PropTypes from "prop-types"
import { Box, makeStyles, Typography, Grid } from "@material-ui/core"
import Link from "next/link"
import classnames from "classnames"
import { MobileFooter } from "./mobileFooter"
import { colors } from "../../theme/colors"
import { icons } from "../../assets/icons"
import { ContentWrapper } from "../contentWrapper/contentWrapper"
import { CopyrightIcon } from "../icons/copyrightIcon"

export const useStyles = makeStyles({
    footer: {
        height: "6.25rem",
        display: "flex",
        marginTop: " 3.5rem",
        alignItems: "center",
        backgroundColor: colors.black,
        fontSize: "1rem",
        justifyContent: " space-between",
        flexWrap: "wrap",
        "@media (min-width:576px) and (max-width:781px)": {
            height: "9.5rem",
            width: "100%",
            alignItems: "center!important",
        },
        "@media(max-width:600px)": {
            display: "none!important",
        },
    },
    titles: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        "@media (min-width:576px) and (max-width:781px)": {
            alignItems: "flex-start",
        },
    },
    spec: {
        marginRight: " 6rem",
        cursor: "pointer",
        color: colors.white,
        "@media (min-width:576px) and (max-width:781px)": {
            marginLeft: "1.5rem",
            marginRight: "1rem",
        },
    },
    name: {
        margin: "auto 3.437rem",
        cursor: "pointer",
        color: colors.white,
        "@media (min-width:576px) and (max-width:781px)": {
            margin: "0rem",
            marginLeft: "3.2rem",
        },
    },
    Images: {
        margin: "auto auto auto 1.5rem",
        cursor: "pointer",
        "@media (max-width:781px)": {
            margin: "auto auto auto 0.5rem",
            padding: "0.625rem",
            alignItems: "center",
        },
    },
    footerImage: {
        display: "flex",
        "@media(min-width:576px) and (max-width:781px)": {
            marginBottom: "2rem",
        },
    },
    copyRightcontainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        "@media (min-width:576px) and (max-width:781px)": {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column-reverse",
            // marginLeft: "0.5rem",
        },
    },
    aboutusContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "row",
        "@media (min-width:576px) and (max-width:781px)": {
            paddingBottom: "1rem",
            marginLeft: "-2.7rem",
            marginTop: "1rem",
            alignItems: "flex-start",
            justifyContent: "flex-start",
        },
    },
    copyright: {
        fontSize: "1rem",
        color: colors.white,
        lineHeight: "1.375rem",
        display: "flex",
        alignItems: "center",
        fontFamily: "Helvetica",
        justifyContent: "flex-start",
        "& span": {
            fontSize: "2rem",
        },
        "@media (min-width:576px) and (max-width:781px)": {
            marginLeft: "0.5rem",
            minWidth: "10rem",
        },
    },
    copyrightIcon: {
        fontSize: "1.2rem",
        marginRight: "0.5rem",
        marginTop: "0.55rem",
    },
})
export const Footer = ({ exteranlclass }) => {
    const classes = useStyles()
    return (
        <>
            <ContentWrapper contaier exteranlclass={classnames(classes.footer, exteranlclass)}>
                <>
                    <Grid item sm={10} md={10} lg={10} container className={classes.copyRightcontainer}>
                        {/* <Grid container> */}

                        <Grid item sm={3} md={3} lg={3}>
                            <Link href="/">
                                <Typography className={classes.copyright}>
                                    <CopyrightIcon width={12} height={22} className={classes.copyrightIcon} />
                                    Copyright PXL
                                </Typography>
                            </Link>
                        </Grid>

                        <Grid item sm={9} md={9} lg={9} className={classes.aboutusContainer}>
                            <Link href="/">
                                <Typography className={classes.name}>About us</Typography>
                            </Link>
                            <Link href="/">
                                <Typography className={classes.spec}>Privacy and cookie policy</Typography>
                            </Link>
                        </Grid>
                        {/* </Grid> */}
                    </Grid>

                    <Grid item sm={2} md={2} lg={2} className={classes.titles}>
                        <Box className={classes.footerImage}>
                            <Link href="/">
                                <img className={classes.Images} alt="fb" src={icons.fb} />
                            </Link>
                            <Link href="/">
                                <img className={classes.Images} alt="Insta" src={icons.insta} />
                            </Link>
                            <Link href="/">
                                <img className={classes.Images} alt="Linked In" src={icons.linkedin} />
                            </Link>
                        </Box>
                    </Grid>
                </>
            </ContentWrapper>
            <MobileFooter exteranlclass={exteranlclass} />
        </>
    )
}

Footer.defaultProps = {
    exteranlclass: "",
}

Footer.propTypes = {
    exteranlclass: PropTypes.string,
}
