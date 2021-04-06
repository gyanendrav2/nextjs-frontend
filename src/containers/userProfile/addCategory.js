import { Box, makeStyles, Typography } from "@material-ui/core"
import React, { useState } from "react"
import { SelectWithLabelIcon } from "../../components/inputs/selectWithLabelIcon"
import { UserConfirmContainer } from "../../components/userConfirmContainer/userConfirmContainer"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.white,
        textAlign: "center",
        width: "100%",
    },
    mainTitle: {
        fontFamily: "Forno-Trial",
        fontStyle: "normal",
        fontWeight: 900,
        fontSize: "2rem",
        lineHeight: "2.75",
    },
    inputWrapper: {
        maxWidth: "37.75rem",
        margin: "auto",
    },
})

export const AddCategory = () => {
    const classes = useStyles()
    const [category, setCategory] = useState({ label: "", value: "" })
    const secondlevelCategoryItems = [
        { value: "1", label: "category-1" },
        { value: "2", label: "category-2" },
        { value: "3", label: "category-3" },
        { value: "4", label: "category-4" },
    ]
    return (
        <Box container className={classes.wrapper}>
            <Box className={classes.inputWrapper}>
                <Typography className={classes.mainTitle}> Add a category</Typography>
                <SelectWithLabelIcon
                    options={secondlevelCategoryItems}
                    labelColor={colors.lighterGray}
                    placeholder="Choose category"
                    custom
                    customValue={category.label}
                    customOnChange={(value) => setCategory(value)}
                />
            </Box>
            <UserConfirmContainer />
        </Box>
    )
}
