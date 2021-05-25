import React, { useState } from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import PropTypes from "prop-types"
import { colors } from "../../theme/colors"
import { LazyloadImage } from "../lazyloadImage/lazyloadImage"
import CustomButton from "../buttons/customButton"
import { ArrowDownIcon } from "../icons/arrowDownIcon"

const useStyles = makeStyles({
    CuratorCard: {
        display: "flex",
        flexWrap: "wrap",
    },
    Container: {
        boxShadow: `0px 1px 1px ${colors.lightGray}`,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        marginBottom: "1rem",
    },
    CreatorsAuthor: {
        display: " flex",
        alignItems: " center",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        padding: "0.75rem",
        height: "100%",
    },
    image: {
        borderRadius: "50%",
        margin: "0rem 1.125rem 0rem 1rem",
        width: "5.5rem",
        height: "5.5rem",
        objectFit: "cover",
        "@media(max-width:1024px)": {
            margin: "0rem 1.125rem 0rem 0rem",
        },
    },
    CreatorsAuthorName: {
        fontSize: "1rem",
        color: colors.blackPrimary,
        fontFamily: "Helvetica",
        lineHeight: "1.45rem",
    },
    CreatorsAuthorJobTitle: {
        fontSize: "0.875rem",
        color: colors.lighterGray,
        margin: "0.187rem 0 0.5rem 0",
    },
    CreatorsButton: {
        background: colors.lighterPrimary,
        fontSize: "1rem",
        color: colors.blackPrimary,
        border: " none",
        outline: "none",
        minWidth: "4.937rem",
        height: "2rem",
        width: (props) => props.followBtnWith,
    },
    image_container: {
        width: "100%",
        height: "100%",
    },
    projectImg: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    dropdownWrapper: {
        position: "relative",
    },
    dropdownOption: {
        position: "absolute",
        backgroundColor: colors.white,
        boxShadow: "0px 10px 60px rgba(0, 0, 0, 0.4)",
        color: colors.darkRed,
        padding: "0.312rem 1.75rem",
        zIndex: 1,
        cursor: "pointer",
    },
})

export const CardWithHeader = ({
    image,
    title,
    subTitle,
    buttonText,
    isProjectPage,
    creationCard,
    followBtnWith,
    showFollowBtnDrowdown,
}) => {
    const classes = useStyles({ followBtnWith })
    const [showDropdown, setShowDropdown] = useState(false)
    const [followBtnText, setFollowBtnText] = useState(buttonText)
    const [isDropdown, setIsDropdown] = useState(creationCard)

    const handleDropdown = () => {
        if (showFollowBtnDrowdown && followBtnText === buttonText) {
            setShowDropdown(!showDropdown)
        } else {
            setFollowBtnText(buttonText)
            setIsDropdown(false)
        }
    }

    const handlefollow = () => {
        setShowDropdown(false)
        setFollowBtnText("Follow")
        setIsDropdown(true)
    }

    return (
        <Box className={classes.Container}>
            <Box className={classes.CreatorsAuthor}>
                <Box>
                    <img className={classes.image} src={image} alt={title} />
                </Box>
                <Box className={classes.dropdownWrapper}>
                    <Typography className={classes.CreatorsAuthorName}>{title}</Typography>
                    <Typography className={classes.CreatorsAuthorJobTitle}>{subTitle}</Typography>
                    <CustomButton
                        variant="dropdownButton"
                        icon={isDropdown ? "" : <ArrowDownIcon />}
                        label={followBtnText}
                        externalclass={classes.CreatorsButton}
                        onClick={handleDropdown}
                    />
                    {showDropdown && (
                        <Box className={classes.dropdownOption}>
                            <Typography onClick={handlefollow}>Unfollow</Typography>
                        </Box>
                    )}
                </Box>
            </Box>
            {isProjectPage ? null : (
                <Box className={classes.image_container}>
                    <LazyloadImage blurhashHeight="100%" image={image} externalclass={classes.projectImg} />
                </Box>
            )}
        </Box>
    )
}

CardWithHeader.defaultProps = {
    isProjectPage: false,
    title: "",
    subTitle: "",
    creationCard: false,
    followBtnWith: "auto",
    showFollowBtnDrowdown: false,
}

CardWithHeader.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    isProjectPage: PropTypes.bool,
    creationCard: PropTypes.bool,
    followBtnWith: PropTypes.string,
    showFollowBtnDrowdown: PropTypes.bool,
}
