import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import { useRouter } from "next/router"
import HeaderWrapper from "../components/header/headerWrapper"
import { colors } from "../theme/colors"
import Footer from "../components/footer"
import CustomButton from "../components/buttons/customButton"
import { Error404Icon } from "../components/icons/404Icon"

const useStyles = makeStyles({
    wrapper: {
        width: "100%",
        height: "100vh",
        flexDirection: "column",
        backgroundColor: colors.white,
        "@media (max-width:767px)": {
            height: "142vh",
        },
    },
    wrapperContent: {
        margin: "auto",
    },
    title: {
        marginTop: "2rem",
        marginBottom: "2.5rem",
        fontSize: "1.375rem",
        lineHeight: "2.125rem",
        textAlign: "center",
        padding: "0 1rem",
        "@media(max-width:330px)": {
            fontSize: "1.3rem",
        },
    },
    footer: {
        width: "100%",
        marginTop: 0,
    },
    button: {
        padding: "1.062rem 1.5rem",
    },
})

const Custom404 = () => {
    const classes = useStyles()
    const routes = useRouter()
    return (
        <>
            <Grid
                container
                alignItems="center"
                justify="space-between"
                direction="column"
                wrap="nowrap"
                className={classes.wrapper}>
                <HeaderWrapper isScrollDetect={false} mobileMenuIconColor={colors.white} />
                <Grid
                    container
                    alignItems="center"
                    justify="space-between"
                    direction="column"
                    className={classes.wrapperContent}>
                    <Error404Icon />
                    <Typography className={classes.title}>
                        Uh-oh, we believe the page doesn’t exist, so unfortunate :(
                    </Typography>
                    <CustomButton
                        label="Discover projects here"
                        externalclass={classes.button}
                        onClick={() => routes.push("/")}
                    />
                </Grid>
                <Footer externalclass={classes.footer} />
            </Grid>
        </>
    )
}

Custom404.propTypes = {}

export default Custom404
