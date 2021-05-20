import React from "react"
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
        width: "5rem",
        height: "2rem",
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
})

export const CardWithHeader = ({ image, title, subTitle, buttonText, isProjectPage, creationCard }) => {
    const classes = useStyles()

    return (
        <Box className={classes.Container}>
            <Box className={classes.CreatorsAuthor}>
                <Box>
                    <img className={classes.image} src={image} alt={title} />
                </Box>
                <Box>
                    <Typography className={classes.CreatorsAuthorName}>{title}</Typography>
                    <Typography className={classes.CreatorsAuthorJobTitle}>{subTitle}</Typography>
                    <CustomButton
                        variant="dropdownButton"
                        icon={creationCard ? "" : <ArrowDownIcon />}
                        label={buttonText}
                        externalclass={classes.CreatorsButton}
                    />
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
}

CardWithHeader.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    isProjectPage: PropTypes.bool,
    creationCard: PropTypes.bool,
}
