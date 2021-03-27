import React from "react"
import PropTypes from "prop-types"

const HomeIcon = (props) => {
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
            <defs>
                <linearGradient id="paint0_linear" x1={12} y1={9} x2={12} y2={23} gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" />
                    <stop offset={1} stopColor="currentColor" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="paint1_linear" x1={12} y1="1.07031" x2={12} y2="12.74" gradientUnits="currentColor">
                    <stop stopColor="currentColor" />
                    <stop offset={1} stopColor="currentColor" stopOpacity={0} />
                </linearGradient>
            </defs>
        </svg>
    )
}

HomeIcon.defaultProps = {
    width: 22,
    height: 22,
}

HomeIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}

export default HomeIcon
