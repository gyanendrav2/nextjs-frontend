import React from "react"
import { Box, Checkbox, Grid, makeStyles, Typography } from "@material-ui/core"
import { colors } from "../../theme/colors"
import { images } from "../../assets/images"
import CheckBoxIcon from "../icons/checkBoxIcon"

const useStyles = makeStyles({
    wrapper: {
        height: "100%",
        paddingLeft: "2.4rem",
        backgroundImage: `url(${images.SigninWall})`,
        backgroundSize: "100% 100%",
        position: "relative",
        zIndex: "0",
        width: "100%",
    },
    titleWrapper: {
        marginLeft: "-0.4rem",
        marginTop: "5.5rem",
    },
    title: {
        backgroundColor: colors.black,
        fontFamily: "Helvetica",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "4.375rem",
        lineHeight: "4.675rem",
        letterSpacing: "2px",
        color: colors.white,
        marginBottom: "0.5rem",
        display: "inline-block",
        paddingLeft: "0.5rem",
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
        // marginTop: "3rem",
    },
    radioboxContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    checkboxText: {
        fontSize: "0.9rem",
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
                            className={classes.checkBoxStyles}
                            checkedIcon={<CheckBoxIcon />}
                            icon={<span className="icon-square" />}
                            inputProps={{ "aria-label": "checkbox with default color" }}
                        />
                        <Typography className={classes.checkboxText}>Use smart search to find inspiration</Typography>
                    </Box>
                </Box>
            </Box>
        </Grid>
    )
}

LeftSide.propTypes = {}

export default LeftSide
