import React, { useState } from "react";
import PropTypes from "prop-types";
import { Blurhash } from "react-blurhash";

const BlurImage = ({ image, externalClass }) => {
    const [showImage, setShowImage] = useState(false);
    return (
        <>
            {/* {showImage && ( */}
            <img className={externalClass} onLoad={() => setShowImage(true)} src={image} alt={image} />
            {/* )} */}
            {!showImage && (
                <Blurhash
                    hash="UC8;;@kD01jE_MofDjWUx^fkRPaz?HWYE1n$"
                    resolutionX={32}
                    resolutionY={32}
                    width="100%"
                    height="15rem"
                    punch={0}
                />
            )}
        </>
    );
};

BlurImage.propTypes = {
    image: PropTypes.string,
    externalClass: PropTypes.string,
};

export default BlurImage;
