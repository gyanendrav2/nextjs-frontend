import { Box, makeStyles, Typography } from "@material-ui/core"
import React, { useState } from "react"
import PropTypes from "prop-types"
import SelectWithLabelIcon from "../../components/inputs/selectWithLabelIcon"
import { UserConfirmContainer } from "../../components/userConfirmContainer/userConfirmContainer"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.white,
        textAlign: "center",
        width: "100%",
    },
    inputWrapper: {
        maxWidth: "37.75rem",
        margin: "3.5rem auto auto auto",
        padding: "0 0.55rem",
        "@media(max-width:767px)": {
            width: "100%",
            padding: "0 1rem",
        },
    },
    heading: {
        marginBottom: "2.5rem",
    },
    categoryselect: {
        width: "100%",
    },
})

const AddCategory = ({ onAddCategory, closeAddcategory }) => {
    const classes = useStyles()
    const [category, setCategory] = useState({ label: "", value: "" })
    const secondlevelCategoryItems = [
        { value: "Lighting", label: "Lighting" },
        { value: "category (1)", label: "category (1)" },
        { value: "category (2)", label: "category (2)" },
        { value: "category (3)", label: "category (3)" },
        { value: "category (4)", label: "category (4)" },
        { value: "category (5)", label: "category (5)" },
    ]
    return (
        <Box container className={classes.wrapper}>
            <Box className={classes.inputWrapper}>
                <Typography variant="h4" className={classes.heading}>
                    Add a category
                </Typography>
                <SelectWithLabelIcon
                    options={secondlevelCategoryItems}
                    labelColor={colors.lighterGray}
                    customHeight="3.5rem"
                    placeholder="Choose category"
                    variantStyle="bigOptionStyle"
                    custom
                    customValue={category.label}
                    customOnChange={(value) => setCategory(value)}
                    externalclass={classes.categoryselect}
                />
            </Box>
            <UserConfirmContainer
                onConfirmClicked={() => onAddCategory(category)}
                closeAddcategory={closeAddcategory}
            />
        </Box>
    )
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired,
    closeAddcategory: PropTypes.func.isRequired,
}

export default AddCategory
