import React, { useState } from "react"
import { Grid, makeStyles } from "@material-ui/core"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers"
import { colors } from "../../../theme/colors"
import { InputWithLabelIcon } from "../../../components/inputs/inputWithLabelIcon"
import { roleOptions } from "../../../data/roles"
import { SelectWithLabelIcon } from "../../../components/inputs/selectWithLabelIcon"
import { CustomButton } from "../../../components/buttons/customButton"
import { Teams } from "./teams"
import { addTeamForm } from "../../../formValidation/teams"

const useStyles = makeStyles({
    wrapper: {
        padding: "2rem",
        backgroundColor: colors.lighterPrimary,
        marginTop: "1rem",
    },
    buttonGroup: {
        maxWidth: "15rem",
    },
})

export const AddTeamMember = () => {
    const classes = useStyles()
    const [totalTeams, setTotalTeams] = useState([])
    const { register, handleSubmit, errors, reset } = useForm({
        resolver: yupResolver(addTeamForm),
    })
    const submit = (data) => {
        const newData = [...totalTeams]
        newData.push(data)
        setTotalTeams(newData)
        reset()
    }

    console.log(errors)

    return (
        <>
            <Teams data={totalTeams} />
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
                        {/* <SelectWithLabelIcon
                            options={roleOptions}
                            labelColor={colors.lighterGray}
                            // customValue="Director"
                            placeholder="Gaffer"
                            variantStyle="optionWithCheckboxStyle"
                            fontWeight="bold"
                            label="Job role"
                            name="jobRole"
                            inputRegister={register}
                            errorMsg={errors.jobRole}
                        /> */}
                        <InputWithLabelIcon
                            labelColor={colors.lighterGray}
                            fontWeight="bold"
                            label="Job role"
                            placeholder="Gaffer"
                            name="jobRole"
                            inputRegister={register}
                            errorMsg={errors.email}
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
                    <Grid container alignItems="center" justify="flex-end">
                        <Grid container spacing={2} className={classes.buttonGroup}>
                            <Grid item xs={12} sm={12} md={6}>
                                <CustomButton variant="textButton" label="cancel" fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <CustomButton label="Confirm" type="submit" fullWidth />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

AddTeamMember.propTypes = {}
