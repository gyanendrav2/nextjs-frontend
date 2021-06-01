import React, { createRef, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import ModalComponent from "./modalComponent"
import CustomButton from "../buttons/customButton"
import { colors } from "../../theme/colors"
import { DeleteIcon } from "../icons/deleteIcon"
import CancelConfirm from "../cards/cancelConfirm"

const useStyles = makeStyles({
    heading: {
        marginTop: "4rem",
    },
    wrapper: {
        width: "100%",
        position: "relative",
        padding: "5rem 7.187rem 7.5rem 7.187rem",
        border: `5px dashed ${colors.lightGray}`,
        borderColor: colors.lighterGray,
        backgroundColor: colors.lighterPrimary,
        marginTop: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        "@media(max-width:575px)": {
            padding: "5rem 2rem",
        },
    },
    button: {
        width: "18.375rem",
        height: "3.5rem",
        margin: "1rem",
        "@media(max-width:575px)": {
            width: "10.375rem",
        },
    },
    modelWrapper: {
        width: "100%",
        maxHeight: "90vh",
        overflowX: "auto",
    },
    subTitle: {
        color: colors.lighterGray,
        fontSize: "1.375rem",
    },
    subTitleTwo: {
        color: colors.lighterGray,
        fontSize: "1rem",
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
        position: "relative",
        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
        "&:hover div": {
            display: "flex",
        },
    },
    deleteButton: {
        display: "none",
        width: "2.5rem",
        height: "2.5rem",
        backgroundColor: colors.white,
        position: "absolute",
        top: "1rem",
        right: "1rem",
        color: colors.pink,
        cursor: "pointer",
    },
})

export const UploadMediaModal = ({ modalName, isOpen, onClose, onConfirm }) => {
    const classes = useStyles()
    const [, setDraged] = useState(false)
    const [dragCounter, setDragCounter] = useState(0)
    const [files, setFiles] = useState([])
    const [reassign, setReassign] = useState(false)

    const dropRef = createRef()

    const handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }
    const handleDragIn = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDragCounter(dragCounter + 1)
        if (e.dataTransfer.items && e.dataTransfer.items.length >= 0) {
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
        if (files.length > 0) {
            setFiles([...files, ...e.dataTransfer.files])
            e.dataTransfer.clearData()
            setDragCounter(0)
        } else {
            setFiles([...e.dataTransfer.files])
        }
    }
    useEffect(() => {
        const div = dropRef.current
        if (div) {
            div.addEventListener("dragover", handleDrag)
            div.addEventListener("drop", handleDrop)
            div.addEventListener("dragenter", handleDragIn)
            div.addEventListener("dragleave", handleDragOut)
        }

        return () => {
            if (div) {
                div.removeEventListener("dragenter", handleDragIn)
                div.removeEventListener("dragleave", handleDragOut)
                div.removeEventListener("dragover", handleDrag)
                div.removeEventListener("drop", handleDrop)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reassign, files])

    const handleFile = (i) => {
        const newFiles = [...files]
        newFiles.splice(i, 1)
        console.log(newFiles)
        setFiles(newFiles)
    }

    return (
        <ModalComponent padding="0" maxHeight="90vh" openOrNot={isOpen} onClose={onClose}>
            <Box className={classes.modelWrapper}>
                <Box width="100%" style={{ padding: "1.235rem" }}>
                    <Grid
                        container
                        alignItems="center"
                        justify="center"
                        direction="column"
                        wrap="nowrap"
                        className={classes.fullWidth}>
                        <Typography variant="h4" className={classes.heading}>
                            {modalName}
                        </Typography>
                        <div onMouseEnter={() => setReassign(reassign + 1)} ref={dropRef} className={classes.wrapper}>
                            <Typography className={classes.subTitle}>Drag and drop</Typography>
                            <Typography className={classes.subTitleTwo}>or</Typography>
                            <CustomButton label="Confirm" externalclass={classes.button} onClick={onConfirm} />
                            <Typography className={classes.perPhoto}>*(5MB per photo)</Typography>
                            <Box className={classes.fileWrapper}>
                                {files.map((item, i) => (
                                    <Box className={classes.fileContainer}>
                                        <Grid
                                            container
                                            alignItems="center"
                                            justify="center"
                                            flexDirection="row"
                                            className={classes.deleteButton}
                                            onClick={() => handleFile(i)}>
                                            <DeleteIcon />
                                        </Grid>
                                        <img src={URL.createObjectURL(item)} alt={`img_${i}`} />
                                    </Box>
                                ))}
                            </Box>
                        </div>
                    </Grid>
                </Box>
                <CancelConfirm onClose={() => {}} onConfirm={() => {}} />
            </Box>
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
