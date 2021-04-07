import React from "react"
import PropTypes from "prop-types"

export const ArrowUpIcon = (props) => {
    return (
        <svg width={8} height={5} viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M3.84383 0.195217C3.92389 0.0951358 4.07611 0.0951359 4.15617 0.195217L7.74005 4.67506C7.84481 4.80601 7.75158 5 7.58388 5L0.416125 5C0.248424 5 0.155189 4.80601 0.259951 4.67506L3.84383 0.195217Z"
                fill="#010203"
            />
        </svg>
    )
}

ArrowUpIcon.defaultProps = {
    width: 8,
    height: 5,
}

ArrowUpIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}
