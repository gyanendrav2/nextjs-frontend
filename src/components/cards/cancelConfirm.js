import { Grid, makeStyles } from "@material-ui/core"
import PropTypes from "prop-types"
import React from "react"
import { colors } from "../../theme/colors"
import CustomButton from "../buttons/customButton"

const useStyles = makeStyles({
    buttonWrapper: {
        backgroundColor: colors.lighterPrimary,
        padding: "2rem",
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "@media (max-width:767px)": {
            flexDirection: "column-reverse",
            width: "100%",
            margin: "0",
            padding: "2rem 1rem",
            "& button": {
                marginLeft: 0,
                marginRight: 0,
            },
        },
    },
    button: {
        width: "18.375rem",
        height: "3.5rem",
        marginLeft: "0.5rem",
        marginRight: "0.5rem",
        "@media(max-width:767px)": {
            margin: "0.5rem 0.5rem",
            width: "100%",
        },
    },
})

const CancelConfirm = ({ onClose, onConfirm }) => {
    const classes = useStyles()
    return (
        <Grid item container spacing={2} md={12} className={classes.buttonWrapper}>
            <CustomButton variant="cancel" label="Cancel" externalclass={classes.button} onClick={onClose} />
            <CustomButton label="Confirm" externalclass={classes.button} onClick={onConfirm} />
        </Grid>
    )
}

CancelConfirm.propTypes = {
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
}

export default CancelConfirm
