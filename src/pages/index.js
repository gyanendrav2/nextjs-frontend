import axios from "axios";
import React from "react";
import Discovery from "../pages/discovery/";
import PropTypes from "prop-types";

export default function Home({ homeData }) {
    return <>{homeData ? <Discovery details={homeData} /> : ""}</>;
}

Home.propTypes = {
    homeData: PropTypes.any,
};

Home.getInitialProps = async () => {
    const result = await axios.get("https://api.mocki.io/v1/58fdd8b2");
    const data = await result.data;
    return { homeData: data };
};
