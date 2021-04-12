import React from "react"
import { Box, Grid, makeStyles } from "@material-ui/core"
import { useRouter } from "next/router"
import { ContentWrapper } from "../../components/contentWrapper/contentWrapper"
import { EditOptions } from "../../containers/userEditProfile/editOptions"
import { HeaderWrapper } from "../../components/header/headerWrapper"
import { colors } from "../../theme/colors"
import { UploadVideoPhoto } from "../../containers/uploadWork/uploadVideoPhoto"
import { uploadWorkOptions } from "../../data/uploadWorkOptions"
import { CustomButton } from "../../components/buttons/customButton"

const useStyles = makeStyles({
    wrapper: {
        paddingTop: "6rem",
        backgroundColor: colors.lighterPrimary,
        position: "relative",
    },
    colWrapper: {
        backgroundColor: colors.lighterPrimary,
    },
    col1: {
        width: "calc(100% - 27.5rem)",
    },
    col2: {
        width: "25rem",
    },
    innerWrapper: {
        position: "sticky",
        top: "6rem",
        backgroundColor: colors.white,
        border: `1px solid ${colors.lightGray}`,
    },
    borderButton: {
        backgroundColor: colors.white,
        color: colors.black,
        border: `1px solid ${colors.black}`,
    },
    buttonContainer: {
        padding: "1.9rem",
    },
})

const UploadWork = () => {
    const classes = useStyles()
    const routes = useRouter()
    const { query, push } = routes
    const { uploadFor } = query
    const renderOption = () => {
        if (uploadFor === "upload-video-photo") {
            return <UploadVideoPhoto />
        }
    }
    return (
        <>
            <HeaderWrapper isScrollDetect={false} />
            <ContentWrapper externalclass={classes.wrapper}>
                <Grid container justify="space-between" className={classes.colWrapper}>
                    <Box className={classes.col1}>{renderOption()}</Box>
                    <Box className={classes.col2}>
                        <Box className={classes.innerWrapper}>
                            {uploadWorkOptions.map((item, i) => (
                                <EditOptions
                                    key={i}
                                    optionName={item.optionName}
                                    isActive={uploadFor === item.pathSlug}
                                    onClick={() => push(`/upload-work/${item.pathSlug}`)}
                                />
                            ))}
                            <Grid
                                container
                                alignItems="center"
                                justify="center"
                                spacing={2}
                                className={classes.buttonContainer}>
                                <Grid item xs={12} sm={12} md={6}>
                                    <CustomButton
                                        variant="borderButton"
                                        externalclass={classes.borderButton}
                                        label="Preview"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <CustomButton variant="borderButton" label="Confirm" fullWidth />
                                </Grid>
                                <CustomButton variant="textButton" label="Cancel" fullWidth disableRipple />
                                <CustomButton variant="textButton" label="Delete work" fullWidth disableRipple />
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </ContentWrapper>
        </>
    )
}

UploadWork.propTypes = {}

export default UploadWork
