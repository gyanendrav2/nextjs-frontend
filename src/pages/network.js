import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import classnames from "classnames"
import { CustomButton } from "../components/buttons/customButton"
import { ContentWrapper } from "../components/contentWrapper/contentWrapper"
import { HeaderWrapper } from "../components/header/headerWrapper"
import { colors } from "../theme/colors"
import { InputWithLabelIcon } from "../components/inputs/inputWithLabelIcon"
import { CardWithHeader } from "../components/cards/cardWithHeader"
import { images } from "../assets/images"
import { useRouter } from "next/router"

const useStyles = makeStyles({
    wrapper: {
        paddingTop: "7.5rem",
    },
    heading: {
        fontSize: "3.125rem",
        lineHeight: "3.625rem",
        fontWeight: 700,
        fontFamily: "Forno-Trial",
        color: colors.black,
        textAlign: "center",
        marginBottom: "2rem",
    },
    buttonGroup: {
        border: `1px solid ${colors.lightGray}`,
        maxWidth: "19.125rem",
    },
    button: {
        height: "2.5rem",
        backgroundColor: colors.white,
        color: colors.black,
    },
    borderRight: {
        borderRight: `1px solid ${colors.lightGray}`,
    },
    searchBtn: {
        width: "6.187rem",
    },
    searchContainer: {
        width: "27.375rem",
    },
    active: {
        backgroundColor: colors.lighterPrimary,
    },
})

const Network = () => {
    const classes = useStyles()
    const { query } = useRouter()
    const { tab } = query
    return (
        <Box>
            <HeaderWrapper isScrollDetect={false} isAuthenticated feed />
            <ContentWrapper externalclass={classes.wrapper}>
                <Typography className={classes.heading}>Network</Typography>
                <Grid container alignItems="center" justify="space-between">
                    <Box className={classes.buttonGroup}>
                        <CustomButton
                            label="Following (15)"
                            externalclass={classnames(classes.button, classes.borderRight, {
                                [classes.active]: tab === "following",
                            })}
                        />
                        <CustomButton
                            label="Followers (25)"
                            externalclass={classnames(classes.button, {
                                [classes.active]: tab === "followers",
                            })}
                        />
                    </Box>
                    <Grid container alignItems="center" wrap="nowrap" className={classes.searchContainer}>
                        <Box style={{ width: "100%" }}>
                            <InputWithLabelIcon hideErrorMsg placeholder="Search users" />
                        </Box>
                        <CustomButton label="Search" externalclass={classes.searchBtn} />
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginTop: "2.5rem" }}>
                    <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                        <CardWithHeader
                            image={images.masorny1}
                            title="Brandon Landing"
                            buttonText="Following"
                            subTitle="Director assistant"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                        <CardWithHeader
                            image={images.masorny1}
                            title="Brandon Landing"
                            buttonText="Following"
                            subTitle="Director assistant"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                        <CardWithHeader
                            image={images.masorny1}
                            title="Brandon Landing"
                            buttonText="Following"
                            subTitle="Director assistant"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                        <CardWithHeader
                            image={images.masorny1}
                            title="Brandon Landing"
                            buttonText="Following"
                            subTitle="Director assistant"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                        <CardWithHeader
                            image={images.masorny1}
                            title="Brandon Landing"
                            buttonText="Following"
                            subTitle="Director assistant"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                        <CardWithHeader
                            image={images.masorny1}
                            title="Brandon Landing"
                            buttonText="Following"
                            subTitle="Director assistant"
                        />
                    </Grid>
                </Grid>
            </ContentWrapper>
        </Box>
    )
}

export default Network
