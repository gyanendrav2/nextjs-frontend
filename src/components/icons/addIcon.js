import React from "react"
import PropTypes from "prop-types"

const AddIcon = (props) => {
    return (
        <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 38C29.9411 38 38 29.9411 38 20C38 10.0589 29.9411 2 20 2C10.0589 2 2 10.0589 2 20C2 29.9411 10.0589 38 20 38ZM20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
                fill="#010203"
            />
            <path
                d="M15 20.8086V19.201H19.1802V15H20.8198V19.201H25V20.8086H20.8198V25H19.1802V20.8086H15Z"
                fill="#010203"
            />
        </svg>
    )
}

AddIcon.defaultProps = {
    width: 40,
    height: 40,
}

AddIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}

export default AddIcon
