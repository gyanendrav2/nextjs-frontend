import React from "react"
import PropTypes from "prop-types"

const EyeClosedIcon = (props) => {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.1516 11.9829C18.4772 8.1236 15.1629 6.32954 11.9829 6.32954C8.80288 6.32954 5.48862 8.1236 2.8142 11.9829C5.48862 15.8422 8.80288 17.6363 11.9829 17.6363C15.1629 17.6363 18.4772 15.8422 21.1516 11.9829ZM22.3545 11.9829C16.6264 3.11175 7.33938 3.11175 1.61129 11.9829C7.33938 20.8541 16.6264 20.8541 22.3545 11.9829Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9619 14.6503C13.4353 14.6503 14.6298 13.4558 14.6298 11.9823C14.6298 10.5089 13.4353 9.31439 11.9619 9.31439C10.4884 9.31439 9.29395 10.5089 9.29395 11.9823C9.29395 13.4558 10.4884 14.6503 11.9619 14.6503ZM11.9619 15.6503C13.9876 15.6503 15.6298 14.0081 15.6298 11.9823C15.6298 9.95658 13.9876 8.31439 11.9619 8.31439C9.93614 8.31439 8.29395 9.95658 8.29395 11.9823C8.29395 14.0081 9.93614 15.6503 11.9619 15.6503Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.27259 18.9646L18.9443 4.29288L19.6514 4.99998L4.9797 19.6717L4.27259 18.9646Z"
                fill="currentColor"
            />
        </svg>
    )
}

EyeClosedIcon.defaultProps = {
    width: 24,
    height: 24,
}

EyeClosedIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}

export default EyeClosedIcon
