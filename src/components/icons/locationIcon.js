import React from "react"
import PropTypes from "prop-types"

export const LocationIcon = (props) => {
    return (
        <svg width={12} height={16} viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M6 16L10.7574 9.7192C13.771 5.74063 10.961 0 6 0C1.03896 0 -1.771 5.74063 1.24258 9.7192L6 16Z"
                fill="#010203"
            />
            <path
                d="M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z"
                fill="white"
            />
            <path
                d="M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z"
                fill="url(#paint0_linear)"
            />
        </svg>
    )
}
LocationIcon.defaultProps = {
    width: 12,
    height: 16,
}

LocationIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}
