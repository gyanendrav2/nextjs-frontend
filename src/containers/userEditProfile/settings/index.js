// import { Box, Checkbox, Grid, makeStyles, Typography } from "@material-ui/core"
// import React from "react"
// import { CheckBoxIcon } from "../../../components/icons/checkBoxIcon"
// import { InputWithLabelIcon } from "../../../components/inputs/inputWithLabelIcon"
// import { colors } from "../../../theme/colors"

// const useStyles = makeStyles({
//     wrapper: {
//         backgroundColor: colors.lightGray,
//     },
//     profileCard: {
//         backgroundColor: colors.white,
//     },
//     NotificationContainer: {
//         backgroundColor: colors.white,
//     },
//     radioboxWrapper: {
//         margin: "2rem 0 0 0",
//     },
//     radioboxContainer: {
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "center",
//     },
//     checkBoxStyles: {
//         "&.MuiIconButton-root": {
//             "&:hover": {
//                 backgroundColor: "unset",
//             },
//         },
//         "&.MuiIconButton-colorSecondary": {
//             "&:hover": {
//                 backgroundColor: "unset",
//             },
//         },
//     },
//     checkboxText: {
//         fontSize: "0.9rem",
//     },
// })
// export const Settings = () => {
//     const classes = useStyles()
//     return (
//         <Box className={classes.wrapper}>
//             <Typography>Settings</Typography>
//             <Grid container>
//                 <Grid item md={4} lg={4} xs={4}>
//                     <Typography>Profile</Typography>
//                     <Typography>Notifications</Typography>
//                     <Typography>Delete or deactivate account</Typography>
//                 </Grid>
//                 <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
//                     <Box className={classes.profileCard}>
//                         <Typography>Profile</Typography>
//                         <InputWithLabelIcon
//                             placeholder="Email"
//                             label="Account Email"
//                             name="username"
//                             // inputRegister={register}
//                             // errorMsg={errors.username}
//                             externalclass={classes.inputStyles}
//                         />
//                         <Typography>Change Password</Typography>
//                         <InputWithLabelIcon
//                             placeholder="Insert current password"
//                             // name="username"
//                             // inputRegister={register}
//                             // errorMsg={errors.username}
//                             externalclass={classes.inputStyles}
//                         />
//                         <InputWithLabelIcon
//                             placeholder="Insert new password"
//                             // name="username"
//                             // inputRegister={register}
//                             // errorMsg={errors.username}
//                             externalclass={classes.inputStyles}
//                         />
//                         <InputWithLabelIcon
//                             placeholder="Repeat new password"
//                             // name="username"
//                             // inputRegister={register}
//                             // errorMsg={errors.username}
//                             externalclass={classes.inputStyles}
//                         />
//                     </Box>
//                     <Box className={classes.NotificationContainer}>
//                         <Typography>Notifications</Typography>

//                         <Box className={classes.radioboxWrapper}>
//                             <Box className={classes.radioboxContainer}>
//                                 <Checkbox
//                                     className={classes.checkBoxStyles}
//                                     checkedIcon={<CheckBoxIcon />}
//                                     icon={<span className="icon-square" />}
//                                     inputProps={{ "aria-label": "checkbox with default color" }}
//                                     disableRipple
//                                 />
//                                 <Typography className={classes.checkboxText}>
//                                     Receive notifications on project likes
//                                 </Typography>
//                             </Box>
//                             <Box className={classes.radioboxContainer}>
//                                 <Checkbox
//                                     color="default"
//                                     disableRipple
//                                     className={classes.checkBoxStyles}
//                                     checkedIcon={<CheckBoxIcon />}
//                                     icon={<span className="icon-square" />}
//                                     inputProps={{ "aria-label": "checkbox with default color" }}
//                                 />
//                                 <Typography className={classes.checkboxText}>
//                                     Receive notifications on new followers
//                                 </Typography>
//                             </Box>
//                             <Box className={classes.radioboxContainer}>
//                                 <Checkbox
//                                     color="default"
//                                     disableRipple
//                                     className={classes.checkBoxStyles}
//                                     checkedIcon={<CheckBoxIcon />}
//                                     icon={<span className="icon-square" />}
//                                     inputProps={{ "aria-label": "checkbox with default color" }}
//                                 />
//                                 <Typography className={classes.checkboxText}>
//                                     Receive notifications on project participation requests
//                                 </Typography>
//                             </Box>
//                         </Box>
//                     </Box>

//                     <Box className={classes.deleteContainer}>
//                         <Typography>DELETE OR DEACTIVATE ACCOUNT</Typography>
//                         <Typography>
//                             Would you like to delete your PXL account? Deleting your account will remove all of your
//                             projects and data.
//                         </Typography>
//                     </Box>
//                 </Grid>
//             </Grid>
//         </Box>
//     )
// }
