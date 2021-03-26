import * as yup from "yup"

export const forgetFormValidation = yup.object().shape({
    email: yup.string().email().required("Email is required"),
})
