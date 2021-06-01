import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Box, Grid, makeStyles } from "@material-ui/core"
import { PhotoIcon } from "../../../components/icons/photoIcon"
import { CodeIcon } from "../../../components/icons/codeIcon"
import { colors } from "../../../theme/colors"
import CustomButton from "../../../components/buttons/customButton"
import { PhotoCodeBox } from "./photoCodeBox"
import { TIcon } from "../../../components/icons/tIcon"
import { UploadPhoto } from "./uploadPhoto"
import { LinkedinIcon } from "../../../components/icons/linkedinIcon"
import { FacebookIcon } from "../../../components/icons/facebookIcon"
import { TwitterIcon } from "../../../components/icons/twitterIcon"
import { AllModals } from "../allModals"
import { CardAdderButton } from "./cardAdderButton"
import { CloseIconBig } from "../../../components/icons/closeIconBig"
import { ProjectCategory } from "./projectCategory"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.white,
        color: colors.white,
        padding: "6.25rem 0",
        border: `1px solid ${colors.lightGray}`,
        marginBottom: "1.125rem",
        position: "relative",
        "& svg": {
            cursor: "pointer",
        },
        "@media(max-width:575px)": {
            padding: "2.5rem 0",
        },
    },
    icon: {
        margin: "0 1rem",
        "@media(max-width:575px)": {
            margin: "0 1rem",
        },
    },
    inputHeight: {
        "@media(max-width:575px)": {
            padding: "0px 8px",
        },
    },
    teamAddButton: {
        backgroundColor: colors.white,
        color: colors.black,
        height: "2.5rem",
        border: `1px solid ${colors.black}`,
        marginTop: "1.5rem",
    },
    plusIconContainer: {
        marginBottom: "3rem",
        "@media (max-width: 1024px)": {
            paddingRight: "2rem",
        },
        "@media (max-width: 767px)": {
            paddingRight: "1rem",
        },
    },
    socialIconContainer: {
        padding: "4rem 0",
        "@media (max-width: 1024px)": {
            padding: "3rem 0 7.625rem 0",
        },
        "@media (max-width: 767px)": {
            padding: "2.5rem 0 8.625rem 0",
        },
    },
    socialIcon: {
        margin: "0.75rem",
    },
    modaltitle: {
        marginTop: "1.5rem",
        color: colors.lighterGray,
    },
    buttonContainer: {
        padding: "1.9rem 0",
        display: "none",
        width: "100%",
        margin: 0,
        backgroundColor: colors.white,
        "@media (min-width:768px) and (max-width: 1024px)": {
            padding: "1rem 13.375rem",
            display: "flex",
        },
        "@media (max-width:767px)": {
            display: "flex",
            padding: "1rem",
        },
    },
    closeIcon: {
        position: "absolute",
        top: "0.5rem",
        right: "0.5rem",
        cursor: "pointer",
        color: colors.lighterGray,
        "@media (max-width:767px)": {
            top: "0.5rem",
            right: "0.5rem",
        },
    },
    previewButton: {
        backgroundColor: `${colors.white}!important`,
        color: colors.black,
        border: `2px solid ${colors.black}`,
        maxHeight: "3.125rem",
    },
    confirmButton: {
        backgroundColor: `${colors.black}!important`,
        color: colors.white,
        border: `2px solid ${colors.black}`,
        maxHeight: "3.125rem",
    },
    cancelBtn: {
        "@media(max-width:767px)": {
            marginTop: "1rem",
        },
    },
})

const UploadVideoPhoto = ({ openDeleteModel, onDelete, closeDeleteModal, handleCurrentActive }) => {
    const classes = useStyles()
    const [showCodeModal, setShowCodeModal] = useState(false)
    const [showUPloadMediaModal, setShowUPloadMediaModal] = useState(false)
    const [selectionModel, setSelectionModel] = useState(false)
    const [photoCode, setPhotoCode] = useState([])
    const [activeElement] = useState(["#upload-video-photo", "#insert-project-name-details"])

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect()
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
    }
    useEffect(() => {
        const detectElement = () => {
            activeElement.forEach((item) => {
                const deviceContainer = document.querySelector(item)
                const bounding = isInViewport(deviceContainer)
                if (bounding) {
                    handleCurrentActive(item)
                }
            })
        }
        window.addEventListener("scroll", detectElement)
        return () => {
            window.removeEventListener("scroll", detectElement)
        }
    }, [activeElement, handleCurrentActive])

    const handleDelete = (i) => {
        const newData = [...photoCode]
        newData.splice(i, 1)
        setPhotoCode(newData)
    }

    const handleAddPhotoCodeData = (i) => {
        const data = [...photoCode]
        if (i === 0) {
            data.push(
                <PhotoCodeBox
                    showUploadMediaModel={() => setShowUPloadMediaModal(true)}
                    showCodeModel={() => setShowCodeModal(true)}
                    flexDirection="row"
                    pl="2rem"
                    onDelete={() => handleDelete(i)}
                />
            )
        } else if (i === 1) {
            data.push(
                <PhotoCodeBox
                    showUploadMediaModel={() => setShowUPloadMediaModal(true)}
                    showCodeModel={() => setShowCodeModal(true)}
                    flexDirection="row-reverse"
                    onDelete={() => handleDelete(i)}
                    rowReverseBox
                />
            )
        } else if (i === 2) {
            data.push(
                <Grid container alignItems="center" justify="center" className={classes.wrapper}>
                    <Box className={classes.closeIcon}>
                        <CloseIconBig width={16} onClick={() => handleDelete(i)} />
                    </Box>
                    <PhotoIcon className={classes.icon} onClick={() => setShowUPloadMediaModal(true)} />
                    <CodeIcon className={classes.icon} onClick={() => setShowCodeModal(true)} />
                    <TIcon className={classes.icon} />
                </Grid>
            )
        } else {
            data.push(
                <Grid style={{ width: "100%" }}>
                    <UploadPhoto onDelete={() => handleDelete(i)} />
                </Grid>
            )
        }
        setPhotoCode(data)
        setSelectionModel(false)
    }

    return (
        <Box>
            <AllModals
                selectionModal={selectionModel}
                onSelectModal={() => setSelectionModel(false)}
                handleAddPhotoCodeData={handleAddPhotoCodeData}
                openDeleteModal={openDeleteModel}
                showCodeModal={showCodeModal}
                showUPloadMediaModal={showUPloadMediaModal}
                onDelete={closeDeleteModal}
                onConfirmSendDetails={() => setShowCodeModal(false)}
                onCloseSendDetails={() => setShowCodeModal(false)}
                onCloseUploadMedia={() => setShowUPloadMediaModal(false)}
                closeDeleteModal={closeDeleteModal}
            />
            <Grid id="upload-video-photo" container alignItems="center" justify="center" className={classes.wrapper}>
                <PhotoIcon className={classes.icon} onClick={() => setShowUPloadMediaModal(true)} />
                <CodeIcon className={classes.icon} onClick={() => setShowCodeModal(true)} />
            </Grid>
            <ProjectCategory />
            {photoCode}
            <Grid container alignItems="center" justify="flex-end" className={classes.plusIconContainer}>
                <CardAdderButton onSelect={handleAddPhotoCodeData} />
            </Grid>
            <Grid container alignItems="center" justify="center" spacing={2} className={classes.buttonContainer}>
                <Grid item xs={6} sm={6} md={6} container>
                    <CustomButton
                        variant="borderButton"
                        externalclass={classes.previewButton}
                        label="Preview"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                    <CustomButton
                        variant="borderButton"
                        externalclass={classes.confirmButton}
                        label="Confirm"
                        fullWidth
                    />
                </Grid>
                <CustomButton
                    variant="textButton"
                    label="Cancel"
                    fullWidth
                    color={colors.darkRed}
                    externalclass={classes.cancelBtn}
                />
                <CustomButton
                    variant="textButton"
                    label="Delete work"
                    fullWidth
                    color={colors.darkRed}
                    onClick={onDelete}
                />
            </Grid>
            <Grid container alignItems="center" justify="center" className={classes.socialIconContainer}>
                <FacebookIcon className={classes.socialIcon} />
                <TwitterIcon className={classes.socialIcon} />
                <LinkedinIcon width={36} height={36} className={classes.socialIcon} />
            </Grid>
        </Box>
    )
}

UploadVideoPhoto.propTypes = {
    openDeleteModel: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    closeDeleteModal: PropTypes.func.isRequired,
    handleCurrentActive: PropTypes.func.isRequired,
}

export default UploadVideoPhoto
