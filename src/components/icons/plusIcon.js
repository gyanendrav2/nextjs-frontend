import React from "react"
import PropTypes from "prop-types"

export const PlusIcon = (props) => {
    return (
        <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M19 0H21V40H19V0Z" fill="currentColor" />
            <path d="M19 0H21V40H19V0Z" fill="currentColor" />
            <path d="M0 21L0 19L40 19V21L0 21Z" fill="currentColor" />
            <path d="M0 21L0 19L40 19V21L0 21Z" fill="currentColor" />
        </svg>
    )
}

PlusIcon.defaultProps = {
    width: 40,
    height: 40,
}

PlusIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}
