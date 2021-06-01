import { Box, Checkbox, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { CheckedIcon } from "../../components/icons/checkedIcon"
import { SquareIcon } from "../../components/icons/squareIcon"
import { colors } from "../../theme/colors"
import { CancelSave } from "../userEditProfile/accountInformation/cancelSave"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.white,
        padding: "2rem",
        border: `1px solid ${colors.lightGray}`,
        "@media(max-width:575px)": {
            padding: "1rem",
        },
    },
    title: {
        "@media(max-width:1024px)": {
            padding: "0",
        },
    },
    radioboxWrapper: {
        margin: "1rem 0 0 0",
    },
    checkboxContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: "-0.5rem",
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

const NotificationContent = () => {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.wrapper}>
                <Typography variant="h6" className={classes.title}>
                    Notifications
                </Typography>

                <Box className={classes.radioboxWrapper}>
                    <Box className={classes.checkboxContainer}>
                        <Checkbox
                            className={classes.checkBoxStyles}
                            checkedIcon={<CheckedIcon />}
                            icon={<SquareIcon />}
                            color="default"
                            inputProps={{ "aria-label": "checkbox with default color" }}
                        />
                        <Typography className={classes.checkboxText}>Receive notifications on project likes</Typography>
                    </Box>
                    <Box className={classes.checkboxContainer}>
                        <Checkbox
                            className={classes.checkBoxStyles}
                            checkedIcon={<CheckedIcon />}
                            icon={<SquareIcon />}
                            color="default"
                            inputProps={{ "aria-label": "checkbox with default color" }}
                        />
                        <Typography className={classes.checkboxText}>Receive notifications on new followers</Typography>
                    </Box>
                    <Box className={classes.checkboxContainer}>
                        <Checkbox
                            className={classes.checkBoxStyles}
                            checkedIcon={<CheckedIcon />}
                            icon={<SquareIcon />}
                            color="default"
                            inputProps={{ "aria-label": "checkbox with default color" }}
                        />
                        <Typography className={classes.checkboxText}>
                            Receive notifications on project participation requests
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <CancelSave />
        </>
    )
}

export default NotificationContent
