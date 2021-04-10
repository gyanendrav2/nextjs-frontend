import { Box, Checkbox, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { CheckedIcon } from "../../../components/icons/checkedIcon"
import { SquareIcon } from "../../../components/icons/squareIcon"
import { colors } from "../../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.white,
    },
    title: {
        paddingLeft: "0.5rem",
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
            <Typography variant="h6" className={classes.title}>
                Notifications
            </Typography>

            <Box className={classes.radioboxWrapper}>
                <Box className={classes.radioboxContainer}>
                    <Checkbox
                        className={classes.checkBoxStyles}
                        checkedIcon={<CheckedIcon />}
                        icon={<SquareIcon />}
                        color="default"
                        inputProps={{ "aria-label": "checkbox with default color" }}
                        disableRipple
                    />

                    {/* <Checkbox
                        className={classes.checkBoxStyles}
                        disableRipple
                        color="default"
                        checked={item.checked}
                        icon={<SquareIcon />}
                        checkedIcon={<CheckedIcon />}
                    /> */}
                    <Typography className={classes.checkboxText}>Receive notifications on project likes</Typography>
                </Box>
                <Box className={classes.radioboxContainer}>
                    <Checkbox
                        className={classes.checkBoxStyles}
                        checkedIcon={<CheckedIcon />}
                        icon={<SquareIcon />}
                        color="default"
                        inputProps={{ "aria-label": "checkbox with default color" }}
                        disableRipple
                    />
                    <Typography className={classes.checkboxText}>Receive notifications on new followers</Typography>
                </Box>
                <Box className={classes.radioboxContainer}>
                    <Checkbox
                        className={classes.checkBoxStyles}
                        checkedIcon={<CheckedIcon />}
                        icon={<SquareIcon />}
                        color="default"
                        inputProps={{ "aria-label": "checkbox with default color" }}
                        disableRipple
                    />
                    <Typography className={classes.checkboxText}>
                        Receive notifications on project participation requests
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
