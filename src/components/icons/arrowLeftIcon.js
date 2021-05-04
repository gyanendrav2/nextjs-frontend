import React from "react"
import PropTypes from "prop-types"

export const ArrowLeftIcon = (props) => {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M11.8504 2.14142C11.9285 2.06332 12.0552 2.06332 12.1333 2.14142L14.3525 4.36065C14.4306 4.43875 14.4306 4.56539 14.3525 4.64349L4.48565 14.5104L1.98358 12.0083L11.8504 2.14142Z"
                fill="currentColor"
            />
            <path
                d="M1.98368 12.0083L4.48575 9.50623L14.4233 19.4438C14.4624 19.4829 14.4624 19.5462 14.4233 19.5852L12.0627 21.9459C12.0236 21.9849 11.9603 21.9849 11.9213 21.9459L1.98368 12.0083Z"
                fill="currentColor"
            />
        </svg>
    )
}

ArrowLeftIcon.defaultProps = {
    width: 24,
    height: 24,
}

ArrowLeftIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}
