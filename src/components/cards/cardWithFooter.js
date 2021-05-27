import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography } from "@material-ui/core"
import PropTypes from "prop-types"
import classnames from "classnames"
import { colors } from "../../theme/colors"
import { LazyloadImage } from "../lazyloadImage/lazyloadImage"
import CustomButton from "../buttons/customButton"
import { MoreVertIcon } from "../icons/moreVertIcon"
import NotificationCard from "./notificationCard"
import { ShareCard } from "./shareCard"
import { CardMenuOptions } from "./cardMenuOptions"

const useStyles = makeStyles({
    cardWrapper: {
        flex: "1",
        display: "flex",
        flexDirection: "column",
        height: "100%",
    },
    cardImageContainer: {
        cursor: "pointer",
        position: "relative",
        transition: "all 0.3s",
        "&::before": {
            content: "''",
            width: "100%",
            height: "100%",
            background:
                "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0.8) 16.56%, rgba(0, 0, 0, 0.4) 32.46%, rgba(0, 0, 0, 0.2) 46.94%, rgba(0, 0, 0, 0) 100%)",
            position: "absolute",
            zIndex: 1,
        },
    },
    projectImage: {
        display: "block",
    },
    image: {
        display: "block",
        height: "100%",
        objectFit: "cover",
        transition: "all 0.5s",
    },
    ProjectTitle: {
        position: "absolute",
        bottom: "1rem",
        left: "1rem",
        right: "1rem",
        color: (props) => (props.isHovering ? colors.pink : colors.white),
        fontSize: "1rem",
        fontWeight: "500",
        zIndex: 2,
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
        border: `1px solid ${colors.lightGray}`,
        display: "flex",
        padding: "0.75rem 0.75rem 0.75rem 1rem",
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
        zIndex: 20,
        display: "none",
    },
    moreVertButton: {
        color: colors.black,
        backgroundColor: colors.white,
    },
})

const CardWithFooter = ({
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
    onFooterHeadingClick,
}) => {
    const [isHovering, setisHovering] = useState(false)
    const classes = useStyles({ isHovering })
    const [showCopyBox, setShowCopyBox] = useState(false)
    const [showNotification, setShowNotification] = useState(false)
    const [screenSize, setScreenSize] = useState()

    useEffect(() => {
        setScreenSize(window.innerWidth)
        const resizeWindow = () => {
            setScreenSize(window.innerWidth)
        }
        window.addEventListener("resize", resizeWindow)
        return () => window.removeEventListener("resize", resizeWindow)
    }, [])

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
        <Box className={classes.cardWrapper}>
            <NotificationCard
                message="You have successfully copied!"
                buttonText="Unhide"
                isVisible={showNotification}
                timeout={4000}
                handleHideNotification={handleNotification}
            />
            <Box
                className={classes.cardImageContainer}
                onMouseEnter={handleMouseHover}
                onMouseLeave={handleMouseOut}
                onClick={handleClick}>
                {showMoreButton && (
                    <Box
                        className={classnames(classes.moreVertContainer, {
                            [classes.moreVertContainerShow]: screenSize > 767 ? isHovering : true,
                        })}>
                        <CustomButton
                            variant="iconButton"
                            externalclass={classes.moreVertButton}
                            icon={<MoreVertIcon />}
                            onClick={handleShowCopyBox}
                        />
                    </Box>
                )}
                {anonymous
                    ? showCopyBox && (
                          <ShareCard
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
                <Box className={classes.projectImage}>
                    <Box className={classes.imageContainer}>
                        <LazyloadImage image={image} externalclass={classes.image} />
                    </Box>
                </Box>
                <Typography className={classes.ProjectTitle}>{title}</Typography>
            </Box>
            {!hideFooter && (
                <Box className={classes.cardFooter}>
                    <Box className={classes.imageContainer}>
                        <img className={classes.roundImage} src={image} alt={title} />
                    </Box>
                    <Box style={{ cursor: "pointer" }} onClick={onFooterHeadingClick}>
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
    onFooterHeadingClick: () => {},
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
    onFooterHeadingClick: PropTypes.func,
}

export default CardWithFooter
