import React, { useState } from "react"
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
import { SendDetailsModal } from "../../../components/modal/sendDetailsModal"
import { UploadMediaModal } from "../../../components/modal/uploadMediaModal"
import { ModalComponent } from "../../../components/modal/modalComponent"
import { Teams } from "./teams"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers"
// import { ChipCards } from "../../../components/cards/chipCards"

const useStyles = makeStyles({
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
    modelWrapper: {
        maxHeight: "90vh",
        overflowY: "auto",
        width: "100%",
    },
})

export const UploadVideoPhoto = () => {
    const classes = useStyles()
    const [showAddTeamMember, setShowAddTeamMember] = useState(false)
    const [showCodeModal, setShowCodeModal] = useState(false)
    const [showUPloadMediaModal, setShowUPloadMediaModal] = useState(false)
    const [photoCode, setPhotoCode] = useState([<PhotoCodeBox flexDirection="row" />])
    const [photoCodeReverse, setPhotoCodeReverse] = useState([1])
    const [photoCodeText, setPhotoCodeText] = useState([1])
    const [photoSliderData, setPhotoSliderData] = useState([1])
    const [selectionModel, setSelectionModel] = useState(false)
    // const { register, handleSubmit, errors } = useForm({
    //     resolver: yupResolver({}),
    // })
    // const [roleCategoriesdata, setRoleCategoriesdata] = useState([roleCategories])
    // const [roles, setRoles] = useState([])

    const handleAddPhotoCodeData = (i) => {
        const data = [...photoCode]
        if (i === 0) {
            data.push(<PhotoCodeBox flexDirection="row" />)
        } else if (i === 1) {
            data.push(<PhotoCodeBox flexDirection="row-reverse" />)
        } else {
            data.push(
                <Grid container alignItems="center" justify="center" className={classes.wrapper}>
                    <PhotoIcon className={classes.icon} />
                    <CodeIcon className={classes.icon} />
                    <TIcon className={classes.icon} />
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
    // const handleRoles = (e, i) => {
    //     const data = [...roles]
    //     const tempRoleOptions = [...roleCategoriesdata]
    //     tempRoleOptions[i].checked = !tempRoleOptions[i].checked
    //     setRoleCategoriesdata(tempRoleOptions)
    //     if (tempRoleOptions[i].checked) {
    //         data.push(e.value)
    //     }
    //     setRoles(data)
    // }
    // const handleChipItemDelete = (i) => {
    //     const data = [...roles]
    //     data.splice(i, 1)
    //     setRoles(data)
    // }
    return (
        <Box>
            <ModalComponent openOrNot={selectionModel} onClose={() => setSelectionModel(false)}>
                <Box className={classes.modelWrapper}>
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
            </ModalComponent>
            <SendDetailsModal
                modalName="Insert code"
                title="Embed and existing Youtube or Vimeo video code into your project"
                isTextArea
                hideCount
                textAreaValue={`<iframe width="560" height="315" src="https://www.youtube.com/embed/50Twc4ghBFM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`}
                isOpen={showCodeModal}
                onConfirm={() => setShowCodeModal(false)}
                onClose={() => setShowCodeModal(false)}
                externalclass={classes.modaltitle}
            />
            <UploadMediaModal
                modalName="Upload media"
                isOpen={showUPloadMediaModal}
                onClose={() => setShowUPloadMediaModal(false)}
            />
            <Grid container alignItems="center" justify="center" className={classes.wrapper}>
                <PhotoIcon className={classes.icon} onClick={() => setShowUPloadMediaModal(true)} />
                <CodeIcon className={classes.icon} onClick={() => setShowCodeModal(true)} />
            </Grid>
            <Grid container className={classes.whiteBg}>
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
                                    // handleOptionSelect={handleRoles}
                                />
                                {/* </Grid> */}
                                {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <ChipCards chips={roles} onDelete={handleChipItemDelete} />
                                </Grid> */}
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
               
                {showAddTeamMember && <AddTeamMember />}
            </Grid>
            {photoCode}
            <Grid container alignItems="center" justify="flex-end" className={classes.plusIconContainer}>
                <AddCircleIcon onClick={() => setSelectionModel(true)} />
            </Grid>
            {photoCodeReverse.map((item, i) => (
                <PhotoCodeBox key={i} flexDirection="row-reverse" />
            ))}
            <Grid container alignItems="center" justify="flex-end" className={classes.plusIconContainer}>
                <AddCircleIcon onClick={() => setSelectionModel(false)} />
            </Grid>
            {photoCodeText.map((item, i) => (
                <Grid key={i} container alignItems="center" justify="center" className={classes.wrapper}>
                    <PhotoIcon className={classes.icon} />
                    <CodeIcon className={classes.icon} />
                    <TIcon className={classes.icon} />
                </Grid>
            ))}

            <Grid container alignItems="center" justify="flex-end" className={classes.plusIconContainer}>
                <AddCircleIcon onClick={() => setSelectionModel(false)} />
            </Grid>
            {photoSliderData.map((item, i) => (
                <UploadPhoto key={i} />
            ))}
            <Grid container alignItems="center" justify="flex-end" className={classes.plusIconContainer}>
                <AddCircleIcon onClick={handlePhotoSliderData} />
            </Grid>
            <Grid container alignItems="center" justify="center" className={classes.socialIconContainer}>
                <FacebookIcon className={classes.socialIcon} />
                <TwitterIcon className={classes.socialIcon} />
                <LinkedinIcon width={36} height={36} className={classes.socialIcon} />
            </Grid>
        </Box>
    )
}
