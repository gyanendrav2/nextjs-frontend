import React from "react"
import PropTypes from "prop-types"

export const AddCircleIcon = (props) => {
    return (
        <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx={20} cy={20} r={19} stroke="currentColor" strokeWidth={2} />
            <path
                d="M15 20.8086V19.201H19.1802V15H20.8198V19.201H25V20.8086H20.8198V25H19.1802V20.8086H15Z"
                fill="currentColor"
            />
        </svg>
    )
}
AddCircleIcon.defaultProps = {
    width: 40,
    height: 40,
}

AddCircleIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}
