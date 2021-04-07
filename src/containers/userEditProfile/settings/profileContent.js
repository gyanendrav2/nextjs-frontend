import { Box, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { InputWithLabelIcon } from "../../../components/inputs/inputWithLabelIcon"
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
    inputStyles: {
        color: colors.black,
    },
})

export const ProfileContent = () => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <Typography className={classes.title}>Profile</Typography>
            <Typography>Account Email</Typography>
            <InputWithLabelIcon
                placeholder="Email"
                label="Account Email"
                name="username"
                // inputRegister={register}
                // errorMsg={errors.username}
                externalclass={classes.inputStyles}
            />
            <Typography>Change Password</Typography>
            <InputWithLabelIcon
                placeholder="Insert current password"
                // name="username"
                // inputRegister={register}
                // errorMsg={errors.username}
                externalclass={classes.inputStyles}
            />
            <InputWithLabelIcon
                placeholder="Insert new password"
                // name="username"
                // inputRegister={register}
                // errorMsg={errors.username}
                externalclass={classes.inputStyles}
            />
            <InputWithLabelIcon
                placeholder="Repeat new password"
                // name="username"
                // inputRegister={register}
                // errorMsg={errors.username}
                externalclass={classes.inputStyles}
            />
        </Box>
    )
}
