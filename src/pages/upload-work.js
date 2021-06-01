import React, { useState } from "react"
import dynamic from "next/dynamic"
import { Box, Grid, makeStyles } from "@material-ui/core"
import { colors } from "../theme/colors"
import { uploadWorkOptions } from "../data/uploadWorkOptions"

const ContentWrapper = dynamic(() => import("../components/contentWrapper/contentWrapper"))
const HeaderWrapper = dynamic(() => import("../components/header/headerWrapper"))
const Footer = dynamic(() => import("../components/footer"))
const UploadVideoPhoto = dynamic(() => import("../containers/uploadWork/uploadVideoPhoto"))
const EditOptions = dynamic(() => import("../containers/userEditProfile/editOptions"))
const CustomButton = dynamic(() => import("../components/buttons/customButton"))

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: `${colors.lighterPrimary}!important`,
        position: "relative",
        "@media(max-width:1024px)": {
            padding: "6rem 0px 0px 0px!important",
        },
    },
    colWrapper: {
        backgroundColor: colors.lighterPrimary,
    },
    col1: {
        width: "calc(100% - 27.5rem)",
        marginTop: "8rem",
        "@media(max-width:1024px)": {
            width: "100%",
            marginTop: "1.5rem",
        },
        "@media(max-width:767px)": {
            marginTop: "0.5rem",
        },
    },
    col2: {
        width: "25rem",
        "@media(max-width:1024px)": {
            display: "none",
        },
    },
    innerWrapper: {
        position: "sticky",
        top: "8rem",
        backgroundColor: colors.white,
        border: `1px solid ${colors.lightGray}`,
    },
    borderButton: {
        backgroundColor: `${colors.white}!important`,
        color: `${colors.black}!important`,
        border: `2px solid ${colors.black}`,
        maxHeight: "3.125rem",
    },
    buttonContainer: {
        padding: "1.9rem",
        width: "100%",
        margin: 0,
    },
    footer: {
        marginTop: "0!important",
    },
})

const UploadWork = () => {
    const classes = useStyles()
    const [openDeleteModel, setOpenDeleteModel] = useState(false)
    const [currentActive, setCurrentActive] = useState("#upload-video-photo")
    const renderOption = () => {
        return (
            <UploadVideoPhoto
                openDeleteModel={openDeleteModel}
                handleCurrentActive={(item) => setCurrentActive(item)}
                onDelete={() => {
                    setOpenDeleteModel(true)
                }}
                closeDeleteModal={() => {
                    setOpenDeleteModel(false)
                }}
            />
        )
    }
    return (
        <>
            <HeaderWrapper isAuthenticated isScrollDetect={false} />
            <ContentWrapper externalclass={classes.wrapper}>
                <Grid container justify="space-between" className={classes.colWrapper}>
                    <Box className={classes.col1}>{renderOption()}</Box>
                    <Box className={classes.col2}>
                        <Box className={classes.innerWrapper}>
                            {uploadWorkOptions.map((item, i) => (
                                <EditOptions
                                    key={i}
                                    optionName={item.optionName}
                                    isHref
                                    isActive={currentActive === item.pathSlug}
                                    href={item.pathSlug}
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
                                    <CustomButton
                                        variant="borderButton"
                                        label="Confirm"
                                        style={{ height: "3.125rem" }}
                                        fullWidth
                                    />
                                </Grid>
                                <CustomButton
                                    variant="textButton"
                                    style={{ height: "3.125rem" }}
                                    label="Cancel"
                                    fullWidth
                                    color={colors.darkRed}
                                />
                                <CustomButton
                                    variant="textButton"
                                    label="Delete work"
                                    fullWidth
                                    color={colors.darkRed}
                                    onClick={() => setOpenDeleteModel(true)}
                                />
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </ContentWrapper>

            <Footer externalclass={classes.footer} />
        </>
    )
}

UploadWork.propTypes = {}

export default UploadWork
