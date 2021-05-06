import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { useRouter } from "next/router"
import React from "react"
import PropTypes from "prop-types"
import { CustomButton } from "../../components/buttons/customButton"
import { CodeIcon } from "../../components/icons/codeIcon"
import { PhotoIcon } from "../../components/icons/photoIcon"
import { TIcon } from "../../components/icons/tIcon"
import { ModalComponent } from "../../components/modal/modalComponent"
import { SendDetailsModal } from "../../components/modal/sendDetailsModal"
import { UploadMediaModal } from "../../components/modal/uploadMediaModal"
import { colors } from "../../theme/colors"
import { PhotoCodeBox } from "./uploadVideoPhoto/photoCodeBox"

const useStyles = makeStyles({
    modalWrapper: {
        maxHeight: "90vh",
        overflowY: "auto",
        width: "100%",
    },
    wrapper: {
        backgroundColor: colors.white,
        color: colors.white,
        padding: "6.25rem 0",
        border: `1px solid ${colors.lightGray}`,
        marginBottom: "1.125rem",
        "& svg": {
            cursor: "pointer",
        },
        "@media(max-width:576px)": {
            padding: "2.5rem 0",
        },
    },
    deleteWrapper: {
        width: "100%",
        marginTop: "1rem",
        padding: "2rem",
        margin: "0",
        backgroundColor: colors.lighterPrimary,
        flexWrap: "nowrap",
        "@media (max-width: 767px)": {
            flexWrap: "wrap",
        },
    },
    deletewrap: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonDelete: {
        width: "18.5rem",
        height: "3.75rem",
    },
    hideBtn: {
        textTransform: "none",
    },
    deleteTitle: {
        marginTop: "2rem",
        marginBottom: "5.312rem",
    },
    buttonCancel: {
        width: "18.5rem",
        height: "3.75rem",
        marginRight: "1.5rem",
    },
})

export const AllModals = ({
    selectionModal,
    onSelectModal,
    handleAddPhotoCodeData,
    openDeleteModal,
    onDelete,
    showCodeModal,
    onConfirmSendDetails,
    onCloseSendDetails,
    showUPloadMediaModal,
    onCloseUploadMedia,
}) => {
    const classes = useStyles()
    const routes = useRouter()
    return (
        <>
            {/* <ModalComponent openOrNot={selectionModal} onClose={onSelectModal}>
                <Box className={classes.modalWrapper}>
                    <Box onClick={() => handleAddPhotoCodeData(0)}>
                        <PhotoCodeBox flexDirection="row" />
                    </Box>
                    <Box onClick={() => handleAddPhotoCodeData(1)}>
                        <PhotoCodeBox flexDirection="row-reverse" />
                    </Box>
                    <Box onClick={() => handleAddPhotoCodeData(2)}>
                        <Grid container alignItems="center" justify="center" className={classes.wrapper}>
                            <PhotoIcon className={classes.icon} />
                            <CodeIcon className={classes.icon} />
                            <TIcon className={classes.icon} />
                        </Grid>
                    </Box>
                </Box>
            </ModalComponent> */}
            <ModalComponent openOrNot={openDeleteModal} onClose={onDelete}>
                <Grid container alignItems="center" justify="center" direction="column">
                    <Typography variant="h4">Delete or hide work</Typography>
                    <Typography className={classes.deleteTitle}>
                        Instead of deleting the work for all your team members, there’s a way to hide it.
                    </Typography>
                    <Box className={classes.deleteWrapper} spacing={2}>
                        <Box className={classes.deletewrap}>
                            <CustomButton label="Cancel" variant="cancel" externalclass={classes.buttonCancel} />
                            <CustomButton
                                label="Delete Work"
                                externalclass={classes.buttonDelete}
                                onClick={() => routes.push({ pathname: "/profile", query: { showNotification: true } })}
                            />
                        </Box>
                        <Box style={{ textAlign: "center", marginTop: "1.2rem" }}>
                            <CustomButton
                                variant="textButton"
                                label="Hide"
                                color={colors.black}
                                externalclass={classes.hideBtn}
                            />
                        </Box>
                    </Box>
                </Grid>
            </ModalComponent>
            <SendDetailsModal
                modalName="Insert code"
                title="Embed and existing Youtube or Vimeo video code into your project"
                isTextArea
                hideCount
                textAreaValue={`<iframe width="560" height="315" src="https://www.youtube.com/embed/50Twc4ghBFM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`}
                isOpen={showCodeModal}
                onConfirm={onConfirmSendDetails}
                onClose={onCloseSendDetails}
                externalclass={classes.modaltitle}
            />
            <UploadMediaModal modalName="Upload media" isOpen={showUPloadMediaModal} onClose={onCloseUploadMedia} />
        </>
    )
}

AllModals.propTypes = {
    selectionModal: PropTypes.bool.isRequired,
    onSelectModal: PropTypes.func.isRequired,
    handleAddPhotoCodeData: PropTypes.func.isRequired,
    openDeleteModal: PropTypes.bool.isRequired,
    showCodeModal: PropTypes.bool.isRequired,
    showUPloadMediaModal: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onConfirmSendDetails: PropTypes.func.isRequired,
    onCloseSendDetails: PropTypes.func.isRequired,
    onCloseUploadMedia: PropTypes.func.isRequired,
}
