import React from "react";
// import PropTypes from "prop-types";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { images } from "../../assets/images";
import PictureOverSquare from "../../components/cards/pictureOverSquare";
import CustomButton from "../../components/buttons/customButton";
import TwoColModalGrid from "../../components/Grid/twoColModalGrid";
import InputWithLabelIcon from "../../components/inputs/InputWithLabelIcon";
import TextArea from "../../components/inputs/TextArea";

const useStyles = makeStyles({
    infoWrapper: {
        marginTop: "2rem",
        width: "calc(100% - 2.5rem)",
    },
    name: {
        fontSize: "2.5rem",
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
});

const MessageBox = () => {
    const classes = useStyles();
    return (
        <TwoColModalGrid
            col1Children={<PictureOverSquare image={images.maskGroup} />}
            col2Children={
                <Box className={classes.col2}>
                    <Box className={classes.infoWrapper}>
                        <Typography variant="h4" className={classes.name}>
                            Message Me
                        </Typography>

                        <InputWithLabelIcon placeholder="Email address" />
                        <TextArea placeholder="Message" />
                        <Grid container spacing={2} className={classes.submitContainer}>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <CustomButton variant="cancel" label="cancel" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.submit}>
                                <CustomButton label="Confirm" type="submit" externalClass={classes.submitBtn} />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            }
        />
    );
};

MessageBox.propTypes = {};

export default MessageBox;