import React from "react"
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

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.white,
        padding: "2rem",
    },
    col1: {
        width: "11.125rem",
    },
    col2: {
        width: "calc(100% - 11.125rem)",
    },
})

export const AccountInformation = () => {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.wrapper}>
                <Typography>ACCOUNT INFORMATION</Typography>
                <Grid container alignItems="center" justify="flex-start">
                    <Box className={classes.col1}>
                        <Avatar src={images.maskGroup} />
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
                                    <SelectWithLabelIcon labelColor={colors.lightGray} label="Add a role" />
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
