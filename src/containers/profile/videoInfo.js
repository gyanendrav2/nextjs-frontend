import React, { useState } from "react"
import PropTypes from "prop-types"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import classnames from "classnames"
import { colors } from "../../theme/colors"
import { UserProfileRow } from "../../components/cards/userProfileRow"
import { MoreMemberModel } from "../project/moreMemberModel"
import { useRouter } from "next/router"

const useStyles = makeStyles({
    profileWrapper: {
        padding: "1.875rem 3rem 2.5rem 8.75rem",
        marginBottom: "6.937rem",
        "@media (max-width:1024px)": {
            padding: "1.875rem 3rem 0rem 2rem",
            marginBottom: 0,
        },
        "@media (max-width:767px)": {
            padding: "1rem 0rem 0rem 1rem",
        },
    },
    bigTitle: {
        fontFamily: "Helvetica",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "2.5rem",
        lineHeight: "3.25rem",
        maxWidth: "29rem",
        marginBottom: "1.5rem",
        "@media(max-width:1024px)": {
            maxWidth: "100%",
            marginBottom: "1rem",
        },
        "@media (max-width:767px)": {
            fontSize: "2.187rem",
            lineHeight: "3.25rem",
            maxWidth: "21.437rem",
            marginBottom: "1rem",
        },
    },
    teamTitle: {
        fontFamily: "Helvetica",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "1.375rem",
        lineHeight: "2.125rem",
        marginBottom: "0.5rem",
        "@media (max-width:1024px)": {
            marginTop: "2.5rem",
        },
        "@media (max-width:767px)": {
            marginTop: "2rem",
        },
    },
    info: {
        maxWidth: "100%",
        "@media (max-width:767px)": {
            marginTop: "1rem",
        },
    },
    infoYear: {
        maxWidth: "100%",
        "@media (max-width:767px)": {
            marginTop: "1rem",
        },

    },
    infoTextHead: {
        fontSize: "1.375rem",
        color: colors.black,
    },
    infoText: {
        color: colors.black,
        marginTop: "0.5rem",
    },

    teamWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        position: "relative",
    },
    activeMember: {
        cursor: "pointer",
        textDecoration: "underline",
        "@media (max-width: 1024px)": {
            marginBottom: "2.5rem",
        },
    },
    moreView: {
        position: "relative",
    },
    underlineStyle: {
        marginBottom: "1.5rem",
        textDecoration: "underline",
        cursor:"pointer",
    },
})

const VideoInfo = ({ teamMemberData }) => {
    const classes = useStyles()
    const [maxShow, setMaxShow] = useState(false)
    const routes = useRouter()

    const handleRoute = () =>{
        routes.push("/categories")
    }

    return (
        <Grid container className={classes.profileWrapper}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <Typography className={classes.bigTitle}>
                    SiR - Hair Down (Official Video) ft. Kendrick Lamar
                </Typography>
                <Grid container>
                    <Grid item className={classes.info} xs={12} sm={12} md={6} lg={6}>
                        <Typography className={classes.infoTextHead}>Category:</Typography>
                        <Typography className={classnames(classes.underlineStyle, classes.infoText)} onClick={handleRoute}>
                            Directing
                        </Typography>
                        <Grid className={classes.info} item xs={12} sm={12} md={6} lg={6}>
                            <Typography className={classes.infoTextHead}>Client:</Typography>
                            <Typography className={classes.infoText}>SiR, Top Dog Entertainment</Typography>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.infoYear} xs={12} sm={12} md={6} lg={6}>
                        <Typography className={classes.infoTextHead}>Year</Typography>
                        <Typography className={classes.infoText}>2019</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} container className={classes.teamWrapper}>
                <Typography className={classes.teamTitle}>Team</Typography>
                {teamMemberData.slice(0, 5).map((item, i) => (
                    <UserProfileRow
                        key={i}
                        image={item.image}
                        name={item.memberName}
                        isDisable={item.isDisable}
                        position={item.position}
                        col1Size={6}
                        col2Size={6}
                    />
                ))}
                <Box className={classes.moreView}>
                    <Typography className={classes.activeMember} onClick={() => setMaxShow(true)}>
                        + 15 more members
                    </Typography>
                    {maxShow && (
                        <MoreMemberModel
                            onClose={() => setMaxShow(false)}
                            data={teamMemberData.slice(6, teamMemberData.length)}
                        />
                    )}
                </Box>
            </Grid>
        </Grid>
    )
}

VideoInfo.propTypes = {
    teamMemberData: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string,
            memberName: PropTypes.string,
            isDisable: PropTypes.bool,
            position: PropTypes.string,
        })
    ).isRequired,
}

export default VideoInfo
