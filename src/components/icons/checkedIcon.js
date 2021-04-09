import React from "react"
import PropTypes from "prop-types"
import { colors } from "../../theme/colors"

export const CheckedIcon = ({ color, ...props }) => {
    return (
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect width={16} height={16} fill={color} />
            <rect x={3} y="7.99994" width="1.33333" height="5.33333" transform="rotate(-45 3 7.99994)" fill="#010203" />
            <rect
                x="12.084"
                y="4.573"
                width="1.33333"
                height="8.84673"
                transform="rotate(45 12.084 4.573)"
                fill="#010203"
            />
        </svg>
    )
}

CheckedIcon.defaultProps = {
    width: 16,
    height: 16,
    color: colors.lightGray,
}

CheckedIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
}
