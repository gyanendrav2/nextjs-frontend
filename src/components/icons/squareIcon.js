import React from "react"
import PropTypes from "prop-types"

export const SquareIcon = (props) => {
    return (
        <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x="0.5" y="0.5" width={15} height={14} rx="0.5" stroke="#D9D9D9" />
        </svg>
    )
}

SquareIcon.defaultProps = {
    width: 16,
    height: 16,
}

SquareIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}
