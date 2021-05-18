import React from "react"
import PropTypes from "prop-types"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import classnames from "classnames"
import Link from "next/link"
import { CopyrightIcon } from "../icons/copyrightIcon"
import { colors } from "../../theme/colors"
import { icons } from "../../assets/icons"

const useStyles = makeStyles({
    mobilefooterWrapper: {
        display: "none",
        "@media (max-width:767px)": {
            height: "16.375rem",
            marginTop: "2.5rem",
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            color: colors.white,
            backgroundColor: colors.black,
        },
    },
    itemPadding: {
        "@media (max-width:767px)": {
            padding: "0.8rem 0.5rem 0.8rem 1rem",
            cursor: "pointer",
        },
    },
    firstChild: {
        paddingTop: "2rem",
    },
    copyRight: {
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
    },
    copyrightIcon: {
        fontSize: "1.2rem",
        marginRight: "0.5rem",
        marginTop: "0.55rem",
    },
})

export const MobileFooter = ({ externalclass }) => {
    const classes = useStyles()
    return (
        <Box className={classnames(classes.mobilefooterWrapper, externalclass)}>
            <Link href="/">
                <Grid className={classnames(classes.itemPadding, classes.firstChild)}>
                    <Typography>About us</Typography>
                </Grid>
            </Link>
            <Link href="/">
                <Typography className={classes.itemPadding}>Privacy and cookie policy</Typography>
            </Link>
            <Box>
                <Link href="/">
                    <img className={classnames(classes.itemPadding, classes.Images)} alt="fb" src={icons.fb} />
                </Link>
                <Link href="/">
                    <img className={classnames(classes.itemPadding, classes.Images)} alt="Insta" src={icons.insta} />
                </Link>
                <Link href="/">
                    <img
                        className={classnames(classes.itemPadding, classes.Images)}
                        alt="Linked In"
                        src={icons.linkedin}
                    />
                </Link>
            </Box>
            <Link href="/">
                <Box>
                    <Typography className={classnames(classes.itemPadding, classes.copyRight)}>
                        <CopyrightIcon width={12} height={22} className={classes.copyrightIcon} />
                        Copyright PXL
                    </Typography>
                </Box>
            </Link>
        </Box>
    )
}

MobileFooter.defaultProps = {
    externalclass: "",
}

MobileFooter.propTypes = {
    externalclass: PropTypes.string,
}
