import React from "react"
import PropTypes from "prop-types"

const DisocoveryIcon = (props) => {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M15.3193 9.27302C15.3559 9.12654 15.2232 8.99386 15.0768 9.03048L10.6517 10.1368C10.5009 10.1745 10.4488 10.3623 10.5588 10.4722L13.8776 13.791C13.9875 13.901 14.1753 13.8489 14.213 13.6981L15.3193 9.27302Z"
                fill="currentColor"
            />
            <path
                d="M15.3193 9.27302C15.3559 9.12654 15.2232 8.99386 15.0768 9.03048L10.6517 10.1368C10.5009 10.1745 10.4488 10.3623 10.5588 10.4722L13.8776 13.791C13.9875 13.901 14.1753 13.8489 14.213 13.6981L15.3193 9.27302Z"
                fill="url(#paint0_linear)"
            />
            <path
                d="M8.72311 15.869C8.57663 15.9057 8.44395 15.773 8.48057 15.6265L9.58684 11.2014C9.62455 11.0506 9.81237 10.9986 9.92229 11.1085L13.2411 14.4273C13.351 14.5372 13.299 14.7251 13.1482 14.7628L8.72311 15.869Z"
                fill="currentColor"
            />
            <path
                d="M8.72311 15.869C8.57663 15.9057 8.44395 15.773 8.48057 15.6265L9.58684 11.2014C9.62455 11.0506 9.81237 10.9986 9.92229 11.1085L13.2411 14.4273C13.351 14.5372 13.299 14.7251 13.1482 14.7628L8.72311 15.869Z"
                fill="url(#paint1_linear)"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9 21.25C17.0087 21.25 21.15 17.1086 21.15 12C21.15 6.89137 17.0087 2.75 11.9 2.75C6.79139 2.75 2.65002 6.89137 2.65002 12C2.65002 17.1086 6.79139 21.25 11.9 21.25ZM11.9 23.25C18.1132 23.25 23.15 18.2132 23.15 12C23.15 5.7868 18.1132 0.75 11.9 0.75C5.68682 0.75 0.650024 5.7868 0.650024 12C0.650024 18.2132 5.68682 23.25 11.9 23.25Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9 21.25C17.0087 21.25 21.15 17.1086 21.15 12C21.15 6.89137 17.0087 2.75 11.9 2.75C6.79139 2.75 2.65002 6.89137 2.65002 12C2.65002 17.1086 6.79139 21.25 11.9 21.25ZM11.9 23.25C18.1132 23.25 23.15 18.2132 23.15 12C23.15 5.7868 18.1132 0.75 11.9 0.75C5.68682 0.75 0.650024 5.7868 0.650024 12C0.650024 18.2132 5.68682 23.25 11.9 23.25Z"
                fill="url(#paint2_linear)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear"
                    x1="15.2667"
                    y1="9.08309"
                    x2="12.2182"
                    y2="12.1316"
                    gradientUnits="currentColor">
                    <stop stopColor="currentColor" />
                    <stop offset={1} stopColor="currentColor" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="paint1_linear"
                    x1="8.53318"
                    y1="15.8164"
                    x2="11.5817"
                    y2="12.7679"
                    gradientUnits="currentColor">
                    <stop stopColor="currentColor" />
                    <stop offset={1} stopColor="currentColor" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="paint2_linear"
                    x1="11.9"
                    y1="0.75"
                    x2="11.9"
                    y2="23.25"
                    gradientUnits="currentColor">
                    <stop stopColor="currentColor" />
                    <stop offset={1} stopColor="currentColor" stopOpacity={0} />
                </linearGradient>
            </defs>
        </svg>
    )
}

DisocoveryIcon.defaultProps = {
    width: 24,
    height: 24,
}

DisocoveryIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}

export default DisocoveryIcon
