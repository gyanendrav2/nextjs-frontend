import React from "react"
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

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.white,
        color: colors.white,
        padding: "6.25rem 0",
        border: `1px solid ${colors.lightGray}`,
        marginBottom: "1.125rem",
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
})

export const UploadVideoPhoto = (props) => {
    const classes = useStyles()
    return (
        <Box>
            <Grid container alignItems="center" justify="center" className={classes.wrapper}>
                <PhotoIcon className={classes.icon} />
                <CodeIcon className={classes.icon} />
            </Grid>
            <Grid container className={classes.whiteBg}>
                <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                    <Box>
                        <InputWithLabelIcon labelColor={colors.lighterGray} fontWeight="bold" label="Project name" />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                                <InputWithLabelIcon
                                    labelColor={colors.lighterGray}
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
                        <CustomButton label="Add a team member +" externalclass={classes.teamAddButton} />
                    </Box>
                </Grid>
            </Grid>
            <PhotoCodeBox />
            <PhotoCodeBox flexDirection="row-reverse" />
            <Grid container alignItems="center" justify="center" className={classes.wrapper}>
                <PhotoIcon className={classes.icon} />
                <CodeIcon className={classes.icon} />
                <TIcon className={classes.icon} />
            </Grid>
            <UploadPhoto />
        </Box>
    )
}

UploadVideoPhoto.propTypes = {}
