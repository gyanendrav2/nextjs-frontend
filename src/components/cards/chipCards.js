import React from "react"
import PropTypes from "prop-types"
import { Box, makeStyles, Typography } from "@material-ui/core"
import { colors } from "../../theme/colors"
import { CloseIconBig } from "../icons/closeIconBig"

const useStyles = makeStyles({
    wrapper: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexWrap: "wrap",
    },
    chipBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.562rem 1rem",
        backgroundColor: colors.lightGray,
        marginRight: "0.5rem",
        marginBottom: "0.5rem",
    },
    title: {
        color: colors.black,
    },
    closeIcon: {
        marginLeft: "0.625rem",
        cursor: "pointer",
    },
})

export const ChipCards = ({ chips, onDelete }) => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            {chips.map((name, i) => (
                <Box className={classes.chipBox} onClick={() => onDelete(i)}>
                    <Typography className={classes.title}>{name}</Typography>
                    <CloseIconBig width={9} height={9} className={classes.closeIcon} />
                </Box>
            ))}
        </Box>
    )
}

ChipCards.propTypes = {
    chips: PropTypes.arrayOf(PropTypes.string).isRequired,
    onDelete: PropTypes.func.isRequired,
}
