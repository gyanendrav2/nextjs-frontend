import React from "react"
import { DisocoveryIcon } from "../components/icons/disocoveryIcon"
import { HomeIcon } from "../components/icons/homeIcon"
import { LoginIcon } from "../components/icons/loginIcon"
import { NotificationBellIcon } from "../components/icons/notificationBellIcon"
import { SearchIcon } from "../components/icons/searchIcon"

export const NavItemOptions = [
    {
        id: 1,
        name: "Discover",
        icon: <DisocoveryIcon />,
        pathname: "/",
    },
    {
        id: 2,
        name: "Search",
        icon: <SearchIcon />,
        pathname: "/search",
    },
    {
        id: 3,
        name: "Sign in",
        icon: <LoginIcon />,
        pathname: "/signin",
    },
]

export const mobileNavOptions = [
    {
        id: 1,
        name: "Feed",
        icon: <HomeIcon />,
        pathname: "/feed",
    },
    {
        id: 2,
        name: "Discover",
        icon: <DisocoveryIcon />,
        pathname: "/categories",
    },
]

// export const loggedInUserNav = [
//     {
//         id: 1,
//         name: "Feed",
//         icon: <HomeIcon />,
//         pathname: "/feed",
//     },
//     {
//         id: 1,
//         name: "discover",
//         icon: <DisocoveryIcon />,
//         pathname: "/categories",
//     },
//     {
//         id: 2,
//         name: "Search",
//         icon: <SearchIcon />,
//         pathname: "/search",
//     },
//     {
//         id: 3,
//         name: "",
//         icon: <NotificationBellIcon />,
//         pathname: "/notifications",
//     },
// ]

export const feedUserNav = [
    {
        id: 1,
        name: "Feed",
        icon: <HomeIcon />,
        pathname: "/feed",
    },
    {
        id: 1,
        name: "Discover",
        icon: <DisocoveryIcon />,
        pathname: "/categories",
    },
    {
        id: 2,
        name: "Search",
        icon: <SearchIcon />,
        pathname: "/search",
    },
    {
        id: 3,
        name: "",
        icon: <NotificationBellIcon />,
        pathname: "/notifications",
    },
]
