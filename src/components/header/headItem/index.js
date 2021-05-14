import React from "react"
import PropTypes from "prop-types"
import { Box, makeStyles, Typography } from "@material-ui/core"
import classnames from "classnames"
import { useRouter } from "next/router"
import { colors } from "../../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        margin: "0rem 2.5rem 0 0",
        display: "flex",
        fontSize: "1rem",
        alignItems: "center",
        cursor: "pointer",
        height: "5.5rem",
        borderTop: "3px solid transparent",
        color: (props) => props.color,
        "&:hover": {
            color: colors.pink,
        },
    },
    active: {
        borderTop: `3px solid ${colors.pink}`,
    },

    title: {
        marginLeft: "0.875rem",
        "@media (max-width:1024px)": {
            display: (props) => (props.isAuthenticated ? "none" : "block"),
        },
    },
})

export const HeadItem = ({
    name,
    active,
    icon,
    id,
    color,
    routeName,
    handleMouseHover,
    handleMouseLeave,
    isAuthenticated,
}) => {
    const classes = useStyles({ id, color, isAuthenticated })
    const router = useRouter()

    const handleRoute = () => {
        router.push(routeName)
    }

    return (
        <Box
            className={classnames(classes.wrapper, { [classes.active]: active })}
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseLeave}
            onClick={handleRoute}>
            {icon}
            {name !== "" && <Typography className={classes.title}>{name}</Typography>}
        </Box>
    )
}
HeadItem.defaultProps = {
    handleMouseHover: () => {},
    handleMouseLeave: () => {},
    isAuthenticated: false,
}

HeadItem.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    routeName: PropTypes.string.isRequired,
    handleMouseHover: PropTypes.func,
    handleMouseLeave: PropTypes.func,
    isAuthenticated: PropTypes.bool,
}
