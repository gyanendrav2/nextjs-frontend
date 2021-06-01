import React from "react"
// import PropTypes from "prop-types";

export const SeenIcon = (props) => {
    return (
        <svg width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40Z"
                fill="#FF8DA1"
            />
            <rect
                x="27.0002"
                y="40.4733"
                width={3}
                height="12.0502"
                transform="rotate(-45 27.0002 40.4733)"
                fill="currentColor"
            />
            <rect
                x="51.0513"
                y="31.5778"
                width={3}
                height="23.2965"
                transform="rotate(45 51.0513 31.5778)"
                fill="currentColor"
            />
        </svg>
    )
}

SeenIcon.propTypes = {}
