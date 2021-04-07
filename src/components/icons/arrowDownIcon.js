import React from "react"
import PropTypes from "prop-types"

export const ArrowDownIcon = (props) => {
    return (
        <svg width={8} height={6} viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M3.8439 5.30479C3.92396 5.40487 4.07618 5.40487 4.15624 5.30479L7.74012 0.824947C7.84488 0.693995 7.75165 0.500009 7.58395 0.500009L0.416196 0.500009C0.248494 0.500009 0.15526 0.693995 0.260022 0.824947L3.8439 5.30479Z"
                fill="#010203"
            />
        </svg>
    )
}

ArrowDownIcon.defaultProps = {
    width: 8,
    height: 6,
}

ArrowDownIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}
