import React from "react"
import PropTypes from "prop-types"

export const MarkSpamIcon = (props) => {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x={0} y={-1} width={25} height={25}>
                <rect y={-1} width={25} height={25} fill="white" />
                <rect y={-1} width={25} height={25} fill="url(#paint0_linear)" />
            </mask>
            <g mask="url(#mask0)">
                <path
                    d="M17.666 9.32317C17.8079 9.39828 17.8079 9.60159 17.666 9.67671L9.29355 14.1077C9.16036 14.1782 9 14.0816 9 13.9309L9 5.06893C9 4.91822 9.16036 4.82166 9.29356 4.89216L17.666 9.32317Z"
                    fill="black"
                />
                <path
                    d="M8 3.2C8 3.08954 8.08954 3 8.2 3H8.8C8.91045 3 9 3.08954 9 3.2V20.8C9 20.9105 8.91045 21 8.8 21H8.2C8.08954 21 8 20.9105 8 20.8V3.2Z"
                    fill="black"
                />
            </g>
        </svg>
    )
}

MarkSpamIcon.defaultProps = {
    height: 24,
    width: 24,
}
MarkSpamIcon.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
}
