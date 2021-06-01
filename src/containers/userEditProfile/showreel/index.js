import React from "react"
import { CancelSave } from "../accountInformation/cancelSave"
import { ConvertVideoOrPhoto } from "../accountInformation/convertVideoOrPhoto"

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
