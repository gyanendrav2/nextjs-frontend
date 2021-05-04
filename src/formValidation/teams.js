import * as yup from "yup"

export const addTeamForm = yup.object().shape({
    name: yup.string().required("name is required"),
    jobRole: yup.string().required("Job role is required"),
    email: yup.string().email().required("Email is required"),
})
