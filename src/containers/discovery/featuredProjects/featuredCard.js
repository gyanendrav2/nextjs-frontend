import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useRouter } from "next/router"
import { Box, Grid } from "@material-ui/core"
import PropTypes from "prop-types"
import { colors } from "../../../theme/colors"
import { QuickViewDailog } from "../../project/quickViewDailog"
import CardWithFooter from "../../../components/cards/cardWithFooter"

const useStyles = makeStyles({
    FeaturedProjectContainer: {
        display: "flex",
        flexDirection: "row",
        marginTop: "0.875rem",
    },
    projectContainer: {
        boxShadow: `0px 1px 1px ${colors.lightGray}`,
        flex: "1",
        display: "flex",
        flexDirection: "column",
        height: "100%",
    },
    projectImageContainer: {
        position: "relative",
    },
    projectImage: {
        display: "block",
    },
    image: {
        display: "block",
        width: "100%",
        height: "15rem",
        objectFit: "cover",
        transition: "all 0.5s",
        "&::before": {
            content: "",
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            background:
                "linear-gradient(0deg,#000000 0%,rgba(0, 0, 0, 0.8) 16.56%,rgba(0, 0, 0, 0.4) 32.46%, rgba(0, 0, 0, 0.2) 46.94%,rgba(0, 0, 0, 0) 100%);",
        },
    },
    ProjectTitle: {
        position: "absolute",
        bottom: "1rem",
        left: "1rem",
        color: colors.white,
        fontSize: "1rem",
        fontWeight: "500",
    },
    roundImage: {
        borderRadius: "50%",
        marginRight: "0.5rem",
        marginTop: "0.1rem",
        width: "2.625rem",
        height: "2.625rem",
    },
    projectAuthor_: {
        border: "1px solid rgba(0, 0, 0, 0.05)",
        display: "flex",
        padding: "0.75rem",
        flex: "1",
        height: "100%",
    },
    projectAuthorName: {
        fontSize: "1rem",
        color: colors.black,
    },
    projectAuthorJobTitle: {
        fontSize: "0.875rem",
        color: colors.lighterGray,
    },
    red: {
        background: "red",
    },
})
export const FeaturedCard = ({ featuredCardsDetails }) => {
    const classes = useStyles()
    const routes = useRouter()
    const [openModal, setOpenModal] = useState(false)

    const handleModelOpen = () => {
        setOpenModal(true)
        const element = document.querySelector(".discovery__wrapper")
        element.style = "overflow:hidden;height:100vh"
    }

    const handleModelClose = () => {
        const element = document.querySelector(".discovery__wrapper")
        element.style = "overflow:unset;height:unset"
        setOpenModal(false)
    }

    return (
        <Box>
            {openModal && <QuickViewDailog closeModal={handleModelClose} />}
            <Grid container className={classes.FeaturedProjectContainer} spacing={2}>
                {featuredCardsDetails &&
                    featuredCardsDetails.map((newData, idx) => {
                        return (
                            <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={idx}>
                                <CardWithFooter
                                    image={newData.image}
                                    title={newData.title}
                                    hideFooter={false}
                                    footerTitle={newData.author.name}
                                    footerSubitle={newData.author.jobTitle}
                                    handleClick={handleModelOpen}
                                    onFooterHeadingClick={() => routes.push("/user")}
                                />
                            </Grid>
                        )
                    })}
            </Grid>
        </Box>
    )
}

FeaturedCard.defaultProps = {
    featuredCardsDetails: [],
}

FeaturedCard.propTypes = {
    featuredCardsDetails: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string,
            title: PropTypes.string,
            category: PropTypes.string,
            author: PropTypes.shape({
                jobTitle: PropTypes.string,
                name: PropTypes.string,
            }),
        })
    ),
}
