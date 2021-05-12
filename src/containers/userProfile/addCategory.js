import { Box, makeStyles, Typography } from "@material-ui/core"
import React, { useState } from "react"
import PropTypes from "prop-types"
import { SelectWithLabelIcon } from "../../components/inputs/selectWithLabelIcon"
import { UserConfirmContainer } from "../../components/userConfirmContainer/userConfirmContainer"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.white,
        textAlign: "center",
        width: "100%",
        // "@media(max-width:767px)":{
        //     marginTop:"3rem"
        // }
    },
    inputWrapper: {
        maxWidth: "37.75rem",
        margin: "2rem auto",
        // "@media(max-width:767px)":{
        //  marginTop: "3rem",
        // }
    },
    heading: {
        marginBottom: "2.5rem",
    },
})

export const AddCategory = ({ onAddCategory, closeAddcategory }) => {
    const classes = useStyles()
    const [category, setCategory] = useState({ label: "", value: "" })
    const secondlevelCategoryItems = [
        { value: "Lighting", label: "Lighting" },
        { value: "category-1", label: "category-1" },
        { value: "category-2", label: "category-2" },
        { value: "category-3", label: "category-3" },
        { value: "category-4", label: "category-4" },
        { value: "category-5", label: "category-5" },
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
                    placeholder="Choose category"
                    variantStyle="bigOptionStyle"
                    custom
                    customValue={category.label}
                    customOnChange={(value) => setCategory(value)}
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
