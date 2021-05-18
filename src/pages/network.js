import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import React, { useState } from "react"
import classnames from "classnames"
import { useRouter } from "next/router"
import CustomButton from "../components/buttons/customButton"
import ContentWrapper from "../components/contentWrapper/contentWrapper"
import HeaderWrapper from "../components/header/headerWrapper"
import { colors } from "../theme/colors"
import { InputWithLabelIcon } from "../components/inputs/inputWithLabelIcon"
import { CardWithHeader } from "../components/cards/cardWithHeader"
import { networkData } from "../data/networks"

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
    const { query, push } = useRouter()
    const { tab } = query
    const [network, setNetwork] = useState(networkData)

    const handleSearch = (e) => {
        if (e.target.value === "") {
            setNetwork(networkData)
        } else {
            const data = networkData.filter((item) => {
                if (
                    String(item.name).toLocaleLowerCase().search(String(e.target.value).toLocaleLowerCase()) > -1 ||
                    String(item.position).toLocaleLowerCase().search(String(e.target.value).toLocaleLowerCase()) > -1
                ) {
                    return item
                }
                return null
            })
            const newData = data.filter((item) => item !== null)
            setNetwork(newData)
        }
    }

    return (
        <Box>
            <HeaderWrapper isScrollDetect={false} isAuthenticated feed />
            <ContentWrapper externalclass={classes.wrapper}>
                <Box>
                    <Typography className={classes.heading}>Network</Typography>
                    <Grid container alignItems="center" justify="space-between">
                        <Box className={classes.buttonGroup}>
                            <CustomButton
                                label="Following (15)"
                                externalclass={classnames(classes.button, classes.borderRight, {
                                    [classes.active]: tab === "following",
                                })}
                                onClick={() => push({ pathname: "/network", query: { tab: "following" } })}
                            />
                            <CustomButton
                                label="Followers (25)"
                                externalclass={classnames(classes.button, {
                                    [classes.active]: tab === "followers",
                                })}
                                onClick={() => push({ pathname: "/network", query: { tab: "followers" } })}
                            />
                        </Box>
                        <Grid container alignItems="center" wrap="nowrap" className={classes.searchContainer}>
                            <Box style={{ width: "100%" }}>
                                <InputWithLabelIcon hideErrorMsg placeholder="Search users" onChange={handleSearch} />
                            </Box>
                            <CustomButton label="Search" externalclass={classes.searchBtn} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} style={{ marginTop: "2.5rem" }}>
                        {network.map((item, i) => (
                            <Grid key={i} item xs={12} sm={12} md={3} lg={3} xl={3}>
                                <CardWithHeader
                                    image={item.image}
                                    title={item.name}
                                    buttonText={item.buttonText}
                                    subTitle={item.position}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </ContentWrapper>
        </Box>
    )
}

export default Network
