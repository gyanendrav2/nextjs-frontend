import React, { useState } from "react"
import PropTypes from "prop-types"
import { Box, Grid, makeStyles } from "@material-ui/core"
import classnames from "classnames"
import { PhotoIcon } from "../../../components/icons/photoIcon"
import { CodeIcon } from "../../../components/icons/codeIcon"
import { colors } from "../../../theme/colors"
import { InputWithLabelIcon } from "../../../components/inputs/inputWithLabelIcon"
import { CustomButton } from "../../../components/buttons/customButton"
import { PhotoCodeBox } from "./photoCodeBox"
import { TIcon } from "../../../components/icons/tIcon"
import { UploadPhoto } from "./uploadPhoto"
import { AddCircleIcon } from "../../../components/icons/addCircleIcon"
import { LinkedinIcon } from "../../../components/icons/linkedinIcon"
import { FacebookIcon } from "../../../components/icons/facebookIcon"
import { TwitterIcon } from "../../../components/icons/twitterIcon"
import { SelectWithLabelIcon } from "../../../components/inputs/selectWithLabelIcon"
import { roleCategories } from "../../../data/roles"
import { AddTeamMember } from "./addTeamMember"
import { ChipCards } from "../../../components/cards/chipCards"
import { AllModals } from "../allModals"
import { CardAdderButton } from "./cardAdderButton"
import { CloseIconBig } from "../../../components/icons/closeIconBig"

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
        "@media(max-width:576px)": {
            padding: "2.5rem 0",
        },
    },
    whiteBg: {
        backgroundColor: colors.white,
        marginBottom: "1.125rem",
        padding: "2rem",
    },
    icon: {
        margin: "0 2rem",
        "@media(max-width:576px)": {
            margin: "0 1rem",
        },
    },
    inputHeight: {
        height: "2.5rem",
        "@media(max-width:576px)": {
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
        marginBottom: "1rem",
    },
    socialIconContainer: {
        padding: "4rem 0",
    },
    socialIcon: {
        margin: "0.75rem",
    },
    modaltitle: {
        marginTop: "1.5rem",
        color: colors.lighterGray,
    },
    buttonContainer: {
        padding: "1.9rem",
        display: "none",
        "@media(max-width:992px)": {
            display: "flex",
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
})

export const UploadVideoPhoto = ({ openDeleteModel, onDelete, closeDeleteModal }) => {
    const classes = useStyles()
    const [showAddTeamMember, setShowAddTeamMember] = useState(false)
    const [showCodeModal, setShowCodeModal] = useState(false)
    const [showUPloadMediaModal, setShowUPloadMediaModal] = useState(false)
    const [photoCodeReverse, setPhotoCodeReverse] = useState([1])
    const [photoCodeText, setPhotoCodeText] = useState([1])
    // const [imageGallery, setImageGallery] = useState([1])
    const [photoSliderData, setPhotoSliderData] = useState([1])
    const [selectionModel, setSelectionModel] = useState(false)
    const [roleCategoriesdata, setRoleCategoriesdata] = useState(roleCategories)
    const [roles, setRoles] = useState([])
    const [showPhotocode, setShowPhotocode] = useState(false)
    const [photoCode, setPhotoCode] = useState([])

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

    const handleAddPhotoCodeReverseData = () => {
        const data = [...photoCodeReverse]
        data.push(1)
        setPhotoCodeReverse(data)
        setSelectionModel(false)
    }

    const handleAddPhotoCodeTextData = () => {
        const data = [...photoCodeText]
        data.push(1)
        setPhotoCodeText(data)
        setSelectionModel(false)
    }

    const handlePhotoSliderData = () => {
        const data = [...photoSliderData]
        data.push(1)
        setPhotoSliderData(data)
    }
    const handleRoles = (e, i) => {
        const data = [...roles]
        const tempRoleOptions = [...roleCategoriesdata]
        console.log(tempRoleOptions, i)
        tempRoleOptions[i].checked = !tempRoleOptions[i].checked
        setRoleCategoriesdata(tempRoleOptions)
        if (tempRoleOptions[i].checked) {
            data.push(e.value)
        }
        setRoles(data)
    }
    const handleChipItemDelete = (i) => {
        const data = [...roles]
        data.splice(i, 1)
        setRoles(data)
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
                onDelete={onDelete}
                onConfirmSendDetails={() => setShowCodeModal(false)}
                onCloseSendDetails={() => setShowCodeModal(false)}
                onCloseUploadMedia={() => setShowUPloadMediaModal(false)}
                closeDeleteModal={closeDeleteModal}
            />
            <Grid container alignItems="center" justify="center" className={classes.wrapper}>
                <PhotoIcon className={classes.icon} onClick={() => setShowUPloadMediaModal(true)} />
                <CodeIcon className={classes.icon} onClick={() => setShowCodeModal(true)} />
            </Grid>
            <Grid id="insert-project-name-details" container className={classes.whiteBg}>
                <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                    <Box>
                        <InputWithLabelIcon
                            labelColor={colors.lighterGray}
                            fontWeight="bold"
                            label="Project name"
                            placeholder="SiR - Hair Down (Official Video) ft. Kendrick Lamar"
                            externalclass={classnames(classes.inputHeight)}
                        />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                                <SelectWithLabelIcon
                                    options={roleCategories}
                                    labelColor={colors.lighterGray}
                                    // customValue="Director"
                                    variantStyle="optionWithCheckboxStyle"
                                    fontWeight="bold"
                                    label="Project category"
                                    placeholder="Multiselect categories"
                                    externalclass={classnames(classes.inputHeight)}
                                    handleOptionSelect={handleRoles}
                                />
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <ChipCards chips={roles} onDelete={handleChipItemDelete} />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <InputWithLabelIcon
                                    labelColor={colors.lighterGray}
                                    fontWeight="bold"
                                    label="The making year"
                                    placeholder="2020"
                                    externalclass={classnames(classes.inputHeight)}
                                />
                            </Grid>
                        </Grid>
                        <InputWithLabelIcon
                            labelColor={colors.lighterGray}
                            fontWeight="bold"
                            label="Project client"
                            placeholder="SiR, Top Dog Eintertainment Group"
                            externalclass={classnames(classes.inputHeight)}
                        />
                        <InputWithLabelIcon
                            labelColor={colors.lighterGray}
                            fontWeight="bold"
                            label="External link"
                            placeholder="-"
                            externalclass={classnames(classes.inputHeight)}
                        />
                        {!showAddTeamMember && (
                            <CustomButton
                                label="Add a team member +"
                                externalclass={classes.teamAddButton}
                                onClick={() => setShowAddTeamMember(true)}
                            />
                        )}
                    </Box>
                </Grid>

                <AddTeamMember
                    shouldVisible={showAddTeamMember}
                    onCancel={() => setShowAddTeamMember(false)}
                    onAdded={() => setShowAddTeamMember(false)}
                />
            </Grid>
            {photoCode}
            <Grid container alignItems="center" justify="flex-end" className={classes.plusIconContainer}>
                <CardAdderButton onSelect={handleAddPhotoCodeData} />
            </Grid>
            <Grid container alignItems="center" justify="center" spacing={2} className={classes.buttonContainer}>
                <Grid item xs={12} sm={6} md={6} container>
                    <CustomButton
                        variant="borderButton"
                        externalclass={classes.borderButton}
                        label="Preview"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <CustomButton variant="borderButton" label="Confirm" fullWidth />
                </Grid>
                <CustomButton variant="textButton" label="Cancel" fullWidth color={colors.darkRed} />
                <CustomButton
                    variant="textButton"
                    label="Delete work"
                    fullWidth
                    color={colors.darkRed}
                    onClick={() => setOpenDeleteModel(true)}
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
}
