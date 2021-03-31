import React from "react"
// import PropTypes from "prop-types";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { images } from "../../assets/images"
import { PictureOverSquare } from "../../components/cards/pictureOverSquare"
import { CustomButton } from "../../components/buttons/customButton"
import { InputWithLabelIcon } from "../../components/inputs/inputWithLabelIcon"
import { TextArea } from "../../components/inputs/textArea"
import { TwoColModalGrid } from "../../components/grid/twoColModalGrid"

const useStyles = makeStyles({
    infoWrapper: {
        marginTop: "2rem",
        width: "calc(100% - 2.5rem)",
        "@media (max-width:767px)": {
            width: "100%",
            maxHeight: "90vh",
        },
    },
    name: {
        fontSize: "2.5rem",
        lineHeight: "3.125rem",
    },
    submitContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-betweem",
        marginTop: "2rem",
        marginBottom: "3rem",
    },
    submit: {},
    submitBtn: {
        width: "100%",
        // padding: "1rem",
    },
})

export const MessageBox = () => {
    const classes = useStyles()
    return (
        <TwoColModalGrid
            col1Children={<PictureOverSquare image={images.maskGroup} />}
            col2Children={
                <Box className={classes.col2}>
                    <Box className={classes.infoWrapper}>
                        <Typography className={classes.name}>Message Me</Typography>
                        <InputWithLabelIcon name="" placeholder="Email address" />
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
