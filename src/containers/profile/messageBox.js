import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { images } from "../../assets/images";
import PictureOverSquare from "../../components/cards/pictureOverSquare";
import FollowingFollwers from "../../components/texts/followingFollwers";
import CustomButton from "../../ui/button/CustomButton";
import { icons } from "../../assets/icons";
import { colors } from "../../theme/colors";
import SocialButtons from "../../components/buttons/socialButtons";
import TwoColModalGrid from "../../components/Grid/twoColModalGrid";
import InputWithLabelIcon from "../../components/inputs/InputWithLabelIcon";

const useStyles = makeStyles({
    infoWrapper: {
        marginTop: "2rem",
        width: "calc(100% - 2.5rem)",
    },
    name: {
        fontSize: "2.5rem",
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
                    </Box>
                </Box>
            }
        />
    );
};

MessageBox.propTypes = {};

export default MessageBox;
