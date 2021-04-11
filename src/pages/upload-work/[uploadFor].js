import React, { useState } from "react"
import PropTypes from "prop-types"
import { Box, Grid, makeStyles } from "@material-ui/core"
import { useRouter } from "next/router"
import { ContentWrapper } from "../../components/contentWrapper/contentWrapper"
import { EditOptions } from "../../containers/userEditProfile/editOptions"
import { HeaderWrapper } from "../../components/header/headerWrapper"
import { colors } from "../../theme/colors"
import { UploadVideoPhoto } from "../../containers/uploadWork/uploadVideoPhoto"
import { uploadWorkOptions } from "../../data/uploadWorkOptions"

const useStyles = makeStyles({
    wrapper: {
        paddingTop: "6rem",
        backgroundColor: colors.lighterPrimary,
    },
    colWrapper: {
        backgroundColor: colors.lighterPrimary,
    },
    col1: {
        width: "calc(100% - 27.5rem)",
    },
    col2: {
        width: "25rem",
        backgroundColor: colors.white,
        border: `1px solid ${colors.lightGray}`,
    },
})

const UploadWork = (props) => {
    const classes = useStyles()
    const routes = useRouter()
    const { query, push } = routes
    const { uploadFor } = query
    console.log("UploadFor", uploadFor)
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
                        {uploadWorkOptions.map((item, i) => (
                            <EditOptions
                                key={i}
                                optionName={item.optionName}
                                isActive={uploadFor === item.pathSlug}
                                onClick={() => push(`/upload-work/${item.pathSlug}`)}
                            />
                        ))}
                    </Box>
                </Grid>
            </ContentWrapper>
        </>
    )
}

UploadWork.propTypes = {}

export default UploadWork
