import { Grid, Typography } from "@material-ui/core"
import React from "react"
import { icons } from "../../assets/icons"

const ReportContent = () => {
    return (
        <Grid container dispaly="flex" alignItems="center" justify="flex-start">
            <img src={icons.reportContentIcon} alt="" />
            <Typography style={{ cursor: "pointer" }}>Report user</Typography>
        </Grid>
    )
}

export default ReportContent
