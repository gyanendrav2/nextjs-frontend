import { Box, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import classnames from "classnames"
import { InputWithLabelIcon } from "../../components/inputs/inputWithLabelIcon"
import { colors } from "../../theme/colors"
import { CancelSave } from "../userEditProfile/accountInformation/cancelSave"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.white,
        padding: "2rem",
        "@media(max-width:767px)": {
            padding: "1.25rem",
        },
    },
    title: {
        marginBottom: "2rem",
    },
    inputLabel: {
        fontWeight: "bold",
        fontSize: "1rem",
        lineHeight: "1.374rem",
        marginBottom: "0.5rem",
    },
    changeTypo: {
        marginTop: "2rem",
    },
    inputStyles: {
        color: colors.black,
        //  width: "20.187rem",
        width: "50%",
        "@media(max-width:767px)": {
            width: "100%",
        },
    },
})

const ProfileContent = () => {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.wrapper}>
                <Typography variant="h6" className={classes.title}>
                    Profile
                </Typography>
                <Typography className={classes.inputLabel}>Account Email</Typography>
                <InputWithLabelIcon
                    placeholder="Email"
                    // name="email"
                    placeholderColor={colors.lighterGray}
                    externalclass={classes.inputStyles}
                />
                <Typography className={classnames(classes.inputLabel, classes.changeTypo)}>Change Password</Typography>
                <InputWithLabelIcon
                    placeholder="Insert current password"
                    placeholderColor={colors.lighterGray}
                    // name="username"
                    // inputRegister={register}
                    // errorMsg={errors.username}
                    externalclass={classes.inputStyles}
                />
                <InputWithLabelIcon
                    placeholder="Insert new password"
                    placeholderColor={colors.lighterGray}
                    // name="username"
                    // inputRegister={register}
                    // errorMsg={errors.username}
                    externalclass={classes.inputStyles}
                />
                <InputWithLabelIcon
                    placeholder="Repeat new password"
                    placeholderColor={colors.lighterGray}
                    // name="username"
                    // inputRegister={register}
                    // errorMsg={errors.username}
                    externalclass={classes.inputStyles}
                />
            </Box>
            <CancelSave />
        </>
    )
}

export default ProfileContent
