import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography } from "@material-ui/core"
import PropTypes from "prop-types"
import classnames from "classnames"
import { colors } from "../../theme/colors"
import { LazyloadImage } from "../lazyloadImage/lazyloadImage"
import { CustomButton } from "../buttons/customButton"
import { MoreVertIcon } from "../icons/moreVertIcon"
import { NotificationCard } from "./notificationCard"
import { ShareCard } from "./shareCard"
import { CardMenuOptions } from "./cardMenuOptions"

const useStyles = makeStyles({
    cardWrapper: {
        boxShadow: `0px 1px 1px ${colors.lightGray}`,
        flex: "1",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        cursor: "pointer",
        position: "relative",
    },
    cardImageContainer: {
        position: "relative",
    },
    projectImage: {
        display: "block",
    },
    image: {
        display: "block",
        height: "100%",
        objectFit: "cover",
        transition: "all 0.5s",
        "&::before": {
            content: "",
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            background:
                "linear-gradient(0deg,#000000 0%,rgba(0, 0, 0, 0.8) 16.56%,rgba(0, 0, 0, 0.4) 32.46%, rgba(0, 0, 0, 0.2) 46.94%,rgba(0, 0, 0, 0) 100%);",
        },
    },
    ProjectTitle: {
        position: "absolute",
        bottom: "1rem",
        left: "1rem",
        color: colors.white,
        fontSize: "1rem",
        fontWeight: "500",
    },
    roundImage: {
        borderRadius: "50%",
        marginRight: "0.5rem",
        marginTop: "0.1rem",
        width: "2.625rem",
        height: "2.625rem",
        objectFit: "cover",
    },
    cardFooter: {
        border: "1px solid rgba(0, 0, 0, 0.05)",
        display: "flex",
        padding: "0.75rem",
        flex: "1",
        height: "100%",
    },
    projectAuthorName: {
        fontSize: "1rem",
        color: colors.black,
    },
    projectAuthorJobTitle: {
        fontSize: "0.875rem",
        color: colors.lighterGray,
    },
    red: {
        background: "red",
    },
    moreVertContainerShow: {
        display: "block!important",
    },
    moreVertContainer: {
        position: "absolute",
        top: "1rem",
        right: "1rem",
        zIndex: 1,
        display: "none",
    },
    moreVertButton: {
        color: colors.black,
        backgroundColor: colors.white,
    },
})

export const CardWithFooter = ({
    image,
    title,
    footerTitle,
    footerSubitle,
    handleClick,
    hideFooter,
    showMoreButton,
    handleHide,
    anonymous,
    categoryHidden,
}) => {
    const classes = useStyles()
    const [isHovering, setisHovering] = useState(false)
    const [showCopyBox, setShowCopyBox] = useState(false)
    const [showNotification, setShowNotification] = useState(false)

    const handleMouseHover = () => {
        setisHovering(true)
    }
    const handleMouseOut = () => {
        setisHovering(false)
        setShowCopyBox(false)
    }

    const handleNotification = () => {
        setShowNotification(!showNotification)
    }

    const handleShowCopyBox = () => {
        setShowCopyBox(!showCopyBox)
    }

    const handleOnHide = () => {
        handleHide()
        handleShowCopyBox()
    }
    return (
        <Box className={classes.cardWrapper} onClick={handleClick}>
            <NotificationCard
                message="You have successfully copied!"
                buttonText="Unhide"
                isVisible={showNotification}
                timeout={4000}
                handleHideNotification={handleNotification}
            />
            <Box className={classes.cardImageContainer} onMouseLeave={handleMouseOut}>
                {showMoreButton && (
                    <Box
                        className={classnames(classes.moreVertContainer, {
                            [classes.moreVertContainerShow]: isHovering,
                        })}>
                        <CustomButton
                            variant="iconButton"
                            externalclass={classes.moreVertButton}
                            icon={<MoreVertIcon />}
                            onClick={handleShowCopyBox}
                        />
                        {anonymous
                            ? showCopyBox && (
                                  <ShareCard
                                      //   anonymousProfile
                                      onLinkCopied={() => {
                                          handleNotification()
                                          setShowCopyBox(!showCopyBox)
                                      }}
                                  />
                              )
                            : showCopyBox && (
                                  <CardMenuOptions
                                      onHide={handleOnHide}
                                      hiddenCategory={categoryHidden}
                                      onLinkCopied={() => {
                                          handleNotification()
                                          setShowCopyBox(!showCopyBox)
                                      }}
                                  />
                              )}
                    </Box>
                )}
                <Box className={classes.projectImage} onMouseEnter={handleMouseHover}>
                    <Box className={classes.imageContainer}>
                        <LazyloadImage image={image} externalclass={classes.image} />
                    </Box>
                </Box>
                {isHovering && <Typography className={classes.ProjectTitle}>{title}</Typography>}
            </Box>
            {!hideFooter && (
                <Box className={classes.cardFooter}>
                    <Box className={classes.imageContainer}>
                        <img className={classes.roundImage} src={image} alt={title} />
                    </Box>
                    <Box>
                        <Typography className={classes.projectAuthorName}>{footerTitle}</Typography>
                        <Typography className={classes.projectAuthorJobTitle}>{footerSubitle}</Typography>
                    </Box>
                </Box>
            )}
        </Box>
    )
}

CardWithFooter.defaultProps = {
    handleClick: () => {},
    hideFooter: false,
    footerTitle: "",
    footerSubitle: "",
    showMoreButton: false,
    handleHide: () => {},
    anonymous: false,
    categoryHidden: false,
}

CardWithFooter.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    footerTitle: PropTypes.string,
    footerSubitle: PropTypes.string,
    handleClick: PropTypes.func,
    hideFooter: PropTypes.bool,
    showMoreButton: PropTypes.bool,
    handleHide: PropTypes.func,
    anonymous: PropTypes.bool,
    categoryHidden: PropTypes.bool,
}
