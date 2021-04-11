import React, { useState } from "react"
import { Avatar, Box, Grid, makeStyles, Typography } from "@material-ui/core"
import classnames from "classnames"
import { SelectWithLabelIcon } from "../../../components/inputs/selectWithLabelIcon"
import { InputWithLabelIcon } from "../../../components/inputs/inputWithLabelIcon"
import { images } from "../../../assets/images"
import { TextArea } from "../../../components/inputs/textArea"
import { colors } from "../../../theme/colors"
import { accountsLinksData } from "../../../data/accountsLinks"
import { AccountsLinks } from "../../../components/cards/accountsLinks"
import { ConvertVideoOrPhoto } from "./convertVideoOrPhoto"
import { CancelSave } from "./cancelSave"
import AddIcon from "../../../components/icons/addIcon"
import { ChipCards } from "../../../components/cards/chipCards"
import { roleOptions } from "../../../data/roles"
import { SendDetailsModal } from "../../../components/modal/sendDetailsModal"
import { CustomButton } from "../../../components/buttons/customButton"
import { countryOptions, stateOptions } from "../../../data/usStates"

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
        top: "5.5rem",
        left: "5.5rem",
        "&:hover": {
            backgroundColor: "transparent",
        },
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
    inputHeight: {
        height: "2.5rem",
    },
    LastName: {
        marginLeft: "8px",
    },
})

export const AccountInformation = () => {
    const classes = useStyles()
    const [roleOptionsData, setRoleOptionsData] = useState(roleOptions)
    const [roles, setRoles] = useState([])
    const [showLinkModal, setLinkModal] = useState(false)
    const [accountsData, setAccountsData] = useState(accountsLinksData)
    const [activeLinkFor, setActiveLinkFor] = useState()
    const [link, setLink] = useState("")

    const handleRoles = (e, i) => {
        const data = [...roles]
        const tempRoleOptions = [...roleOptionsData]
        tempRoleOptions[i].checked = !tempRoleOptions[i].checked
        setRoleOptionsData(tempRoleOptions)
        if (tempRoleOptions[i].checked) {
            data.push(e.value)
        }
        setRoles(data)
    }

    const handleChipItemDelete = (i) => {
        const data = [...roles]
        data.splice(i, 1)
        setRoles(data)
    }
    const handleLink = (e) => {
        setLink(e.target.value)
    }
    const handleAddLink = () => {
        const data = [...accountsData]
        data[activeLinkFor].link = link
        setAccountsData(data)
        setLink("")
        setLinkModal(false)
    }

    const handleDeleteLink = (i) => {
        const data = [...accountsData]
        data.splice(i, 1)
        setAccountsData(data)
    }

    return (
        <>
            <SendDetailsModal
                modalName="Insert a hyperlink"
                isOpen={showLinkModal}
                onLinkChange={handleLink}
                onConfirm={handleAddLink}
                onClose={() => setLinkModal(false)}
            />
            <Box className={classes.wrapper}>
                <Typography variant="h6" className={classes.title}>
                    ACCOUNT INFORMATION
                </Typography>
                <Grid container alignItems="flex-start" justify="flex-start">
                    <Box className={classes.col1}>
                        <Avatar className={classes.avatar} src={images.maskGroup} />
                        <CustomButton disableRipple className={classes.addIcon} wantFile label={<AddIcon />} />
                    </Box>
                    <Box className={classes.col2}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <InputWithLabelIcon
                                    fontWeight="700"
                                    label="First Name"
                                    externalclass={classnames(classes.inputHeight, classes.firstName)}
                                    labelColor={colors.lighterGray}
                                    placeholder="First name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <InputWithLabelIcon
                                    fontWeight="700"
                                    labelColor={colors.lighterGray}
                                    label="Last Name"
                                    externalclass={classnames(classes.inputHeight, classes.LastName)}
                                    placeholder="Last name"
                                    labelMargin="0.6rem"
                                />
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <SelectWithLabelIcon
                                        fontWeight="700"
                                        labelColor={colors.lighterGray}
                                        label="Add a role"
                                        placeholder="Director"
                                        variantStyle="optionWithCheckboxStyle"
                                        checkboxHoverStyle={colors.white}
                                        options={roleOptions}
                                        handleOptionSelect={handleRoles}
                                        externalclass={classnames(classes.inputHeight)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <ChipCards chips={roles} onDelete={handleChipItemDelete} />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <SelectWithLabelIcon
                                        fontWeight="700"
                                        labelColor={colors.lighterGray}
                                        label="Choose country"
                                        placeholder="Choose country"
                                        options={countryOptions}
                                        externalclass={classnames(classes.inputHeight)}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <SelectWithLabelIcon
                                        fontWeight="700"
                                        labelColor={colors.lighterGray}
                                        label="Choose city"
                                        options={stateOptions}
                                        placeholder="Choose city"
                                        externalclass={classnames(classes.inputHeight)}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <TextArea placeholder="Describe yourself" label="Choose city" height="7.687rem" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Typography>Accounts and links</Typography>
                                {accountsData.map((item, i) => (
                                    <AccountsLinks
                                        icon={item.icon}
                                        link={item.link}
                                        onDelete={() => handleDeleteLink(i)}
                                        onClick={() => {
                                            setActiveLinkFor(i)
                                            setLinkModal(true)
                                        }}
                                    />
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
