import React, { useEffect, useState } from "react"
import { Box, Grid, makeStyles } from "@material-ui/core"
import { useRouter } from "next/router"
import { ContentWrapper } from "../components/contentWrapper/contentWrapper"
import { EditOptions } from "../containers/userEditProfile/editOptions"
import { HeaderWrapper } from "../components/header/headerWrapper"
import { colors } from "../theme/colors"
import { UploadVideoPhoto } from "../containers/uploadWork/uploadVideoPhoto"
import { uploadWorkOptions } from "../data/uploadWorkOptions"
import { CustomButton } from "../components/buttons/customButton"
import { Footer } from "../components/footer"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.lighterPrimary,
        position: "relative",
        "@media(max-width:767px)": {
            padding: "5rem 0px 0px 0px",
        },
    },
    colWrapper: {
        backgroundColor: colors.lighterPrimary,
    },
    col1: {
        width: "calc(100% - 27.5rem)",
        marginTop: "7rem",
        "@media(max-width:992px)": {
            width: "100%",
        },
    },
    col2: {
        width: "25rem",
        "@media(max-width:992px)": {
            display: "none",
        },
    },
    innerWrapper: {
        position: "sticky",
        top: "7rem",
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

    useEffect(() => {
        console.log("routes", routes)
    })

    const [openDeleteModel, setOpenDeleteModel] = useState(false)
    const renderOption = () => {
        return (
            <UploadVideoPhoto
                openDeleteModel={openDeleteModel}
                onDelete={() => {
                    setOpenDeleteModel(false)
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
                                    // isActive={uploadFor === item.pathSlug}
                                    href={`#${item.pathSlug}`}
                                    // onClick={() => push(`/upload-work/${item.pathSlug}`)}
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
                                <CustomButton variant="textButton" label="Cancel" fullWidth color={colors.darkRed} />
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
