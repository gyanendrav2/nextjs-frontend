import React from "react"
import PropTypes from "prop-types"
import { Box, Grid, makeStyles } from "@material-ui/core"
import { PhotoIcon } from "../../../components/icons/photoIcon"
import { CodeIcon } from "../../../components/icons/codeIcon"
import { colors } from "../../../theme/colors"
import { CloseIconBig } from "../../../components/icons/closeIconBig"

const useStyles = makeStyles({
    whiteBg: {
        backgroundColor: colors.white,
        padding: "2rem",
        marginBottom: "1rem",
        color: colors.white,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        "@media(max-width:767px)": {
            padding: "2.5rem 1rem",
            flexDirection: (props) => (props.rowReverseBox ? "column-reverse!important" : "column"),
        },
    },
    codeContainer: {
        backgroundColor: colors.lighterPrimary,
        padding: "3.25rem 0",
        "@media(max-width:415px)": {
            padding: "1.5rem",
        },
    },
    icon: {
        margin: "0 1rem",
        "@media(max-width:415px)": {
            margin: "0 0.75rem",
        },
    },
    textContainer: {
        margin: "0 auto",
        paddingLeft: (props) => props.pl,
        "@media(max-width:960px)": {
            paddingLeft: "0px",
            marginTop: "1.5rem",
        },
        "@media(max-width:767px)": {
            paddingLeft: "0!important",
        },
        "@media (min-width:1025px) and (max-width:1439px)": {
            marginTop: "1rem",
            paddingLeft: "0!important",
        },
    },
    headInput: {
        marginBottom: "2rem",
        width: "100%",
        fontSize: "2.5rem",
        lineHeight: "3.25rem",
        color: colors.lighterGray,
        "&:focus": {
            border: "none",
            outline: "none",
        },
        "&:hover": {
            border: "none",
            outline: "none",
        },
        "@media(max-width:600px)": {
            fontSize: "2.1rem",
        },
    },
    headTextArea: {
        border: "none",
        fontSize: "1rem",
        resize: "none",
        width: "100%",
        fontFamily: "Helvetica",
        "&::placeholder": {
            color: `${colors.lighterGray}!important`,
        },
        "&:focus": {
            border: "none",
            outline: "none",
        },
        "&:hover": {
            border: "none",
            outline: "none",
        },
    },
    closeIcon: {
        position: "absolute",
        top: "0.5rem",
        right: "0.5rem",
        cursor: "pointer",
        color: colors.lighterGray,
        "@media (max-width:767px)": {
            top: "0.5rem",
            right: "0.5rem",
        },
    },
    mobileWidth: {
        "@media (max-width: 767px)": {
            width: "100%",
        },
    },
})

export const PhotoCodeBox = ({
    rowReverseBox,
    flexDirection,
    id,
    showUploadMediaModel,
    showCodeModel,
    onDelete,
    pl,
}) => {
    const classes = useStyles({
        rowReverseBox,
        pl,
    })

    return (
        <>
            <Grid id={id} container className={classes.whiteBg} direction={flexDirection}>
                <Box className={classes.closeIcon}>
                    <CloseIconBig width={16} onClick={onDelete} />
                </Box>
                <Grid item xs={12} sm={12} md={5} lg={12} xl={6} className={classes.mobileWidth}>
                    <Grid container alignItems="center" justify="center" className={classes.codeContainer}>
                        <PhotoIcon className={classes.icon} onClick={showUploadMediaModel} />
                        <CodeIcon className={classes.icon} onClick={showCodeModel} />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={6} xl={6} className={classes.textContainer}>
                    <input
                        placeholder="Type a headline..."
                        className={classes.headInput}
                        style={{
                            border: "none",
                        }}
                    />
                    <textarea className={classes.headTextArea} placeholder="Insert Text..." />
                </Grid>
            </Grid>
        </>
    )
}

PhotoCodeBox.defaultProps = {
    flexDirection: "row",
    id: "",
    rowReverseBox: false,
    pl: "0",
}

PhotoCodeBox.propTypes = {
    flexDirection: PropTypes.string,
    id: PropTypes.string,
    showUploadMediaModel: PropTypes.bool.isRequired,
    showCodeModel: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    rowReverseBox: PropTypes.bool,
    pl: PropTypes.string,
}
