import * as yup from "yup"

export const resetFormValidation = yup.object().shape({
    code: yup.string().required("confirmation code is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
    confirmpassword: yup.string().required("Confirm password is required"),
})
