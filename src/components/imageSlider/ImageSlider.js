import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ImageSlider = ({ imageList, transition, infiniteSlide, height, outerLeftBtnClicked, outerRightBtnClicked }) => {
    const [images, setImages] = useState([]);
    const [active, setActive] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    useEffect(() => {
        if (Array.isArray(imageList)) {
            initial();
        }
    }, [imageList]);

    useEffect(() => {
        if (outerLeftBtnClicked > 0) {
            slideRight();
        }
    }, [outerLeftBtnClicked]);

    useEffect(() => {
        if (outerRightBtnClicked > 0) {
            slideRight();
        }
    }, [outerRightBtnClicked]);

    const initial = () => {
        const result = imageList.map((item, i) => {
            return { ...item, transform: i * 100 };
        });
        setImages(result);
    };

    const slideLeft = () => {
        slidePrevious();
        if (active < images.length - 1) {
            setActive(active + 1);
        } else {
            initial();
            setActive(0);
        }
    };

    const slideRight = () => {
        slideFarword();
        if (active > 0) {
            setActive(active - 1);
        } else {
            const data = [...images];
            const result = data.map((item, i) => {
                return {
                    ...item,
                    transform: -(data.length - 1 - i) * 100,
                };
            });
            setActive(images.length - 1);
            setImages(result);
        }
    };

    // const gotoSlide = (i) => {
    //     if (i < active) {
    //         slidePrevious(i - active);
    //     } else if (i > active) {
    //         slideFarword(active - i);
    //     }
    //     setActive(i);
    // };

    const slidePrevious = (i) => {
        const data = [...images];
        if (i) {
            const result = data.map((item) => {
                return {
                    ...item,
                    transform: item.transform - i * 100,
                };
            });
            setImages(result);
        } else {
            const result = data.map((item) => {
                return {
                    ...item,
                    transform: item.transform - 100,
                };
            });
            setImages(result);
        }
    };

    const slideFarword = (i) => {
        const data = [...images];
        if (i) {
            const result = data.map((item) => {
                return {
                    ...item,
                    transform: item.transform + i * 100,
                };
            });
            setImages(result);
        } else {
            const result = data.map((item) => {
                return {
                    ...item,
                    transform: item.transform + 100,
                };
            });
            setImages(result);
        }
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (infiniteSlide) {
            if (touchStart - touchEnd > 150) {
                slideLeft();
            }
            if (touchStart - touchEnd < -150) {
                slideRight();
            }
        } else {
            if (touchStart - touchEnd > 150 && active < images.length - 1) {
                slideLeft();
            }
            if (touchStart - touchEnd < -150 && active > 0) {
                slideRight();
            }
        }
    };

    return (
        <div style={{ height }} className="wrapper">
            {images.map((item, i) => (
                <React.Fragment key={i}>
                    <div
                        className="slider_container"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        style={{ transform: `translateX(${item.transform}%)`, transition: `all ${transition}s` }}>
                        {item.url !== "" && <img className="slider_container_image" key={i} src={item.url} alt="" />}
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

ImageSlider.propTypes = {
    imageList: PropTypes.array,
    transition: PropTypes.number,
    infiniteSlide: PropTypes.bool,
    height: PropTypes.string,
    outerLeftBtnClicked: PropTypes.number,
    outerRightBtnClicked: PropTypes.number,
};

export default ImageSlider;
