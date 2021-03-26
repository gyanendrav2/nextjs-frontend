import React from "react"
import PropTypes from "prop-types"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import { Box, Grid } from "@material-ui/core"
import { colors } from "../../theme/colors"
import { icons } from "../../assets/icons"

const useStyles = makeStyles(
    (theme) =>
        createStyles({
            modal: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            },
            paper: {
                backgroundColor: theme.palette.background.paper,
                borderRadius: 0,
                boxShadow: theme.shadows[5],
                padding: theme.spacing(4),
                maxWidth: "70.625rem",
                maxHeight: "43.125rem",
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
            title: {
                fontSize: "1.3rem",
                lineHeight: "2.2rem",
                color: colors.black,
                textAlign: "center",
                fontWeight: 100,
            },
            closeIcon: {
                position: "absolute",
                top: "4.5rem",
                right: "4.5rem",
                cursor: "pointer",
            },
        })
    // eslint-disable-next-line prettier/prettier
);

export const ModalComponent = ({ handleClose, openOrNot, children, onClose }) => {
    const classes = useStyles()

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
                            <img src={icons.close} alt="" />
                        </Box>
                        {children}
                    </Grid>
                </Fade>
            </Modal>
        </Box>
    )
}

ModalComponent.propTypes = {
    handleClose: PropTypes.func.isRequired,
    openOrNot: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired,
    onClose: PropTypes.func.isRequired,
}
