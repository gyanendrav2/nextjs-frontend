import axios from "axios"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import Discovery from "../containers/discovery"

export default function Home({ homeData }) {
    const [data, setData] = useState({ hero: [], curatedCreators: [], featuredProjects: [] })

    useEffect(() => {
        if (Object.keys(homeData).length > 0) {
            const newData = {
                hero: homeData.hero,
                curatedCreators: homeData.curatedCreators,
                featuredProjects: homeData.featuredProjects,
            }
            setData(newData)
        }
    }, [homeData])

    return <>{homeData ? <Discovery details={data} /> : ""}</>
}

const propsValidation = {
    hero: PropTypes.shape(
        PropTypes.shape({
            backgroundImage: PropTypes.string,
            subtitle: PropTypes.string,
            titleLines: PropTypes.arrayOf([PropTypes.string]),
        })
    ),
    curatedCreators: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            jobTitle: PropTypes.string,
        })
    ),
    featuredProjects: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string,
            title: PropTypes.string,
            category: PropTypes.string,
            author: PropTypes.shape({
                jobTitle: PropTypes.string,
                name: PropTypes.string,
            }),
        })
    ),
}

Home.defaultProps = {
    homeData: [],
}

Home.propTypes = {
    homeData: PropTypes.shape(
        PropTypes.shape({
            ...propsValidation,
        })
    ),
}

Home.getInitialProps = async () => {
    const result = await axios.get("https://api.mocki.io/v1/58fdd8b2")
    const data = await result.data
    return { homeData: data }
}
