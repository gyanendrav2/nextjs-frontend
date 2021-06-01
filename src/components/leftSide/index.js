import React from "react"
import { Box, Checkbox, Grid, makeStyles, Typography } from "@material-ui/core"
import { colors } from "../../theme/colors"
import { images } from "../../assets/images"
import { CheckBoxIcon } from "../icons/checkBoxIcon"

const useStyles = makeStyles({
    wrapper: {
        height: "100%",
        backgroundImage: `url(${images.signinWall})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: "0",
    },
    titleWrapper: {
        paddingTop: "6rem",
        paddingLeft: "2.5rem",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
    },
    title: {
        backgroundColor: colors.black,
        fontFamily: "Forno-Trial",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "4.375rem",
        lineHeight: "4.675rem",
        letterSpacing: "2px",
        color: colors.white,
        marginBottom: "0.5rem",
        display: "inline-block",
        padding: "0.3rem 0rem 0.3rem 0.5rem",
        "& span": {
            display: "inline-block",
            width: "0.812rem",
            height: "0.812rem",
            backgroundColor: colors.pink,
            transform: "translateX(-16px)",
        },
    },
    radioboxWrapper: {
        margin: "2rem 0 0 0",
    },
    radioboxContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    checkBoxStyles: {
        fontSize: "1rem",
        "&.MuiIconButton-root": {
            "&:hover": {
                backgroundColor: "unset",
            },
        },
        "&.MuiIconButton-colorSecondary": {
            "&:hover": {
                backgroundColor: "unset",
            },
        },
    },
    checkboxText: {
        fontSize: "0.9rem",
        marginLeft: "1rem",
    },
    projectAuthor: {
        marginTop: "6.5rem",
        fontFamily: "Helvetica",
        fontSize: "1rem",
        lineHeight: "1.375rem",
        color: "#1B1B1B",
        opacity: "0.8",
        "@media(max-width:1024px)": {
            bottom: "2.25rem",
        },
    },
    projectAuthorTitle: {
        textDecoration: "underline",
        cursor: "pointer",
    },
})

const LeftSide = () => {
    const classes = useStyles()
    return (
        <Grid container alignItems="center" justify="flex-start" className={classes.wrapper}>
            <Box className={classes.titleWrapper}>
                <Box className={classes.titlesContainer}>
                    <Typography className={classes.title}>
                        Show work <span />
                    </Typography>
                    <br />
                    <Typography className={classes.title}>
                        Network <span />
                    </Typography>
                    <br />
                    <Typography className={classes.title}>
                        Get work <span />
                    </Typography>
                </Box>
                <Box className={classes.radioboxWrapper}>
                    <Box className={classes.radioboxContainer}>
                        <Checkbox
                            checked
                            className={classes.checkBoxStyles}
                            checkedIcon={<CheckBoxIcon />}
                            icon={<i className="icon-square" />}
                            inputProps={{ "aria-label": "checkbox with default color" }}
                        />
                        <Typography className={classes.checkboxText}>
                            Create personalised profile and upload your work
                        </Typography>
                    </Box>
                    <Box className={classes.radioboxContainer}>
                        <Checkbox
                            checked
                            className={classes.checkBoxStyles}
                            checkedIcon={<CheckBoxIcon />}
                            icon={<span className="icon-square" />}
                            inputProps={{ "aria-label": "checkbox with default color" }}
                        />
                        <Typography className={classes.checkboxText}>
                            Build your portfolio up by categories of your needs
                        </Typography>
                    </Box>
                    <Box className={classes.radioboxContainer}>
                        <Checkbox
                            checked
                            className={classes.checkBoxStyles}
                            checkedIcon={<CheckBoxIcon />}
                            icon={<span className="icon-square" />}
                            inputProps={{ "aria-label": "checkbox with default color" }}
                        />
                        <Typography className={classes.checkboxText}>Use smart search to find inspiration</Typography>
                    </Box>
                </Box>
                <Typography className={classes.projectAuthor}>
                    Work by:&nbsp;<span className={classes.projectAuthorTitle}>Jason Peterson</span>
                </Typography>
            </Box>
        </Grid>
    )
}

LeftSide.propTypes = {}

export default LeftSide
