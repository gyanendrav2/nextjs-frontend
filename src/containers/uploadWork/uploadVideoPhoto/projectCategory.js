import React, { useState } from "react"
import { Box, Grid, makeStyles } from "@material-ui/core"
import classnames from "classnames"
import { colors } from "../../../theme/colors"
import { InputWithLabelIcon } from "../../../components/inputs/inputWithLabelIcon"
import CustomButton from "../../../components/buttons/customButton"
import SelectWithLabelIcon from "../../../components/inputs/selectWithLabelIcon"
import { roleCategories } from "../../../data/roles"
import { AddTeamMember } from "./addTeamMember"
import { ChipCards } from "../../../components/cards/chipCards"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.white,
        color: colors.white,
        padding: "6.25rem 0",
        border: `1px solid ${colors.lightGray}`,
        marginBottom: "1.125rem",
        position: "relative",
        "& svg": {
            cursor: "pointer",
        },
        "@media(max-width:767px)": {
            padding: "2.5rem 0",
        },
    },
    whiteBg: {
        backgroundColor: colors.white,
        marginBottom: "1.125rem",
        padding: "2rem",
        "@media(max-width:767px)": {
            padding: "2rem 1rem",
        },
    },
    icon: {
        margin: "0 2rem",
        "@media(max-width:575px)": {
            margin: "0 1rem",
        },
    },
    inputHeight: {
        overflowY: "hidden",

        // "@media(max-width:575px)": {
        //        padding: "0px!important",
        // },
    },
    selectHeight: {
        overflowY: "hidden",
    },
    teamAddButton: {
        backgroundColor: colors.white,
        color: colors.black,
        height: "2.5rem",
        border: `1px solid ${colors.black}`,
        marginTop: "1.5rem",
        "&:hover": {
            color: colors.black,
            backgroundColor: colors.pink,
        },
    },
    plusIconContainer: {
        marginBottom: "1rem",
    },
    socialIconContainer: {
        padding: "4rem 0",
    },
    socialIcon: {
        margin: "0.75rem",
    },
    modaltitle: {
        marginTop: "1.5rem",
        color: colors.lighterGray,
    },
    buttonContainer: {
        padding: "1.9rem",
        display: "none",
        "@media(max-width:1024px)": {
            display: "flex",
        },
    },
    closeIcon: {
        position: "absolute",
        top: "0.5rem",
        right: "0.5rem",
        cursor: "pointer",
        color: colors.lighterGray,
        "@media (max-width:767px)": {
            top: "0.5rem",
            right: "0.5rem",
        },
    },
})

export const ProjectCategory = () => {
    const classes = useStyles()
    const [showAddTeamMember, setShowAddTeamMember] = useState(false)
    const [roleCategoriesdata, setRoleCategoriesdata] = useState(roleCategories)
    const [roles, setRoles] = useState([])

    const handleRoles = (e, i) => {
        const data = [...roles]
        const tempRoleOptions = [...roleCategoriesdata]
        tempRoleOptions[i].checked = !tempRoleOptions[i].checked
        setRoleCategoriesdata(tempRoleOptions)
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
    return (
        <Box>
            <Grid container className={classes.whiteBg}>
                <Grid id="insert-project-name-details" item xs={12} sm={12} md={9} lg={9} xl={9}>
                    <Box>
                        <InputWithLabelIcon
                            labelColor={colors.lighterGray}
                            fontWeight="bold"
                            label="Project name"
                            placeholder="SiR - Hair Down (Official Video) ft. Kendrick Lamar"
                            externalclass={classnames(classes.inputHeight)}
                        />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                                <SelectWithLabelIcon
                                    options={roleCategories}
                                    labelColor={colors.lighterGray}
                                    variantStyle="optionWithCheckboxStyle"
                                    fontWeight="bold"
                                    label="Project category"
                                    placeholder="Multiselect categories"
                                    handleOptionSelect={handleRoles}
                                    placeholderColor={colors.black}
                                    onChange={() => {}}
                                    // externalclass={classnames(classes.inputHeight)}
                                />
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <ChipCards chips={roles} onDelete={handleChipItemDelete} />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <InputWithLabelIcon
                                    labelColor={colors.lighterGray}
                                    fontWeight="bold"
                                    label="The making year"
                                    placeholder="2020"
                                    externalclass={classnames(classes.inputHeight)}
                                />
                            </Grid>
                        </Grid>
                        <InputWithLabelIcon
                            labelColor={colors.lighterGray}
                            fontWeight="bold"
                            label="Project client"
                            placeholder="SiR, Top Dog Eintertainment Group"
                            externalclass={classnames(classes.inputHeight)}
                        />
                        <InputWithLabelIcon
                            labelColor={colors.lighterGray}
                            fontWeight="bold"
                            label="External link"
                            placeholder="-"
                            externalclass={classnames(classes.inputHeight)}
                        />
                        {!showAddTeamMember && (
                            <CustomButton
                                label="Add a team member +"
                                externalclass={classes.teamAddButton}
                                onClick={() => setShowAddTeamMember(true)}
                            />
                        )}
                    </Box>
                </Grid>

                <AddTeamMember
                    shouldVisible={showAddTeamMember}
                    onCancel={() => setShowAddTeamMember(false)}
                    onAdded={() => setShowAddTeamMember(false)}
                />
            </Grid>
        </Box>
    )
}
