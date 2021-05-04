import React from "react"
import PropTypes from "prop-types"

export const ArrowCircleLeftIcon = (props) => {
    return (
        <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g>
                <circle r={19} transform="matrix(-1 0 0 1 20 20)" stroke="currentColor" strokeWidth={2} />
                <path
                    d="M20.8586 25.5588C20.9367 25.6369 21.0633 25.6369 21.1414 25.5588L22.2728 24.4274C22.3509 24.3493 22.3509 24.2227 22.2728 24.1446L16.7574 18.6291L15.3431 20.0433L20.8586 25.5588Z"
                    fill="currentColor"
                />
                <path
                    d="M15.3433 20.043L16.7575 21.4572L22.3436 15.871C22.3827 15.832 22.3827 15.7687 22.3436 15.7296L21.0708 14.4568C21.0318 14.4178 20.9685 14.4178 20.9294 14.4568L15.3433 20.043Z"
                    fill="currentColor"
                />
            </g>
        </svg>
    )
}

ArrowCircleLeftIcon.defaultProps = {
    width: 40,
    height: 40,
}

ArrowCircleLeftIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}
