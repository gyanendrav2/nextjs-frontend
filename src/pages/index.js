// import axios from "axios"
import fetch from "node-fetch"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Discovery } from "../containers/discovery"
// import { API } from "../utility/api"
// import { endpoints } from "../utility/endpoints"

export default function Home({ homeData }) {
    console.log("homedata", homeData)
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

    return <Discovery details={data} />
}

const propsValidation = {
    hero: PropTypes.arrayOf(
        PropTypes.shape({
            backgroundImage: PropTypes.string,
            subtitle: PropTypes.string,
            titleLines: PropTypes.arrayOf(PropTypes.string),
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
            title: PropTypes.string,
            image: PropTypes.string,
            category: PropTypes.string,
            author: PropTypes.shape({
                jobTitle: PropTypes.string,
                name: PropTypes.string,
                avatar: PropTypes.string,
            }),
        })
    ),
}

Home.defaultProps = {
    homeData: {},
}

Home.propTypes = {
    homeData: PropTypes.shape(propsValidation),
}

Home.getInitialProps = async () => {
    const result = await fetch("https://mocki.io/v1/9445d88b-a625-47b1-8251-ec710590741d")
    const data = await result.json()
    // const result = await API.get(endpoints.discover)
    // const data = await result.data
    return {
        homeData: data,
    }
}
