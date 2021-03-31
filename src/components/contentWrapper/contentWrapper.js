import React from "react"
import PropTypes from "prop-types"
import { Box, makeStyles } from "@material-ui/core"
import classnames from "classnames"
import { colors } from "../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.white,
        paddingLeft: "2rem",
        paddingRight: "2rem",
        "@media (max-width:767px)": {
            paddingLeft: "1rem",
            paddingRight: "1rem",
        },
    },
})

export const ContentWrapper = ({ externalclass, children }) => {
    const classes = useStyles()
    return (
        <>
            <Box className={classnames(classes.wrapper, externalclass)}>{children}</Box>
        </>
    )
}

ContentWrapper.defaultProps = {
    children: "",
    externalclass: "",
}

ContentWrapper.propTypes = {
    children: PropTypes.element,
    externalclass: PropTypes.string,
}
