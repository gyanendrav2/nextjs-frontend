import React, { useState } from "react"
// import PropTypes from "prop-types"
import { Avatar, Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { SelectWithLabelIcon } from "../../../components/inputs/selectWithLabelIcon"
import { InputWithLabelIcon } from "../../../components/inputs/inputWithLabelIcon"
import { images } from "../../../assets/images"
import { TextArea } from "../../../components/inputs/textArea"
import { colors } from "../../../theme/colors"
import { accountsLinks } from "../../../data/accountsLinks"
import { AccountsLinks } from "../../../components/cards/accountsLinks"
import { ConvertVideoOrPhoto } from "./convertVideoOrPhoto"
import { CancelSave } from "./cancelSave"
import AddIcon from "../../../components/icons/addIcon"
import { ChipCards } from "../../../components/cards/chipCards"
import { roleOptions } from "../../../data/roles"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.white,
        padding: "2rem",
    },
    avatar: {
        width: "8.5rem",
        height: "8.5rem",
    },
    col1: {
        width: "11.125rem",
        position: "relative",
        "@media(max-width:720px)": {
            width: "100%",
            marginBottom: "2rem",
        },
    },
    addIcon: {
        position: "absolute",
        top: "6rem",
        left: "6rem",
    },
    col2: {
        width: "calc(100% - 11.125rem)",
        "@media(max-width:720px)": {
            width: "100%",
        },
    },
    title: {
        marginBottom: "2rem",
    },
})

export const AccountInformation = () => {
    const classes = useStyles()
    const [roles, setRoles] = useState(["Director assistant", "Producer"])
    const handleRoles = (e) => {
        const data = [...roles]
        data.push(e.target.value)
        setRoles(data)
    }
    const handleChipItemDelete = (i) => {
        const data = [...roles]
        data.splice(i, 1)
        setRoles(data)
    }
    return (
        <>
            <Box className={classes.wrapper}>
                <Typography variant="h6" className={classes.title}>
                    ACCOUNT INFORMATION
                </Typography>
                <Grid container alignItems="flex-start" justify="flex-start">
                    <Box className={classes.col1}>
                        <Avatar className={classes.avatar} src={images.maskGroup} />
                        <AddIcon className={classes.addIcon} />
                    </Box>
                    <Box className={classes.col2}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <InputWithLabelIcon labelColor={colors.lightGray} label="First Name" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <InputWithLabelIcon labelColor={colors.lightGray} label="Last Name" />
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <SelectWithLabelIcon
                                        labelColor={colors.lightGray}
                                        label="Add a role"
                                        options={roleOptions}
                                        onChange={handleRoles}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <ChipCards chips={roles} onDelete={handleChipItemDelete} />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <SelectWithLabelIcon labelColor={colors.lightGray} label="Choose country" />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <SelectWithLabelIcon labelColor={colors.lightGray} label="Choose city" />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <TextArea
                                    labelColor={colors.lightGray}
                                    placeholder="Describe yourself"
                                    label="Choose city"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Typography>Accounts and links</Typography>
                                {accountsLinks.map((item) => (
                                    <AccountsLinks icon={item.icon} />
                                ))}
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
            <ConvertVideoOrPhoto />
            <CancelSave />
        </>
    )
}

AccountInformation.propTypes = {}
