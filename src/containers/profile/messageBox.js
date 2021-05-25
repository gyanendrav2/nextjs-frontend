import React from "react"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { images } from "../../assets/images"
import { PictureOverSquare } from "../../components/cards/pictureOverSquare"
import CustomButton from "../../components/buttons/customButton"
import { InputWithLabelIcon } from "../../components/inputs/inputWithLabelIcon"
import { TextArea } from "../../components/inputs/textArea"
import { TwoColModalGrid } from "../../components/grid/twoColModalGrid"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    infoWrapper: {
        margin: "auto",
        marginTop: "2rem",
        width: "calc(100% - 2.5rem)",
        "@media (max-width:767px)": {
            width: "100%",
            maxHeight: "90vh",
            marginTop: "0",
        },
    },
    name: {
        fontSize: "2.5rem",
        lineHeight: "3.125rem",
        marginBottom: "2rem",
    },
    submitContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "2rem",
        marginBottom: "3rem",
        "@media (max-width:767px)": {
            display: "flex",
            flexDirection: "column-reverse",
            justifyContent: "space-between",
            alignItems: "inherit",
        },
    },
    submit: {},
    submitBtn: {
        width: "100%",
    },
})

const MessageBox = () => {
    const classes = useStyles()
    return (
        <TwoColModalGrid
            col1Children={<PictureOverSquare mobileHide image={images.brandon} />}
            col2Children={
                <Box>
                    <Box className={classes.infoWrapper}>
                        <Typography className={classes.name}>Message Me</Typography>
                        <InputWithLabelIcon
                            name="email"
                            placeholderColor={colors.lighterGray}
                            placeholder="Email address"
                        />
                        <TextArea placeholder="Message" />
                        <Grid container spacing={2} className={classes.submitContainer}>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <CustomButton variant="cancel" label="cancel" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.submit}>
                                <CustomButton label="Confirm" type="submit" externalclass={classes.submitBtn} />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            }
        />
    )
}

MessageBox.propTypes = {}

export default MessageBox
