import { Box, Checkbox, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { CheckBoxIcon } from "../../../components/icons/checkBoxIcon"
import { colors } from "../../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.white,
    },
    title: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: "0.875rem",
        lineHeight: "1rem",
        color: colors.lighterGray,
        textAlign: "left",
        paddingLeft: "1rem",
        paddingTop: "1rem",
    },
    radioboxWrapper: {
        margin: "1rem 0 0 0",
    },
    radioboxContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    checkBoxStyles: {
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
    },
})

export const NotificationContent = () => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <Typography className={classes.title}>Notifications</Typography>

            <Box className={classes.radioboxWrapper}>
                <Box className={classes.radioboxContainer}>
                    <Checkbox
                        className={classes.checkBoxStyles}
                        checkedIcon={<CheckBoxIcon />}
                        icon={<span className="icon-square" />}
                        inputProps={{ "aria-label": "checkbox with default color" }}
                        disableRipple
                    />
                    <Typography className={classes.checkboxText}>Receive notifications on project likes</Typography>
                </Box>
                <Box className={classes.radioboxContainer}>
                    <Checkbox
                        color="default"
                        disableRipple
                        className={classes.checkBoxStyles}
                        checkedIcon={<CheckBoxIcon />}
                        icon={<span className="icon-square" />}
                        inputProps={{ "aria-label": "checkbox with default color" }}
                    />
                    <Typography className={classes.checkboxText}>Receive notifications on new followers</Typography>
                </Box>
                <Box className={classes.radioboxContainer}>
                    <Checkbox
                        color="default"
                        disableRipple
                        className={classes.checkBoxStyles}
                        checkedIcon={<CheckBoxIcon />}
                        icon={<span className="icon-square" />}
                        inputProps={{ "aria-label": "checkbox with default color" }}
                    />
                    <Typography className={classes.checkboxText}>
                        Receive notifications on project participation requests
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
