import axios from "axios"

const proxy = "https://cors-anywhere.herokuapp.com/"
export const API = axios.create({
    baseURL: proxy + process.env.NEXT_PUBLIC_API_URL,
    headers: {
        Authentication: `token `,
    },
})

export const getUserInfo = () => {
    const userData = localStorage.getItem("userInfo")
    if (userData) {
        return JSON.stringify(userData)
    }

    return null
}
