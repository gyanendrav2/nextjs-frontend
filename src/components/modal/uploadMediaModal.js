import React, { createRef, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { ModalComponent } from "./modalComponent"
import { CustomButton } from "../buttons/customButton"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    heading: {
        marginTop: "4rem",
    },
    wrapper: {
        width: "100%",
        position: "relative",
        paddingLeft: "7.187rem",
        paddingRight: "7.187rem",
        paddingBottom: "7.5rem",
        paddingTop: "2.5rem",
        border: `1px dashed ${colors.lightGray}`,
        backgroundColor: colors.lighterPrimary,
        marginTop: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    button: {
        width: "18.375rem",
        height: "3.5rem",
        margin: "1rem",
    },
    fullWidth: {
        width: "100%",
    },
    subTitle: {
        color: colors.lighterGray,
    },
    perPhoto: {
        color: colors.lighterGray,
        fontSize: "0.875rem",
    },
    fileWrapper: {
        display: "flex",
        flexWrap: "wrap",
    },
    fileContainer: {
        width: "12.5rem",
        padding: "0.5rem",
        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
    },
})

export const UploadMediaModal = ({ modalName, isOpen, onClose, onConfirm }) => {
    const classes = useStyles()
    const [draged, setDraged] = useState(false)
    const [dragCounter, setDragCounter] = useState(0)
    const [files, setFiles] = useState([])
    const [reassign, setReassign] = useState(false)

    const dropRef = createRef(null)

    const handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }
    const handleDragIn = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDragCounter(dragCounter + 1)
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setDraged(true)
        }
    }
    const handleDragOut = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDragCounter(dragCounter - 1)
        if (dragCounter === 0) {
            setDraged(false)
        }
    }
    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDraged(false)
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            console.log(e.dataTransfer.files)
            setFiles([...files, ...e.dataTransfer.files])
            console.log(e.dataTransfer.files)
            e.dataTransfer.clearData()
            setDragCounter(0)
        }
    }

    useEffect(() => {
        const div = dropRef.current
        if (div) {
            div.addEventListener("dragenter", handleDragIn)
            div.addEventListener("dragleave", handleDragOut)
            div.addEventListener("dragover", handleDrag)
            div.addEventListener("drop", handleDrop)
        }

        return () => {
            if (div) {
                div.removeEventListener("dragenter", handleDragIn)
                div.removeEventListener("dragleave", handleDragOut)
                div.removeEventListener("dragover", handleDrag)
                div.removeEventListener("drop", handleDrop)
            }
        }
    }, [reassign])

    return (
        <ModalComponent maxHeight="90vh" openOrNot={isOpen} onClose={onClose}>
            <Grid container alignItems="center" justify="center" direction="column" className={classes.fullWidth}>
                <Typography variant="h4" className={classes.heading}>
                    {modalName}
                </Typography>
                <div onMouseEnter={() => setReassign(reassign + 1)} ref={dropRef} className={classes.wrapper}>
                    <Typography className={classes.subTitle}>Drag and drop</Typography>
                    <Typography className={classes.subTitle}>or</Typography>
                    <CustomButton label="Confirm" externalclass={classes.button} onClick={onConfirm} />
                    <Typography className={classes.perPhoto}>*(5MB per photo)</Typography>
                    <Box className={classes.fileWrapper}>
                        {files.map((item, i) => (
                            <Box className={classes.fileContainer}>
                                <img src={URL.createObjectURL(item)} alt={`img_${i}`} />
                            </Box>
                        ))}
                    </Box>
                </div>
                <Grid container spacing={2} alignItems="center" justify="center">
                    <CustomButton variant="cancel" label="Cancel" externalclass={classes.button} onClick={onClose} />
                    <CustomButton label="Confirm" externalclass={classes.button} onClick={onConfirm} />
                </Grid>
            </Grid>
        </ModalComponent>
    )
}

UploadMediaModal.defaultProps = {
    onConfirm: () => {},
}

UploadMediaModal.propTypes = {
    modalName: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func,
}
