import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core"
import { PlusIcon } from "../icons/plusIcon"
import { colors } from "../../theme/colors"
import CustomButton from "../buttons/customButton"

const useStyles = makeStyles({
    wrapper: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.black,
        color: colors.white,
        cursor: "pointer",
        "@media(max-width:767px)": {
            height: "247px",
        },
    },
})

const Adder = ({ onAddClick }) => {
    const classes = useStyles()
    return (
        <CustomButton
            externalclass={classes.wrapper}
            label={<PlusIcon />}
            wantFile
            onFileChange={() => {}}
            onClick={onAddClick}
        />
    )
}

Adder.propTypes = {
    onAddClick: PropTypes.func.isRequired,
}

export default Adder
