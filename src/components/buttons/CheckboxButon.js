import React from "react";
import PropTypes from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
    container: {
        display: "block",
        position: "relative",
        cursor: "pointer",
        fontSize: "0.9rem",
    },
    //    /* Hide the browser's default checkbox */
    // .container input {
    //   position: absolute;
    //   opacity: 0;
    //   cursor: pointer;
    //   height: 0;
    //   width: 0;
    // }

    // /* Create a custom checkbox */
    // .checkmark {
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   height: 25px;
    //   width: 25px;
    //   background-color: #eee;
    // }

    // /* On mouse-over, add a grey background color */
    // .container:hover input ~ .checkmark {
    //   background-color: #ccc;
    // }

    // /* When the checkbox is checked, add a blue background */
    // .container input:checked ~ .checkmark {
    //   background-color: #2196F3;
    // }

    // /* Create the checkmark/indicator (hidden when not checked) */
    // .checkmark:after {
    //   content: "";
    //   position: absolute;
    //   display: none;
    // }
});

const checkboxButton = ({ labelText }) => {
    return (
        <div className={classes.wrapper}>
            {labelText}
            <input className={classes.inputStyles} type="checkbox" checked="checked" />
            <span className="checkmark"></span>
        </div>
    );
};
checkboxButton.prototype = {
    labelText: PropTypes.string,
};
export default checkboxButton;
