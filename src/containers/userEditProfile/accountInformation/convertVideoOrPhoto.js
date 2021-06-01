import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import React, { useState } from "react"
import classnames from "classnames"
import CustomButton from "../../../components/buttons/customButton"
import { SendDetailsModal } from "../../../components/modal/sendDetailsModal"
import { colors } from "../../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        padding: "2rem",
        backgroundColor: colors.white,
        "@media(max-width:575px)": {
            padding: "1rem",
        },
    },
    button: {
        backgroundColor: colors.lighterPrimary,
        height: "3.5rem",
        padding: "0.625rem 3rem",
        color: colors.black,
    },
    title: { marginBottom: "2rem" },
    wrap: {
        width: "100%",
        flexWrap: "nowrap",
        "@media (max-width:767px)": {
            display: "block",
            flexDirection: "column",
            width: "100%",
        },
    },
    modaltitle: {
        color: colors.lighterGray,
        "@media (max-width: 767px)": {
            marginBottom: "0rem",
            textAlign: "center",
        },
    },
    textStyles: {
        width: "6%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: colors.lighterGray,
        "@media (max-width: 767px)": {
            margin: "0.625rem auto",
            width: "100%",
        },
    },
    copyEmbed: {
        width: "47%",
        "@media (max-width: 767px)": {
            width: "100%",
        },
    },
    upload: {
        width: "47%",
        "@media (max-width: 767px)": {
            width: "100%",
        },
    },
})

export const ConvertVideoOrPhoto = () => {
    const classes = useStyles()
    const [codeCopyModal, setCodeCopyModal] = useState(false)

    return (
        <>
            <SendDetailsModal
                modalName="Insert code"
                title="Embed and existing Youtube or Vimeo video code into your project"
                isTextArea
                hideCount
                textAreaValue={`<iframe width="560" height="315" src="https://www.youtube.com/embed/50Twc4ghBFM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`}
                isOpen={codeCopyModal}
                onClose={() => setCodeCopyModal(false)}
                externalclass={classes.modaltitle}
            />
            <Box className={classes.wrapper}>
                <Typography variant="h6" className={classes.title}>
                    COVER VIDEO OR PHOTO
                </Typography>
                <Grid container className={classes.wrap}>
                    <CustomButton
                        label="Copy embed video"
                        externalclass={classnames(classes.button, classes.copyEmbed)}
                        onClick={() => setCodeCopyModal(true)}
                    />

                    <Typography className={classes.textStyles}>or</Typography>
                    <CustomButton
                        label="Upload a photo"
                        wantFile
                        externalclass={classnames(classes.button, classes.upload)}
                    />
                </Grid>
            </Box>
        </>
    )
}

ConvertVideoOrPhoto.defaultProps = {}

ConvertVideoOrPhoto.propTypes = {}
