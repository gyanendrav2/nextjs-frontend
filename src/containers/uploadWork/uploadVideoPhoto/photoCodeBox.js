import React from "react"
import PropTypes from "prop-types"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import { PhotoIcon } from "../../../components/icons/photoIcon"
import { CodeIcon } from "../../../components/icons/codeIcon"
import { colors } from "../../../theme/colors"
// import { Input } from "../../../components/inputs"
//import { TextAreaInput } from "./textAreaInput"

const useStyles = makeStyles({
    whiteBg: {
        backgroundColor: colors.white,
        padding: "2rem",
        marginBottom: "1rem",
        color: colors.white,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    codeContainer: {
        backgroundColor: colors.lighterPrimary,
        padding: "3.25rem 2rem",
    },
    icon: {
        margin: "0 2rem",
    },
    textContainer: {
        margin: "0 auto",
        paddingLeft: "2.5rem",
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
    },
    headTextArea: {
        border: "none",
        fontSize: "1rem",
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
})

export const PhotoCodeBox = ({ flexDirection, id, showUploadMediaModel, showCodeModel }) => {
    const classes = useStyles()
    return (
        <Grid id={id} className={classes.whiteBg} direction={flexDirection}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Grid container alignItems="center" justify="center" className={classes.codeContainer}>
                    <PhotoIcon className={classes.icon} onClick={showUploadMediaModel} />
                    <CodeIcon className={classes.icon} onClick={showCodeModel} />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.textContainer}>
                {/* <Typography variant="h2" className={classes.title}>Type a headline...</Typography> */}
                <input placeholder="Type a headline..." className={classes.headInput} style={{ border: "none" }} />
                {/* <Input placeholder="Type a headline..." externalclass={classes.headInput}></Input> */}
                {/* <Typography style={{ fontSize: "1rem",  lineHeight: "2rem",
            color: colors.lighterGray,
            fontWeight: 400}}>Insert Text...</Typography> */}
                <textarea className={classes.headTextArea} placeholder="Insert Text" />
            </Grid>
        </Grid>
    )
}

PhotoCodeBox.defaultProps = {
    flexDirection: "row",
    id: "",
}

PhotoCodeBox.propTypes = {
    flexDirection: PropTypes.string,
    id: PropTypes.string,
    showUploadMediaModel: PropTypes.bool.isRequired,
    showCodeModel: PropTypes.bool.isRequired,
}
