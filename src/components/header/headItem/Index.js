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

    img: {
        width: "1.25rem",
        height: "1.25rem",
        marginRight: "0.875rem",
        "&:hover": {
            color: colors.pink,
        },
    },
    title: {
        // color: (props) => props.color,
        // "&:hover": {
        //     color: colors.pink,
        // },
    },
})

const HeadItem = ({
    name,
    active,
    icon,
    id,
    color,
    routeName,
    handleMouseHover,
    handleMouseLeave,
}) => {
    const classes = useStyles({ id, color })
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
            <img src={icon} alt={name} className={classes.img} />
            <Typography className={classes.title}>{name}</Typography>
        </Box>
    )
}
HeadItem.defaultProps = {
    handleMouseHover: () => {},
    handleMouseLeave: () => {},
}

HeadItem.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    routeName: PropTypes.string.isRequired,
    handleMouseHover: PropTypes.func,
    handleMouseLeave: PropTypes.func,
}
export default HeadItem
