import React from "react"
import { CancelSave } from "../accountInformation/cancelSave"
import { ConvertVideoOrPhoto } from "../accountInformation/convertVideoOrPhoto"
// import PropTypes from "prop-types"
// import { Box } from "@material-ui/core"

const ShowReel = () => {
    return (
        <>
            <ConvertVideoOrPhoto />
            <CancelSave />
        </>
    )
}

ShowReel.propTypes = {}

export default ShowReel
