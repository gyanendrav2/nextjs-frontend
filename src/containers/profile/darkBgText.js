import { Box, colors, Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles({
    fullWidthContent: {
        color: colors.white,
        paddingLeft: "16.875rem",
        paddingRight: "16.875rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        "& h3": {
            textAlign: "center",
            fontFamily: "Forno-Trial",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "3.125rem",
            lineHeight: "3.625rem",
            marginBottom: "2.5rem",
            marginTop: "7.5rem",
            "@media(max-width:992px)": {
                textAlign: "center",
                maxWidth: "27.25rem",
                fontSize: "2.5rem",
                lineHeight: "3rem",
                marginBottom: "0.7rem",
            },
        },
        "& p": {
            maxWidth: "27.25rem",
            fontFamily: "Helvetica",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "1rem",
            lineHeight: "2rem",
            marginBottom: "2rem",
        },
        "@media (max-width:992px)": {
            padding: "8rem",
            paddingLeft: "2rem",
        },
    },
})

const DarkBgText = () => {
    const classes = useStyles()
    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.fulldarkBg}>
                <Box className={classes.fullWidthContent}>
                    <Typography variant="h3">The writing itself</Typography>
                    <Box className={classes.paragraphContent}>
                        <Typography variant="p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book. It has survived not
                            only five centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <br />
                        <br />
                        <Typography variant="p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book. It has survived not
                            only five centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <br />
                        <br />
                        <Typography variant="p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book. It has survived not
                            only five centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum.
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default DarkBgText
