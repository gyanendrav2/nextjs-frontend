import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles } from "@material-ui/core";
import UserProfileRow from "../../components/cards/userProfileRow";

const useStyles = makeStyles({
    rootWrapper: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100vh",
        zIndex: 1,
    },
    wrapper: {
        position: "absolute",
        padding: "1.5rem",
        top: "18.062rem",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF",
        boxShadow: "0px 4px 100px rgba(0, 0, 0, 0.25)",
        width: "34.625rem",
        maxHeight: "26.5rem",
        overflowY: "auto",
    },
});

const MoreMemberModel = ({ onClose, data }) => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.wrapper}>
                {data.map((item, i) => (
                    <UserProfileRow
                        key={i}
                        image={item.image}
                        name={item.memberName}
                        isDisable={item.isDisable}
                        position={item.position}
                        col1Size={8}
                        col2Size={4}
                    />
                ))}
            </Box>
            <Box className={classes.rootWrapper} onClick={onClose}></Box>
        </>
    );
};

MoreMemberModel.propTypes = {
    onClose: PropTypes.func,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string,
            memberName: PropTypes.string,
            position: PropTypes.string,
            isDisable: PropTypes.bool,
        }).isRequired
    ),
};

export default MoreMemberModel;