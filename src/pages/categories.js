import React, { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import PropTypes from "prop-types"
import axios from "axios"

const Discovery = dynamic(() => import("../containers/discovery"))

const Categories = ({ categories }) => {
    const [data, setData] = useState({ hero: [], curatedCreators: [], featuredProjects: [] })
    useEffect(() => {
        if (Object.keys(categories).length > 0) {
            const newData = {
                hero: categories.hero,
                curatedCreators: categories.curatedCreators,
                featuredProjects: categories.featuredProjects,
            }
            setData(newData)
        }
    }, [categories])

    return (
        <>
            {data.hero.length > 0 ? (
                <Discovery
                    isAuthenticated
                    feed
                    hideCurated
                    showSlider={false}
                    category="Discover work"
                    details={data}
                />
            ) : (
                <></>
            )}
        </>
    )
}

export default Categories

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

Categories.defaultProps = {
    categories: {},
}

Categories.propTypes = {
    categories: PropTypes.shape(propsValidation),
}

export const getStaticProps = async () => {
    const result = await axios.get("https://mocki.io/v1/9445d88b-a625-47b1-8251-ec710590741d")
    const data = await result.data
    return {
        props: { categories: data },
    }
}
