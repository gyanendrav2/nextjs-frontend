import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { images } from "../../assets/images";
import PictureOverSquare from "../../components/cards/pictureOverSquare";
import FollowingFollwers from "../../components/texts/followingFollwers";
import CustomButton from "../../components/buttons/customButton";
import { icons } from "../../assets/icons";
import { colors } from "../../theme/colors";
import SocialButtons from "../../components/buttons/socialButtons";
import TwoColModalGrid from "../../components/grid/twoColModalGrid";

const useStyles = makeStyles({
    infoWrapper: {
        marginTop: "2rem",
    },
    msgbtn: {
        marginRight: "1.4rem",
    },
    bio: {
        lineHeight: "2rem",
        color: colors.black,
        margin: "2rem 0",
    },
    username: {
        color: colors.lightGray,
        fontSize: "1.375rem",
    },
    name: {
        fontSize: "2.5rem",
    },
});

const UserInfo = () => {
    const classes = useStyles();
    const [openMsg, setOpenMsg] = useState(false);

    const handleMsg = () => {
        setOpenMsg(!openMsg);
    };

    return (
        <TwoColModalGrid
            col1Children={<PictureOverSquare image={images.maskGroup} />}
            col2Children={
                <Box className={classes.col2}>
                    <Box className={classes.infoWrapper}>
                        <Typography variant="h4" className={classes.name}>
                            Brandon Landing
                        </Typography>
                        <Typography className={classes.username}>@veritas_z</Typography>
                        <FollowingFollwers followers="15" following="15" />
                        <Box className={classes.buttonWrapper}>
                            {/* <ModalComponent openOrNot={openInfo} onClose={handleMsg}>
                                <MessageBox />
                            </ModalComponent> */}

                            <CustomButton label="Message me" externalClass={classes.msgbtn} on={handleMsg} />
                            <CustomButton
                                variant="dropdownButton"
                                icon={<img src={icons.arrowDropdown} />}
                                label="Following"
                            />
                        </Box>
                        <Typography className={classes.bio}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </Typography>
                        <SocialButtons />
                    </Box>
                </Box>
            }
        />
    );
};

UserInfo.propTypes = {};

export default UserInfo;
