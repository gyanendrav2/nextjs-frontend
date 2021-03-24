import axios from "axios";
import React, { useEffect, useState } from "react";
import Discovery from "../pages/discovery/";
import PropTypes from "prop-types";

export default function Home({ homeData }) {
    const [data, setData] = useState({ hero: [], curatedCreators: [], featuredProjects: [] });
    
    useEffect(() => {
        if (homeData?.hero) {
            const newData = {
                hero: homeData.hero,
                curatedCreators: homeData.curatedCreators,
                featuredProjects: homeData.featuredProjects,
            };
            setData(newData);
        }
    }, [homeData]);

    return <>{homeData ? <Discovery details={data} /> : ""}</>;
}

Home.propTypes = {
    homeData: PropTypes.any,
};

Home.getInitialProps = async () => {
    const result = await axios.get("https://api.mocki.io/v1/58fdd8b2");
    const data = await result.data;
    return { homeData: data };
};
