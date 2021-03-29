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
        "@media (max-width:768px)": {
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
        "@media (max-width:768px)": {
            padding: "0.8rem 0.5rem 0.8rem 1rem",
            cursor: "pointer",
        },
    },
    firstChild: {
        paddingTop: "2rem",
    },
    copyRightcontainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
    },
    copyrightIcon: {
        marginRight: "0.5rem",
    },
})

export const MobileFooter = ({ exteranlclass }) => {
    const classes = useStyles()
    return (
        <Box className={classnames(classes.mobilefooterWrapper, exteranlclass)}>
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
                    <Typography className={classnames(classes.itemPadding, classes.copyRightcontainer)}>
                        <CopyrightIcon width={16} height={16} className={classes.copyrightIcon} />
                        Copyright PXL
                    </Typography>
                </Box>
            </Link>
        </Box>
    )
}

MobileFooter.defaultProps = {
    exteranlclass: "",
}

MobileFooter.propTypes = {
    exteranlclass: PropTypes.string,
}
