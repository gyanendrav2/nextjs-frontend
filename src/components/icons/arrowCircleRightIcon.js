import React from "react"
import PropTypes from "prop-types"

export const ArrowCircleRightIcon = (props) => {
    return (
        <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx={20} cy={20} r={19} stroke="currentColor" strokeWidth={2} />
            <path
                d="M19.1414 25.5588C19.0633 25.6369 18.9367 25.6369 18.8586 25.5588L17.7272 24.4274C17.6491 24.3493 17.6491 24.2227 17.7272 24.1446L23.2426 18.6291L24.6569 20.0433L19.1414 25.5588Z"
                fill="currentColor"
            />
            <path
                d="M24.6567 20.043L23.2425 21.4572L17.6564 15.871C17.6173 15.832 17.6173 15.7687 17.6564 15.7296L18.9292 14.4568C18.9682 14.4178 19.0315 14.4178 19.0706 14.4568L24.6567 20.043Z"
                fill="currentColor"
            />
        </svg>
    )
}

ArrowCircleRightIcon.defaultProps = {
    width: 40,
    height: 40,
}

ArrowCircleRightIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}
