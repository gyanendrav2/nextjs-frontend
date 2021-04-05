import { Box, makeStyles, Typography } from "@material-ui/core"
import { useRouter } from "next/router"
import React from "react"
import { useCookies } from "react-cookie"
import { colors } from "../../theme/colors"
import { CustomButton } from "../buttons/customButton"
import { CookieIcon } from "../icons/cookieIcon"

const useStyles = makeStyles({
    wrapper: {
        position: "fixed",
        bottom: "2.5rem",
        right: "2.5rem",
        zIndex: 9,
        maxWidth: "27.5rem",
        padding: "1.5rem",
        backgroundColor: colors.black,
        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.5)",
    },
    cookieButton: {
        backgroundColor: colors.black,
        border: `1px solid ${colors.pink}`,
        height: "1.375rem",
        padding: "1rem 1.5rem",
        marginTop: "1.4rem",
        "&:hover": {
            backgroundColor: colors.white,
            color: colors.black,
        },
    },
    title: {
        color: colors.white,
        fontSize: "0.75rem",
        lineHeight: "1.25rem",
        marginTop: "1rem",
        fontFamily: "Campton Light",
    },
    cookiesPage: {
        cursor: "pointer",
        textDecoration: "underline",
    },
})

export const CookieCard = () => {
    const [, setCookie] = useCookies(["pxl-user"])
    const classes = useStyles()
    const routes = useRouter()
    const handeCookie = () => {
        setCookie("pxl-user", "new pxl user", { path: "/" })
    }
    const handleRoute = () => {
        routes.push("/cookies")
    }

    return (
        <>
            <Box className={classes.wrapper}>
                <CookieIcon />
                <Typography className={classes.title}>
                    Pxl may use cookies, web beacons, tracking pixels, and other tracking technologies when you visit
                    our website to help customize the Site and improve your experience. Read more about cookies and
                    terms in our
                    <span className={classes.cookiesPage} onClick={handleRoute} aria-hidden="true">
                        cookie and privacy policy.
                    </span>
                </Typography>
                <CustomButton label="Accept cookies" externalclass={classes.cookieButton} onClick={handeCookie} />
            </Box>
        </>
    )
}

CookieCard.defaultProps = {}

CookieCard.propTypes = {}
