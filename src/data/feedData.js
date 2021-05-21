import React from "react"
import { images } from "../assets/images"
import { ShareIcon } from "../components/icons/shareIcon"

export const feedRecentData = [
    {
        image: images.girlImage,
        buttonText: "Following",
        icon: <ShareIcon />,
        name: "Mary Tooper",
        position: "Animator assistant",
        category: "Animation",
        client: "Nike",
        year: "2021",
        time: "09.10.20",
        description: "Nike “Beginnings” commercial about key moments in James’ path",
    },
    {
        buttonText: "Following",
        image: images.simon,
        icon: <ShareIcon />,
        name: "Simon Bowell",
        position: "Photographer",
        category: "Photography",
        client: "NBA",
        year: "2020",
        time: "1w",
        description: "LeBron James charity event photography for childrens’ hospital",
    },
]
export const feedOldData = [
    {
        image: images.mike,
        name: "Mary Tooper",
        icon: <ShareIcon />,
        position: "Animator assistant",
        category: "Animation",
        client: "Nike",
        year: "2021",
        time: "1w",
        description: "Nike “Beginnings” commercial about key moments in James’ path",
    },
    {
        image: images.sarah,
        name: "Mary Tooper",
        icon: <ShareIcon />,
        position: "Animator assistant",
        category: "Animation",
        client: "Nike",
        year: "2021",
        time: "1m",
        description: "Nike “Beginnings” commercial about key moments in James’ path",
    },
]
