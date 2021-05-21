import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { useRouter } from "next/router"
import React from "react"
import PropTypes from "prop-types"
import CustomButton from "../../components/buttons/customButton"
import ModalComponent from "../../components/modal/modalComponent"
import { SendDetailsModal } from "../../components/modal/sendDetailsModal"
import { UploadMediaModal } from "../../components/modal/uploadMediaModal"
import { colors } from "../../theme/colors"

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
        "@media(max-width:575px)": {
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
        "@media (max-width: 767px)": {
            flexDirection: "column-reverse",
        },
    },
    buttonDelete: {
        width: "18.5rem",
        height: "3.75rem",
        border: `1px solid ${colors.black}`,
        "@media (max-width: 767px)": {
            width: "100%",
            marginBottom: "1rem",
        },
    },
    buttonCancel: {
        width: "18.5rem",
        height: "3.75rem",
        marginRight: "1.5rem",
        "@media (max-width: 767px)": {
            width: "100%",
            marginRight: "0rem",
        },
    },
    hideBtn: {
        textTransform: "none",
    },
    deleteTitle: {
        marginTop: "2rem",
        marginBottom: "5.312rem",
        "@media(max-width:767px)": {
            marginTop: "1rem",
            padding: "0 2rem",
            marginBottom: "2rem",
            textAlign: "center",
        },
    },
    title: {
        "@media(max-width:767px)": {
            width: "100%",
            textAlign: "center",
            fontSize: "28px",
        },
    },
    innerWrapper: {
        marginTop: "4rem",
        // padding:"2rem",
        "@media(max-width:1024px)": {
            marginTop: "6rem",
        },
        "@media(max-width:768px)": {
            marginTop: "4rem",
        },
    },
})

export const AllModals = ({
    openDeleteModal,
    onDelete,
    showCodeModal,
    onConfirmSendDetails,
    onCloseSendDetails,
    showUPloadMediaModal,
    onCloseUploadMedia,
    closeDeleteModal,
}) => {
    const classes = useStyles()
    const routes = useRouter()
    return (
        <>
            <ModalComponent padding="0" openOrNot={openDeleteModal} onClose={onDelete}>
                <Grid
                    container
                    alignItems="center"
                    justify="center"
                    direction="column"
                    className={classes.innerWrapper}>
                    <Typography variant="h4" className={classes.title}>
                        Delete or hide work
                    </Typography>
                    <Typography className={classes.deleteTitle}>
                        Instead of deleting the work for all your team members, there’s a way to hide it.
                    </Typography>
                    <Box className={classes.deleteWrapper} spacing={2}>
                        <Grid className={classes.deletewrap} container>
                            <CustomButton
                                label="Cancel"
                                variant="cancel"
                                externalclass={classes.buttonCancel}
                                onClick={closeDeleteModal}
                            />
                            <CustomButton
                                label="Delete Work"
                                externalclass={classes.buttonDelete}
                                onClick={() => routes.push({ pathname: "/profile", query: { showNotification: true } })}
                            />
                        </Grid>
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
    openDeleteModal: PropTypes.bool.isRequired,
    showCodeModal: PropTypes.bool.isRequired,
    showUPloadMediaModal: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onConfirmSendDetails: PropTypes.func.isRequired,
    onCloseSendDetails: PropTypes.func.isRequired,
    onCloseUploadMedia: PropTypes.func.isRequired,
    closeDeleteModal: PropTypes.func.isRequired,
}
