import React from "react"
import PropTypes from "prop-types"

export const CloseIconBig = (props) => {
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect
                x="0.521484"
                y="17.8"
                width={24}
                height={2}
                transform="rotate(-45 0.521484 17.8)"
                fill="currentColor"
            />
            <rect
                x="0.521484"
                y="17.8"
                width={24}
                height={2}
                transform="rotate(-45 0.521484 17.8)"
                fill="currentColoro"
            />
            <rect
                x="2.52148"
                y="0.800049"
                width={24}
                height={2}
                transform="rotate(45 2.52148 0.800049)"
                fill="currentColor"
            />
            <rect
                x="2.52148"
                y="0.800049"
                width={24}
                height={2}
                transform="rotate(45 2.52148 0.800049)"
                fill="currentColor"
            />
        </svg>
    )
}

CloseIconBig.defaultProps = {
    width: 24,
    height: 24,
}

CloseIconBig.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}
