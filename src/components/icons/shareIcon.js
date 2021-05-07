import React from "react"
import PropTypes from "prop-types"

export const ShareIcon = (props) => {
    return (
       
      <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width={40} height={40} transform="translate(0 40) rotate(-90)" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M28.8532 19.4157L22.6154 11.8133V17.4986L22.1664 17.5447C19.9096 17.7763 17.3579 18.4685 15.3819 19.9896C13.6996 21.2845 12.4061 23.2003 12.0799 26.0304C12.5736 25.5121 13.2466 24.8712 14.0796 24.23C15.9758 22.7705 18.7349 21.2841 22.1154 21.2841H22.6154V27.0181L28.8532 19.4157ZM11.9035 27.7637L11 29V27.4683C11 23.525 12.571 20.8913 14.7719 19.1971C16.8129 17.6261 19.3618 16.8873 21.6154 16.6014V10.9748C21.6154 10.3174 22.4396 10.0226 22.8565 10.5307L29.7824 18.9717C29.9942 19.2298 29.9942 19.6016 29.7824 19.8597L22.8565 28.3007C22.4396 28.8089 21.6154 28.514 21.6154 27.8567V22.2961C18.7582 22.4323 16.3876 23.7154 14.6896 25.0225C13.7938 25.712 13.0934 26.402 12.6179 26.9188C12.3804 27.1769 12.1996 27.391 12.0793 27.5393C12.0191 27.6134 11.9741 27.6709 11.9446 27.7092C11.94 27.7153 11.9357 27.7209 11.9318 27.726C11.9235 27.7369 11.917 27.7456 11.9123 27.7518L11.905 27.7616L11.9035 27.7637Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M28.8532 19.4157L22.6154 11.8133V17.4986L22.1664 17.5447C19.9096 17.7763 17.3579 18.4685 15.3819 19.9896C13.6996 21.2845 12.4061 23.2003 12.0799 26.0304C12.5736 25.5121 13.2466 24.8712 14.0796 24.23C15.9758 22.7705 18.7349 21.2841 22.1154 21.2841H22.6154V27.0181L28.8532 19.4157ZM11.9035 27.7637L11 29V27.4683C11 23.525 12.571 20.8913 14.7719 19.1971C16.8129 17.6261 19.3618 16.8873 21.6154 16.6014V10.9748C21.6154 10.3174 22.4396 10.0226 22.8565 10.5307L29.7824 18.9717C29.9942 19.2298 29.9942 19.6016 29.7824 19.8597L22.8565 28.3007C22.4396 28.8089 21.6154 28.514 21.6154 27.8567V22.2961C18.7582 22.4323 16.3876 23.7154 14.6896 25.0225C13.7938 25.712 13.0934 26.402 12.6179 26.9188C12.3804 27.1769 12.1996 27.391 12.0793 27.5393C12.0191 27.6134 11.9741 27.6709 11.9446 27.7092C11.94 27.7153 11.9357 27.7209 11.9318 27.726C11.9235 27.7369 11.917 27.7456 11.9123 27.7518L11.905 27.7616L11.9035 27.7637Z" fill="url(#paint0_linear)" />
    </svg>
    )
}
ShareIcon.defaultProps = {
    width: 40,
    height: 40,
}

ShareIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}