import React from "react"
import PropTypes from "prop-types"
import { Box, makeStyles } from "@material-ui/core"
import classnames from "classnames"
import { colors } from "../../theme/colors"
import { gaps } from "../../theme/variables"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: colors.white,
        paddingLeft: gaps.laptop,
        paddingRight: gaps.laptop,
        "@media (max-width:1024px)": {
            paddingLeft: gaps.tablet,
            paddingRight: gaps.tablet,
        },
        "@media (max-width:767px)": {
            paddingLeft: gaps.mobile,
            paddingRight: gaps.mobile,
        },
    },
})

const ContentWrapper = ({ externalclass, children }) => {
    const classes = useStyles()
    return (
        <>
            <Box className={classnames(externalclass, classes.wrapper)}>{children}</Box>
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

export default ContentWrapper
