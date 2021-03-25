import React from "react"
import PropTypes from "prop-types"

const Indicator = ({ active, images, gotoSlide, bulletClass, activeBulletClass }) => {
    return (
        <>
            {images.length > 1 && (
                <div className="bulletContainer">
                    {images.map((item, i) => (
                        <div
                            key={i}
                            className={`${bulletClass || "bullet"} ${
                                i === active ? activeBulletClass || "bullet_active" : ""
                            }`}
                            onClick={() => gotoSlide(i)}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

Indicator.propTypes = {
    active: PropTypes.number,
    images: PropTypes.array,
    gotoSlide: PropTypes.func,
    bulletClass: PropTypes.string,
    activeBulletClass: PropTypes.string,
}

export default Indicator
