import React from 'react';
import PropTypes from 'prop-types';

const LeftButton = ({ active, onClick, infiniteSlide, externalButton, externalClass }) => {
    return (
        <>
            {infiniteSlide ? (
                <div className={externalClass ? externalClass : "iconButtonLeft"} onClick={onClick}>
                    {externalButton ? externalButton : <div className="iconButtonLeft__arrowLeft"></div>}
                </div>
            ) : (
                active > 0 && (
                    <div  className={externalClass ? externalClass : "iconButtonLeft"} onClick={onClick}>
                        {externalButton ? externalButton : <div className="iconButtonLeft__arrowLeft"></div>}
                    </div>
                )
            )}
        </>
    );
};

LeftButton.propTypes = {
    active: PropTypes.number,
    onClick: PropTypes.func,
    infiniteSlide: PropTypes.bool,
    externalButton: PropTypes.element,
    externalClass: PropTypes.element,
};

export default LeftButton;
