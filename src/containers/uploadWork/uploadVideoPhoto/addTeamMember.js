import React, { useState } from "react"
import PropTypes from "prop-types"
import { Grid, makeStyles } from "@material-ui/core"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers"
import { colors } from "../../../theme/colors"
import { InputWithLabelIcon } from "../../../components/inputs/inputWithLabelIcon"
import { roleOptions } from "../../../data/roles"
import SelectWithLabelIcon from "../../../components/inputs/selectWithLabelIcon"
import CustomButton from "../../../components/buttons/customButton"
import { Teams } from "./teams"
import { addTeamForm } from "../../../formValidation/teams"

const useStyles = makeStyles({
    wrapper: {
        padding: "2rem",
        backgroundColor: colors.lighterPrimary,
        marginTop: "1rem",
        "@media(max-width:767px)": {
            padding: "2rem 0rem",
            paddingBottom: "1rem",
        },
    },
    buttonGroup: {
        maxWidth: "15rem",
        "& button": {
            height: "2.5rem",
        },
        "@media(max-width:767px)": {
            paddingLeft: "4px",
        },
    },
    btnContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        "@media(max-width:767px)": {
            alignItems: "center",
            justifyContent: "flex-start",
        },
    },
    cancelBtn: {
        width: "2rem",
    },
})

export const AddTeamMember = ({ shouldVisible, onAdded, onCancel }) => {
    const classes = useStyles()
    const [totalTeams, setTotalTeams] = useState([])
    const [jobRole, setJobRole] = useState(roleOptions)
    const { register, handleSubmit, errors, reset } = useForm({
        resolver: yupResolver(addTeamForm),
    })
    const submit = (data) => {
        const newData = [...totalTeams]
        newData.push(data)
        setTotalTeams(newData)
        reset()
        onAdded()
    }

    const handleDelete = (i) => {
        const data = [...totalTeams]
        data.splice(i, 1)
        setTotalTeams(data)
    }

    const handleRoles = (e, i) => {
        const tempRoleOptions = [...jobRole]
        const result = tempRoleOptions.map((item) => {
            return { ...item, checked: false }
        })
        result[i].checked = !result[i].checked
        setJobRole(result)
    }

    const getRoleValue = () => {
        const data = jobRole.filter((item) => item.checked === true)
        if (data.length) {
            return data[0].value
        }
    }

    return (
        <>
            {totalTeams.length > 0 && <Teams data={totalTeams} handleDelete={handleDelete} />}
            {shouldVisible && (
                <form onSubmit={handleSubmit(submit)}>
                    <Grid container spacing={2} className={classes.wrapper}>
                        <Grid item xs={12} sm={12} md={6}>
                            <InputWithLabelIcon
                                labelColor={colors.lighterGray}
                                fontWeight="bold"
                                label="First and last name"
                                placeholder="Mopper Dropper"
                                name="name"
                                inputRegister={register}
                                errorMsg={errors.name}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <SelectWithLabelIcon
                                options={jobRole}
                                labelColor={colors.lighterGray}
                                customValue={getRoleValue()}
                                placeholder="Gaffer"
                                variantStyle="optionWithCheckboxStyle"
                                fontWeight="bold"
                                label="Job role"
                                name="jobRole"
                                inputRegister={register}
                                handleOptionSelect={handleRoles}
                                errorMsg={errors.jobRole ? errors.jobRole.message : ""}
                                error={errors.jobRole}
                                placeholderColor={colors.black}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <InputWithLabelIcon
                                labelColor={colors.lighterGray}
                                fontWeight="bold"
                                label="Email address"
                                placeholder="mopper@dropper.com"
                                name="email"
                                inputRegister={register}
                                errorMsg={errors.email}
                            />
                        </Grid>
                        <Grid container className={classes.btnContainer}>
                            <Grid container spacing={2} className={classes.buttonGroup}>
                                <Grid item md={6}>
                                    <CustomButton
                                        variant="textButton"
                                        label="cancel"
                                        fullWidth
                                        onClick={onCancel}
                                        externalclass={classes.cancelBtn}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <CustomButton label="Confirm" type="submit" fullWidth />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            )}
        </>
    )
}

AddTeamMember.propTypes = {
    onAdded: PropTypes.func.isRequired,
    shouldVisible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
}
