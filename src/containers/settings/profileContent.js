import { Box, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import classnames from "classnames"
import { InputWithLabelIcon } from "../../components/inputs/inputWithLabelIcon"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.white,
        padding: "2rem",
        "@media(max-width:576px)": {
            padding: "1rem",
        },
    },
    title: {
        marginBottom: "2rem",
        // marginLeft: "-1.5rem",
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
        "@media(max-width:575px)": {
            width: "100%",
        },
    },
})

export const ProfileContent = () => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <Typography variant="h6" className={classes.title}>
                Profile
            </Typography>
            <Typography className={classes.inputLabel}>Account Email</Typography>
            <InputWithLabelIcon placeholder="Email" name="username" externalclass={classes.inputStyles} />
            <Typography className={classnames(classes.inputLabel, classes.changeTypo)}>Change Password</Typography>
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
