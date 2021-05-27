import React, { useState } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import ModalComponent from "./modalComponent"
import { TextArea } from "../inputs/textArea"
import CustomButton from "../buttons/customButton"
import { colors } from "../../theme/colors"
import { InputWithLabelIcon } from "../inputs/inputWithLabelIcon"

const useStyles = makeStyles({
    heading: {
        marginTop: "4rem",
        marginBottom: "2rem",
        textAlign: "center",
        "@media(max-width:1024px)": {
            marginTop: "3rem",
            marginBottom: "1.5rem",
        },
        "@media(max-width:767px)": {
            marginBottom: "2.5rem",
        },
        "@media(max-width:400px)": {
            fontSize: (props) => (props.requestTitle ? props.requestTitle : "2rem"),
            width: "100%",
            textAlign: "center",
        },
    },
    wrapper: {
        width: "100%",
        paddingBottom: "7.5rem",
        paddingTop: "2.5rem",
        position: "relative",
        maxWidth: "56.25rem",
        margin: "auto",
        "& textarea": {
            height: "7.5rem",
            resize: "vertical",
            "@media(max-width:767px)": {
                height: "12rem",
            },
        },
        "@media(max-width:1024px)": {
            padding: "2rem 1rem 3.5rem 1rem",
        },
        "@media(max-width:767px)": {
            padding: "1.5rem 0 0 0",
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
    charCount: {
        position: "absolute",
        top: "4rem",
        right: "1rem",
        color: colors.lighterGray,
        "@media (min-width: 768px) and (max-width: 1024px)": {
            top: "3rem",
            right: "2rem",
        },
        "@media(max-width:767px)": {
            top: "83%",
            right: "1rem",
        },
    },
    fullWidth: {
        width: "100%",
    },
    buttonWrapper: {
        backgroundColor: colors.lighterPrimary,
        padding: "2rem",
        "@media (max-width:767px)": {
            flexDirection: "column-reverse",
            width: "100%",
            margin: "0",
            padding: "2rem 1rem",
            marginTop: "0.75rem",
            "& button": {
                marginLeft: 0,
                marginRight: 0,
            },
        },
    },
    wrapperTop: {
        width: "100%",
        maxHeight: "90vh",
        overflowY: "auto",
        padding: "1.125rem",
        "@media (max-width: 767px)": {
            paddingBottom: 0,
        },
    },
    modalTitle: {
        fontFamily: "Helvetica",
        fontSize: "1.375rem",
        color: colors.lighterGray,
        "@media (min-width: 768px) and (max-width: 1024px)": {
            fontSize: "1.375rem",
        },
        "@media (max-width: 767px)": {
            fontSize: "1rem",
            textAlign: "center",
            color: colors.lighterGray,
        },
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
    requestTitle,
}) => {
    const classes = useStyles({ requestTitle })
    const [description, setDescription] = useState(textAreaValue)
    const handleDescription = (e) => {
        const { value } = e.target
        if (!hideCount) {
            if (value.length <= 120) {
                setDescription(value)
            }
        } else {
            setDescription(value)
        }
    }
    return (
        <ModalComponent padding="0" openOrNot={isOpen} onClose={onClose}>
            <Box width="100%" style={{ overflowX: "hidden", overflowY: "auto", maxHeight: "90vh" }}>
                <Box className={classes.wrapperTop}>
                    <Grid
                        container
                        alignItems="center"
                        justify="center"
                        direction="column"
                        className={classes.fullWidth}>
                        <Typography variant="h4" className={classes.heading}>
                            {modalName}
                        </Typography>
                        <Typography className={classnames(externalclass, classes.modalTitle)}>{title}</Typography>
                        <Box className={classes.wrapper}>
                            {isTextArea ? (
                                <>
                                    <TextArea
                                        placeholder={placeholder}
                                        value={description}
                                        onChange={handleDescription}
                                    />
                                    {!hideCount && (
                                        <Typography className={classes.charCount}>{description.length}/120</Typography>
                                    )}
                                </>
                            ) : (
                                <InputWithLabelIcon
                                    placeholder="https://www.youtube.com/embed/50Twc4ghBFM"
                                    onChange={onLinkChange}
                                />
                            )}
                        </Box>
                    </Grid>
                </Box>
                <Grid container spacing={2} alignItems="center" justify="center" className={classes.buttonWrapper}>
                    <CustomButton variant="cancel" label="Cancel" externalclass={classes.button} onClick={onClose} />
                    <CustomButton label="Confirm" externalclass={classes.button} onClick={onConfirm} />
                </Grid>
            </Box>
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
    requestTitle: "2rem",
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
    requestTitle: PropTypes.string,
}
