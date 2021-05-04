import React from "react"
import PropTypes from "prop-types"

export const ArrowRight = (props) => {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M12.1499 2.14142C12.0718 2.06332 11.9452 2.06332 11.8671 2.14142L9.64784 4.36065C9.56973 4.43875 9.56973 4.56539 9.64784 4.64349L19.5147 14.5104L22.0168 12.0083L12.1499 2.14142Z"
                fill="currentColor"
            />
            <path
                d="M22.0167 12.0083L19.5146 9.50623L9.57702 19.4438C9.53797 19.4829 9.53797 19.5462 9.57702 19.5852L11.9377 21.9459C11.9767 21.9849 12.04 21.9849 12.0791 21.9459L22.0167 12.0083Z"
                fill="currentColor"
            />
        </svg>
    )
}

ArrowRight.defaultProps = {
    width: 24,
    height: 24,
}

ArrowRight.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}
