import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import React, { useState } from "react"
import { CustomButton } from "../../../components/buttons/customButton"
import { SendDetailsModal } from "../../../components/modal/sendDetailsModal"
import { colors } from "../../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        marginTop: "1rem",
        padding: "2rem",
        backgroundColor: colors.white,
    },
    button: {
        backgroundColor: colors.lightGray,
        height: "2.5rem",
        padding: "0.625rem 3rem",
        color: colors.black,
    },
    title: {
        color: colors.lightGray,
        fontSize: "0.85rem",
    },
    wrap: {
        flexWrap: "nowrap",
        "@media (max-width:767px)": {
            flexWrap: "wrap",
            flexDirection: "column",
            "& button": {
                width: "100%",
            },
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
            />
            <Box className={classes.wrapper}>
                <Typography className={classes.title}>COVER VIDEO OR PHOTO</Typography>
                <Grid container alignItems="center" justify="space-between" className={classes.wrap}>
                    <CustomButton
                        label="Copy embed video"
                        externalclass={classes.button}
                        onClick={() => setCodeCopyModal(true)}
                    />
                    <Typography>or</Typography>
                    <CustomButton label="Upload a photo" wantFile externalclass={classes.button} />
                </Grid>
            </Box>
        </>
    )
}

ConvertVideoOrPhoto.defaultProps = {}

ConvertVideoOrPhoto.propTypes = {}
