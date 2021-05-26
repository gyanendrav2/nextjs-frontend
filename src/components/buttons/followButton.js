import React, { useState } from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import PropTypes from "prop-types"
import { ArrowDownIcon } from "../icons/arrowDownIcon"
import CustomButton from "./customButton"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    CreatorsButton: {
        background: colors.lighterPrimary,
        fontSize: "1rem",
        color: colors.blackPrimary,
        border: " none",
        outline: "none",
        minWidth: "4.937rem",
        width: (props) => props.buttonWidth,
        height: (props) => props.buttonHeight,
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

const FollowButton = ({ buttonText, showDropdownIcon, showfollowbtndrowdown, buttonWidth, buttonHeight }) => {
    const classes = useStyles({ buttonWidth, buttonHeight })
    const [showDropdown, setShowDropdown] = useState(false)
    const [followBtnText, setFollowBtnText] = useState(buttonText)
    const [isDropdown, setIsDropdown] = useState(showDropdownIcon)
    const handleDropdown = () => {
        if (showfollowbtndrowdown && followBtnText === buttonText) {
            setShowDropdown(!showDropdown)
        } else if (showfollowbtndrowdown) {
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
        <>
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
        </>
    )
}

FollowButton.defaultProps = {
    showDropdownIcon: false,
    showfollowbtndrowdown: false,
    buttonWidth: "auto",
    buttonHeight: "2rem",
}

FollowButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    showDropdownIcon: PropTypes.bool,
    showfollowbtndrowdown: PropTypes.bool,
    buttonWidth: PropTypes.string,
    buttonHeight: PropTypes.string,
}

export default FollowButton
