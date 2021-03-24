import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { icons } from "../../assets/icons";
import { colors } from "../../theme/colors";
import classnames from "classnames";
import Link from "next/link";
import CopyrightIcon from "@material-ui/icons/Copyright";

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
        fontSize: "1.2rem",
        marginRight: "0.5rem",
    },
});

const MobileFooter = () => {
    const classes = useStyles();
    return (
        <Box className={classnames(classes.mobilefooterWrapper)}>
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
                    <img className={classnames(classes.itemPadding, classes.Images)} alt="fb" src={icons.Fb}></img>
                </Link>
                <Link href="/">
                    <img
                        className={classnames(classes.itemPadding, classes.Images)}
                        alt="Insta"
                        src={icons.Insta}></img>
                </Link>
                <Link href="/">
                    <img
                        className={classnames(classes.itemPadding, classes.Images)}
                        alt="Linked In"
                        src={icons.Linkedin}></img>
                </Link>
            </Box>
            <Link href="/">
                <Box>
                    <Typography className={classnames(classes.itemPadding, classes.copyRightcontainer)}>
                        <CopyrightIcon className={classes.copyrightIcon} />
                        Copyright PXL
                    </Typography>
                </Box>
            </Link>
        </Box>
    );
};

export default MobileFooter;
