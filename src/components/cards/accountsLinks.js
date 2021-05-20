import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import PropTypes from "prop-types"
import { colors } from "../../theme/colors"
import CustomButton from "../buttons/customButton"
import { DeleteIcon } from "../icons/deleteIcon"

const useStyles = makeStyles({
    wrapper: {
        borderBottom: (props) => (props.hideBorder ? "none" : `1px solid ${colors.lightGray}`),
        paddingBottom: "0.4rem",
        paddingTop: "0.4rem",
        color: (props) => (props.link ? colors.black : colors.lighterGray),
    },
    button: {
        height: "2.5rem",
        padding: "0.562rem 1rem",
        backgroundColor: colors.lighterPrimary,
        color: colors.black,
    },
    deleteIconButton: {
        backgroundColor: colors.lighterPrimary,
    },
    link: {
        maxWidth: "14rem",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "pre",
    },
})

export const AccountsLinks = ({ icon, onClick, link, onDelete, hideBorder }) => {
    const classes = useStyles({ link, hideBorder })
    return (
        <Grid container alignItems="center" justify="space-between" className={classes.wrapper}>
            {icon}
            {link && <Typography className={classes.link}>{link}</Typography>}
            {link ? (
                <CustomButton
                    variant="iconButton"
                    icon={<DeleteIcon />}
                    externalclass={classes.deleteIconButton}
                    onClick={onDelete}
                />
            ) : (
                <CustomButton label="Add a link" externalclass={classes.button} onClick={onClick} />
            )}
        </Grid>
    )
}

AccountsLinks.defaultProps = {
    icon: "",
    link: "",
    onDelete: () => {},
    hideBorder: false,
}

AccountsLinks.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    onClick: PropTypes.func.isRequired,
    link: PropTypes.string,
    onDelete: PropTypes.func,
    hideBorder: PropTypes.bool,
}
