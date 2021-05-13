import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import React, { useState } from "react"
import  CustomButton  from "../../../components/buttons/customButton"
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
        backgroundColor: colors.lightGray,
        height: "2.5rem",
        padding: "0.625rem 3rem",
        color: colors.black,
    },
    title: { marginBottom: "1.5rem" },
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
    modaltitle: {
        fontFamily: "Helvetica",
        fontSize: "1.375rem",
        lineHeight: "2.1rem",
        textAlign: "center",
        color:colors.lighterGray,
         marginBottom:"2rem",
         "@media (max-width: 767px)": {
            marginBottom:"1rem",
        },
         
    }
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
