import { API } from "../../utility/api"
import { endpoints } from "../../utility/endpoints"

export const loginUserAPIcall = (data) => {
    API.post(endpoints.users, data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
}
