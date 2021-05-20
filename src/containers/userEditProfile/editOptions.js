import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { makeStyles, Typography } from "@material-ui/core"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    activeOption: {
        fontWeight: 700,
        borderLeft: `0.5rem solid ${colors.pink}!important`,
    },
    col1: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        border: `1px solid ${colors.lightGray}`,
        backgroundColor: colors.white,
        marginRight: "2rem",
    },
    col1item: {
        padding: "1.312rem",
        fontSize: "1rem",
        lineHeight: "1.375rem",
        borderBottom: `1px solid ${colors.lightGray}`,
        width: "100%",
        borderLeft: `0.5rem solid ${colors.white}`,
        cursor: "pointer",
        display: "block",
        textDecoration: "none",
        color: colors.black,
        "&:last-child": {
            borderBottom: "none",
        },
    },
})

const EditOptions = ({ isActive, optionName, onClick, href, isHref }) => {
    const classes = useStyles()
    return (
        <>
            {isHref ? (
                <a href={href} className={classnames(classes.col1item, { [classes.activeOption]: isActive })}>
                    {optionName}
                </a>
            ) : (
                <Typography
                    className={classnames(classes.col1item, { [classes.activeOption]: isActive })}
                    onClick={onClick}>
                    {optionName}
                </Typography>
            )}
        </>
    )
}

EditOptions.defaultProps = {
    isHref: false,
    href: "",
    isActive: false,
    onClick: () => {},
}

EditOptions.propTypes = {
    isActive: PropTypes.bool,
    optionName: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    href: PropTypes.string,
    isHref: PropTypes.bool,
}

export default EditOptions
