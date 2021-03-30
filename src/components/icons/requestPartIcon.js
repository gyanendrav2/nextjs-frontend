import React from "react"
import PropTypes from "prop-types"

export const RequestPartIcon = (props) => {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M4.21738 7.5C7.67633 1.5 16.3237 1.5 19.7826 7.5C23.2416 13.5 18.9179 21 12 21C5.08212 21 0.758441 13.5 4.21738 7.5Z"
                fill="black"
            />
            <path
                d="M11.5415 14.8C11.5415 14.9105 11.631 15 11.7415 15H12.2533C12.3637 15 12.4533 14.9105 12.4533 14.8V12.4525H14.8C14.9105 12.4525 15 12.3629 15 12.2525V11.7423C15 11.6318 14.9105 11.5423 14.8 11.5423H12.4533V9.2C12.4533 9.08954 12.3637 9 12.2533 9H11.7415C11.631 9 11.5415 9.08954 11.5415 9.2V11.5423H9.2C9.08954 11.5423 9 11.6318 9 11.7423V12.2525C9 12.3629 9.08954 12.4525 9.2 12.4525H11.5415V14.8Z"
                fill="white"
            />
        </svg>
    )
}
RequestPartIcon.defaultProps = {
    height: 24,
    width: 24,
}
RequestPartIcon.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
}
