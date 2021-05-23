import React from "react"
import PropTypes from "prop-types"
import { Box, makeStyles } from "@material-ui/core"
import classnames from "classnames"
import CustomButton from "../../../components/buttons/customButton"
import { colors } from "../../../theme/colors"

const useStyles = makeStyles({
    wrapper: {
        boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)",
        position: "absolute",
        maxWidth: "1130px",
        padding: "1.5rem",
        top: "5rem",
        zIndex: 2,
        backgroundColor: colors.white,
        "@media(max-width:767px)": {
            padding: "1rem 0",
            top: "14rem",
            width: "100%",
        },
    },
    button: {
        margin: "0.5rem",
        width: "10.125rem",
        height: "2.5rem",
        padding: "0.562rem 1.25rem",
        "@media(max-width:767px)": {
            width: "calc(50% - 0.6rem)",
            minWidth: "auto",
            margin: "0.5rem 0.3rem",
        },
    },
    hider: {
        position: "fixed",
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
    },
    activeButton: {
        backgroundColor: colors.pink,
        color: colors.black,
    },
})

export const Categories = ({ handleClick, categories, activeButton, onClick }) => {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.wrapper}>
                {categories.map((name, i) => (
                    <CustomButton
                        key={i}
                        variant="primary"
                        label={name}
                        externalclass={classnames(classes.button, {
                            [classes.activeButton]: activeButton === name,
                        })}
                        onClick={() => onClick(name, i)}
                    />
                ))}
            </Box>
            <Box className={classes.hider} onClick={handleClick} />
        </>
    )
}

Categories.defaultProps = {
    handleClick: () => {},
    categories: [],
    onClick: () => {},
    activeButton: "",
}

Categories.propTypes = {
    handleClick: PropTypes.func,
    categories: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func,
    activeButton: PropTypes.string,
}
