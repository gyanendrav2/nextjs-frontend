import React from "react"
import PropTypes from "prop-types"
import Head from "next/head"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "../theme/theme"
import { images } from "../assets/images"
import "../styles/index.scss"

export default function MyApp(props) {
    const { Component, pageProps } = props

    React.useEffect(() => {
        /* Remove the server-side injected CSS. */
        const jssStyles = document.querySelector("#jss-server-side")
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles)
        }
    }, [])

    return (
        <>
            <Head>
                <title>PXL</title>
                <link rel="icon" href={images.logoImage} />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <meta name="description" content="Web site created using next js" />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
MyApp.defaultProps = {
    Component: "",
    pageProps: {},
}

MyApp.propTypes = {
    Component: PropTypes.elementType,
    // eslint-disable-next-line react/forbid-prop-types
    pageProps: PropTypes.object,
}
