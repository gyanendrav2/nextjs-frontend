import React, { useState } from "react"
import PropTypes from "prop-types"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { ModalComponent } from "./modalComponent"
import { TextArea } from "../inputs/textArea"
import { CustomButton } from "../buttons/customButton"
import { colors } from "../../theme/colors"
import { InputWithLabelIcon } from "../inputs/inputWithLabelIcon"

const useStyles = makeStyles({
    heading: {
        marginTop: "4rem",
    },
    wrapper: {
        width: "100%",
        paddingLeft: "7.187rem",
        paddingRight: "7.187rem",
        paddingBottom: "7.5rem",
        paddingTop: "2.5rem",
        position: "relative",
        "& textarea": {
            height: "7.5rem",
            resize: "vertical",
        },
        "@media(max-width:768px)": {
            padding: "1rem 0",
        },
    },
    button: {
        width: "18.375rem",
        height: "3.5rem",
        margin: "1rem",
    },
    charCount: {
        position: "absolute",
        top: "3.5rem",
        right: "8.5rem",
        color: colors.lightGray,
    },
    fullWidth: {
        width: "100%",
    },
})

export const SendDetailsModal = ({
    modalName,
    title,
    isOpen,
    onClose,
    placeholder,
    isTextArea,
    textAreaValue,
    hideCount,
    onConfirm,
    onLinkChange,
    externalclass,
}) => {
    const classes = useStyles()
    const [description, setDescription] = useState(textAreaValue)
    const handleDescription = (e) => {
        const { value } = e.target
        if (!hideCount) {
            if (value.length <= 120) {
                setDescription(e.target.value)
                return
            }
        }
        setDescription(e.target.value)
    }
    return (
        <ModalComponent openOrNot={isOpen} onClose={onClose}>
            <Grid container alignItems="center" justify="center" direction="column" className={classes.fullWidth}>
                <Typography variant="h4" className={classes.heading}>
                    {modalName}
                </Typography>
                <Typography className={externalclass}>{title}</Typography>
                <Box className={classes.wrapper}>
                    {isTextArea ? (
                        <>
                            <TextArea placeholder={placeholder} value={description} onChange={handleDescription} />
                            {!hideCount && (
                                <Typography className={classes.charCount}>{description.length}/120</Typography>
                            )}
                        </>
                    ) : (
                        <InputWithLabelIcon placeholder="Paste URL" onChange={onLinkChange} />
                    )}
                </Box>
                <Grid container spacing={2} alignItems="center" justify="center">
                    <CustomButton variant="cancel" label="Cancel" externalclass={classes.button} onClick={onClose} />
                    <CustomButton label="Confirm" externalclass={classes.button} onClick={onConfirm} />
                </Grid>
            </Grid>
        </ModalComponent>
    )
}

SendDetailsModal.defaultProps = {
    title: "",
    placeholder: "",
    textAreaValue: "",
    hideCount: false,
    externalclass: "",
    onConfirm: () => {},
    onLinkChange: () => {},
    isTextArea: false,
}

SendDetailsModal.propTypes = {
    modalName: PropTypes.string.isRequired,
    title: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    isTextArea: PropTypes.bool,
    textAreaValue: PropTypes.string,
    hideCount: PropTypes.bool,
    externalclass: PropTypes.string,
    onConfirm: PropTypes.func,
    onLinkChange: PropTypes.func,
}
