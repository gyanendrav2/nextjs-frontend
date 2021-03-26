import * as yup from "yup"

export const signinFormValidation = yup.object().shape({
    email: yup.string().email().required("email is required"),
    password: yup.string().required("Password is required"),
})
