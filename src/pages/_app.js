import React from "react"
import dynamic from "next/dynamic"
import { Provider } from "react-redux"
import "react-lazy-load-image-component/src/effects/blur.css"
import PropTypes from "prop-types"
import Head from "next/head"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "../theme/theme"
import "../styles/index.scss"
import { images } from "../assets/images"
import { store } from "../redux/store/store"

const CssBaseline = dynamic(() => import("@material-ui/core/CssBaseline"))

export default function MyApp(props) {
    const { Component, pageProps } = props
    // const [isLoading, setIsLoading] = useState(true)

    React.useEffect(() => {
        // const loaderhander = () => {
        //     setIsLoading(false)
        //     // document.getElementById("__next").style.display = "block"
        // }
        // window.addEventListener("load", loaderhander)
        const jssStyles = document.querySelector("#jss-server-side")
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles)
        }
        // return () => window.removeEventListener("load", loaderhander)
    }, [])

    return (
        <>
            <Head>
                <title>PXL</title>
                <link rel="icon" href={images.logoImage} />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <meta name="description" content="Web site created using next js" />
            </Head>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
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
