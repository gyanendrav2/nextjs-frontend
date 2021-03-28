import React from "react"
import PropTypes from "prop-types"

export const LoginIcon = (props) => {
    return (
        <svg width={24} height={24} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.5 0H5.5C4.94772 0 4.5 0.447715 4.5 1C4.5 1.55228 4.94771 2 5.5 2H17.5V20H5.5C4.94772 20 4.5 20.4477 4.5 21C4.5 21.5523 4.94771 22 5.5 22H19.5V0Z"
                fill="currentColor"
            />
            <path
                d="M12.2659 11.6638C12.3797 11.5842 12.3797 11.4158 12.2659 11.3362L7.81469 8.22029C7.68214 8.1275 7.5 8.22233 7.5 8.38413L7.5 14.6159C7.5 14.7777 7.68214 14.8725 7.81469 14.7797L12.2659 11.6638Z"
                fill="currentColor"
            />
            <path
                d="M0.5 10.7C0.5 10.5895 0.589543 10.5 0.7 10.5H10.3C10.4105 10.5 10.5 10.5895 10.5 10.7V12.3C10.5 12.4105 10.4105 12.5 10.3 12.5H0.7C0.589543 12.5 0.5 12.4105 0.5 12.3V10.7Z"
                fill="currentColor"
            />
        </svg>
    )
}

LoginIcon.defaultProps = {
    width: 24,
    height: 24,
}

LoginIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}
