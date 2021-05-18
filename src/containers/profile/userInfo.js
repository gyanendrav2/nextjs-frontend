import React from "react"
import PropTypes from "prop-types"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { images } from "../../assets/images"
import { PictureOverSquare } from "../../components/cards/pictureOverSquare"
import { FollowingFollwers } from "../../components/texts/followingFollwers"
import CustomButton from "../../components/buttons/customButton"
import { icons } from "../../assets/icons"
import { colors } from "../../theme/colors"
import { SocialButtons } from "../../components/buttons/socialButtons"
import { TwoColModalGrid } from "../../components/grid/twoColModalGrid"

const useStyles = makeStyles({
    infoWrapper: {
        marginTop: "2rem",
        "@media(min-width:768px) and (max-width:1024px)": {
            marginTop: "4rem",
        },
        "@media(max-width:767px)": {
            marginTop: "4rem",
        },
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
        color: colors.lighterGray,
        fontSize: "1.375rem",
        marginBottom: "1rem",
        "@media(max-width:767px)": {
            textAlign: "center",
        },
    },
    name: {
        fontSize: "2.5rem",
        "@media(max-width:767px)": {
            fontSize: "2.187rem",
            textAlign: "center",
        },
    },
    position: {
        fontSize: "1rem",
        "@media(max-width:767px)": {
            textAlign: "center",
        },
    },
    followStyles: {
        "@media(max-width:767px)": {
            textAlign: "center",
            width: "100%",
            justifyContent: "center",
        },
    },
    buttonWrapper: {
        "@media (max-width:767px)": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& button": {
                width: "100%",
            },
        },
    },
})

const UserInfo = ({ handleMsgClick }) => {
    const classes = useStyles()

    return (
        <TwoColModalGrid
            UserInfoMargin="0rem"
            col1Children={<PictureOverSquare image={images.brandon} />}
            col2Children={
                <Box className={classes.col2}>
                    <Box className={classes.infoWrapper}>
                        <Typography variant="h4" className={classes.name}>
                            Brandon Landing
                        </Typography>
                        <Typography className={classes.username}>@veritas_z</Typography>
                        <Typography className={classes.position}>Director, assistant</Typography>
                        <FollowingFollwers followers="15" following="15" externalclass={classes.followStyles} />
                        <Box className={classes.buttonWrapper}>
                            <CustomButton label="Message me" externalclass={classes.msgbtn} onClick={handleMsgClick} />
                            <CustomButton
                                variant="dropdownButton"
                                icon={<img src={icons.arrowDropdown} alt="" />}
                                label="Following"
                            />
                        </Box>
                        <Typography className={classes.bio}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book. It has survived not
                            only five centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <SocialButtons />
                    </Box>
                </Box>
            }
        />
    )
}

UserInfo.defaultProps = {
    handleMsgClick: () => {},
}

UserInfo.propTypes = {
    handleMsgClick: PropTypes.func,
}

export default UserInfo
