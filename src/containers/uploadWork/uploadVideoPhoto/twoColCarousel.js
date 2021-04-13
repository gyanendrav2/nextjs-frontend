import React from "react"
import PropTypes from "prop-types"
import Carousel from "nuka-carousel"
import { Grid, makeStyles } from "@material-ui/core"
import { images } from "../../../assets/images"
import { ArrowLeft } from "../../../components/icons/arrowLeft"
import { ArrowRight } from "../../../components/icons/arrowRight"

const useStyles = makeStyles({
    wrapper: {
        marginTop: "1rem",
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

export const TwoColCarousel = (props) => {
    const classes = useStyles()
    return (
        <Carousel
            className={classes.wrapper}
            renderCenterLeftControls={({ previousSlide }) => (
                <ArrowLeft className={classes.leftArrowIcon} onClick={previousSlide} />
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
