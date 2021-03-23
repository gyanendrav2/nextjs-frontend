import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Grid, Typography } from "@material-ui/core";
import { CheckCircle } from "@material-ui/icons";
import { colors } from "../../theme/colors";
import { icons } from "../../assets/icons";

const useStyles = makeStyles((theme) =>
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
);

export const ModalComponent = ({ handleClose, openOrNot, children, onClose }) => {
    const classes = useStyles();

    return (
        <div>
            <Modal
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
                        <img src={icons.close} className={classes.closeIcon} onClick={onClose} />
                        {children}
                    </Grid>
                </Fade>
            </Modal>
        </div>
    );
};

export default ModalComponent;
