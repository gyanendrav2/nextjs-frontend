import React from "react"
import PropTypes from "prop-types"

const PenIcon = (props) => {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M6.52252 20.9833L5.29451 26.4217C5.26213 26.5651 5.39028 26.6932 5.53365 26.6608L10.972 25.4328M6.52252 20.9833L10.972 25.4328M6.52252 20.9833L22.0957 5.41014M10.972 25.4328L26.5452 9.85962M22.0957 5.41014L24.0816 3.42426C24.3159 3.18995 24.6958 3.18995 24.9301 3.42426L28.5311 7.02522C28.7654 7.25954 28.7654 7.63943 28.5311 7.87375L26.5452 9.85962M22.0957 5.41014L26.5452 9.85962"
                stroke="currentColor"
                strokeWidth={2}
            />
        </svg>
    )
}

PenIcon.defaultProps = {
    width: 32,
    height: 32,
}

PenIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}

export default PenIcon
