import React, { useState } from "react"
import PropTypes from "prop-types"
import { Box, Grid, makeStyles } from "@material-ui/core"
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
import { roleOptions } from "../../../data/roles"
import { AddTeamMember } from "./addTeamMember"
import { SendDetailsModal } from "../../../components/modal/sendDetailsModal"
import { UploadMediaModal } from "../../../components/modal/uploadMediaModal"

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
    },
    whiteBg: {
        backgroundColor: colors.white,
        marginBottom: "1.125rem",
        padding: "2rem",
    },
    icon: {
        margin: "0 2rem",
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
})

export const UploadVideoPhoto = () => {
    const classes = useStyles()
    const [showAddTeamMember, setShowAddTeamMember] = useState(false)
    const [showCodeModal, setShowCodeModal] = useState(false)
    const [showUPloadMediaModal, setShowUPloadMediaModal] = useState(false)
    const [photoCode, setPhotoCode] = useState([1])
    const [photoCodeReverse, setPhotoCodeReverse] = useState([1])
    const [photoCodeText, setPhotoCodeText] = useState([1])
    const [photoSliderData, setPhotoSliderData] = useState([1])

    const handleAddPhotoCodeData = () => {
        const data = [...photoCode]
        data.push(1)
        setPhotoCode(data)
    }

    const handleAddPhotoCodeReverseData = () => {
        const data = [...photoCodeReverse]
        data.push(1)
        setPhotoCodeReverse(data)
    }

    const handleAddPhotoCodeTextData = () => {
        const data = [...photoCodeText]
        data.push(1)
        setPhotoCodeText(data)
    }

    const handlePhotoSliderData = () => {
        const data = [...photoSliderData]
        data.push(1)
        setPhotoSliderData(data)
    }

    return (
        <Box>
            <SendDetailsModal
                modalName="Insert code"
                title="Embed and existing Youtube or Vimeo video code into your project"
                isTextArea
                hideCount
                isOpen={showCodeModal}
                onConfirm={() => setShowCodeModal(false)}
                onClose={() => setShowCodeModal(false)}
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
                        <InputWithLabelIcon labelColor={colors.lighterGray} fontWeight="bold" label="Project name" />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                                <SelectWithLabelIcon
                                    options={roleOptions}
                                    labelColor={colors.lighterGray}
                                    customValue="Director"
                                    variantStyle="optionWithCheckboxStyle"
                                    fontWeight="bold"
                                    label="Project category"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <InputWithLabelIcon
                                    labelColor={colors.lighterGray}
                                    fontWeight="bold"
                                    label="The making year"
                                />
                            </Grid>
                        </Grid>
                        <InputWithLabelIcon labelColor={colors.lighterGray} fontWeight="bold" label="Project client" />
                        <InputWithLabelIcon labelColor={colors.lighterGray} fontWeight="bold" label="External link" />
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
            {photoCode.map((item, i) => (
                <PhotoCodeBox key={i} />
            ))}
            <Grid container alignItems="center" justify="flex-end" className={classes.plusIconContainer}>
                <AddCircleIcon onClick={handleAddPhotoCodeData} />
            </Grid>
            {photoCodeReverse.map((item, i) => (
                <PhotoCodeBox key={i} flexDirection="row-reverse" />
            ))}
            <Grid container alignItems="center" justify="flex-end" className={classes.plusIconContainer}>
                <AddCircleIcon onClick={handleAddPhotoCodeReverseData} />
            </Grid>
            {photoCodeText.map((item, i) => (
                <Grid key={i} container alignItems="center" justify="center" className={classes.wrapper}>
                    <PhotoIcon className={classes.icon} />
                    <CodeIcon className={classes.icon} />
                    <TIcon className={classes.icon} />
                </Grid>
            ))}

            <Grid container alignItems="center" justify="flex-end" className={classes.plusIconContainer}>
                <AddCircleIcon onClick={handleAddPhotoCodeTextData} />
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

UploadVideoPhoto.propTypes = {}
