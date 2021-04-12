import React from "react"
import PropTypes from "prop-types"
import { Grid, makeStyles } from "@material-ui/core"
import { colors } from "../../../theme/colors"
import { InputWithLabelIcon } from "../../../components/inputs/inputWithLabelIcon"
import { roleOptions } from "../../../data/roles"
import { SelectWithLabelIcon } from "../../../components/inputs/selectWithLabelIcon"
import { CustomButton } from "../../../components/buttons/customButton"

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
    return (
        <Grid container spacing={2} className={classes.wrapper}>
            <Grid item xs={12} sm={12} md={6}>
                <InputWithLabelIcon labelColor={colors.lighterGray} fontWeight="bold" label="First and last name" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <SelectWithLabelIcon
                    options={roleOptions}
                    labelColor={colors.lighterGray}
                    customValue="Director"
                    variantStyle="optionWithCheckboxStyle"
                    fontWeight="bold"
                    label="Project category"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <InputWithLabelIcon labelColor={colors.lighterGray} fontWeight="bold" label="Email address" />
            </Grid>
            <Grid container alignItems="center" justify="flex-end">
                <Grid container spacing={2} className={classes.buttonGroup}>
                    <Grid item xs={12} sm={12} md={6}>
                        <CustomButton variant="textButton" label="cancel" fullWidth disableRipple />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <CustomButton label="Confirm" fullWidth />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

AddTeamMember.propTypes = {}
