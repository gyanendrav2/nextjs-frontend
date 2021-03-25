import React from "react"
import PropTypes from "prop-types"

const RightButton = ({ active, images, onClick, infiniteSlide, externalButton, externalClass }) => {
    return (
        <>
            {infiniteSlide ? (
                <div className={externalClass || "iconButtonRight"} onClick={onClick}>
                    {externalButton || <div className="iconButtonRight__arrowRight" />}
                </div>
            ) : (
                active < images.length - 1 && (
                    <div className={externalClass || "iconButtonRight"} onClick={onClick}>
                        {externalButton || <div className="iconButtonRight__arrowRight" />}
                    </div>
                )
            )}
        </>
    )
}

RightButton.propTypes = {
    active: PropTypes.number,
    onClick: PropTypes.func,
    images: PropTypes.array,
    infiniteSlide: PropTypes.bool,
    externalButton: PropTypes.element,
    externalClass: PropTypes.string,
}

export default RightButton
