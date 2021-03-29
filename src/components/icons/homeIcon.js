import React from "react"
import PropTypes from "prop-types"

export const HomeIcon = (props) => {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 21V9H3V21.8C3 22.4627 3.53726 23 4.2 23H10.3333V16.5H13.6667V23H19.8C20.4628 23 21 22.4627 21 21.8V9H19V21H15.6667V14.5H8.33333V21H5Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 21V9H3V21.8C3 22.4627 3.53726 23 4.2 23H10.3333V16.5H13.6667V23H19.8C20.4628 23 21 22.4627 21 21.8V9H19V21H15.6667V14.5H8.33333V21H5Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.1928 1.38238C11.6505 0.966288 12.3495 0.96629 12.8072 1.38238L12.1345 2.12232L12.8072 1.38238L23.6727 11.2601L22.3273 12.74L12 3.35148L1.67268 12.74L0.327332 11.2601L11.1928 1.38238L11.8655 2.12232L11.1928 1.38238Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.1928 1.38238C11.6505 0.966288 12.3495 0.96629 12.8072 1.38238L12.1345 2.12232L12.8072 1.38238L23.6727 11.2601L22.3273 12.74L12 3.35148L1.67268 12.74L0.327332 11.2601L11.1928 1.38238L11.8655 2.12232L11.1928 1.38238Z"
                fill="currentColor"
            />
        </svg>
    )
}

HomeIcon.defaultProps = {
    width: 24,
    height: 24,
}

HomeIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}
