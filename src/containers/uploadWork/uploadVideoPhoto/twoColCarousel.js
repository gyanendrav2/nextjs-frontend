import React from "react"
import Carousel from "nuka-carousel"
import { Grid, makeStyles } from "@material-ui/core"
import { images } from "../../../assets/images"
import { ArrowLeftIcon } from "../../../components/icons/arrowLeftIcon"
import { ArrowRight } from "../../../components/icons/arrowRightIcon"

const useStyles = makeStyles({
    wrapper: {
        marginTop: "1rem",
        "& .slider-control-bottomcenter": {
            display: "none",
        },
    },
    img: {
        width: "100%",
        height: "100%",
    },
    leftArrowIcon: {
        marginLeft: "1.5rem",
        cursor: "pointer",
    },
    rightArrowIcon: {
        marginRight: "1.5rem",
        cursor: "pointer",
    },
})

export const TwoColCarousel = () => {
    const classes = useStyles()
    return (
        <Carousel
            className={classes.wrapper}
            renderCenterLeftControls={({ previousSlide }) => (
                <ArrowLeftIcon className={classes.leftArrowIcon} onClick={previousSlide} />
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <ArrowRight className={classes.rightArrowIcon} onClick={nextSlide} />
            )}>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <img className={classes.img} src={images.masorny1} alt={images.masorny1} />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <img className={classes.img} src={images.masorny1} alt={images.masorny1} />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <img className={classes.img} src={images.masorny1} alt={images.masorny1} />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <img className={classes.img} src={images.masorny1} alt={images.masorny1} />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <img className={classes.img} src={images.masorny1} alt={images.masorny1} />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <img className={classes.img} src={images.masorny1} alt={images.masorny1} />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <img className={classes.img} src={images.masorny1} alt={images.masorny1} />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <img className={classes.img} src={images.masorny1} alt={images.masorny1} />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <img className={classes.img} src={images.masorny1} alt={images.masorny1} />
                </Grid>
            </Grid>
        </Carousel>
    )
}

TwoColCarousel.propTypes = {}
