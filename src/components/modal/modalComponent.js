import React from "react"
import PropTypes from "prop-types"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import { Box, Grid } from "@material-ui/core"
import { colors } from "../../theme/colors"
import { CloseIconBig } from "../icons/closeIconBig"

const useStyles = makeStyles((theme) =>
    createStyles({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "1rem",
            paddingRight: "1rem",
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            borderRadius: 0,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(4),
            maxWidth: "70.625rem",
            maxHeight: (props) => (props.maxHeight ? props.maxHeight : "43.125rem"),
            overflowY: "auto",
            marginLeft: "auto",
            marginRight: "auto",
            position: "relative",
            "@media (max-width:500px)": {
                padding: "18px",
                maxWidth: "94%",
            },
            "&:focus": {
                outline: "none",
            },
        },
        icon: {
            fontSize: "8rem",
            color: colors.primary,
        },
        closeIcon: {
            position: "absolute",
            top: "2rem",
            right: "2rem",
            cursor: "pointer",
            color: "#010203",
            "@media (max-width:767px)": {
                top: "1.5rem",
                right: "1.5rem",
            },
        },
    })
)

export const ModalComponent = ({ handleClose, openOrNot, children, onClose, maxHeight }) => {
    const classes = useStyles({ maxHeight })

    return (
        <Box>
            <Modal
                // eslint-disable-next-line prettier/prettier
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openOrNot}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={openOrNot}>
                    <Grid container alignItems="center" direction="column" justify="center" className={classes.paper}>
                        <Box className={classes.closeIcon} onClick={onClose}>
                            <CloseIconBig width={24} height={24} />
                        </Box>
                        {children}
                    </Grid>
                </Fade>
            </Modal>
        </Box>
    )
}
ModalComponent.defaultProps = {
    handleClose: () => {},
    maxHeight: "",
}
ModalComponent.propTypes = {
    handleClose: PropTypes.func,
    openOrNot: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired,
    onClose: PropTypes.func.isRequired,
    maxHeight: PropTypes.string,
}
