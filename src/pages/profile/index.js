import React from "react";
import PropTypes from "prop-types";
import ContentWrapper from "../../components/contentWrapper/contentWrapper";
import HeaderWrapper from "../../components/header/headerWrapper";
import { Grid, makeStyles } from "@material-ui/core";
import UserProfileCard from "../../components/cards/userProfileCard";
import { images } from "../../assets/images";
import ReactPlayer from "react-player";
import classNames from "classnames";
import CardWithFooter from "../../components/cards/CardWithFooter";
import Footer from "../../components/footer";

const useStyles = makeStyles({
    wrapper: {
        paddingTop: "7rem",
    },
});

const Profile = () => {
    const classes = useStyles();
    return (
        <>
            <HeaderWrapper isScrollDetect={false} />

            <ContentWrapper externalClass={classes.wrapper}>
                <Grid container spacing={2}>
                    <Grid item sx={5} sm={5} md={5} lg={5} xl={5}>
                        <UserProfileCard
                            image={images.maskGroup}
                            name="Brandon Landing"
                            userName="@veritas_z"
                            followers="15"
                            following="20"
                            position="Director assistant, producer"
                            location="USA, Ohio"
                            bio="I’m this awesome and cool as hell director from the states. Producing is my other passion. "
                        />
                    </Grid>
                    <Grid item sx={7} sm={7} md={7} lg={7} xl={7}>
                        <ReactPlayer
                            width="100%"
                            height="30rem"
                            controls
                            // style={{ width: "100%", height: "30rem" }}
                            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    {[1,1,1,1,1,1,1,1].map((newData, idx) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                                <CardWithFooter
                                    image={images.maskGroup}
                                    title={"dummy data"}
                                    hideFooter={true}
                                    handleClick={() => {
                                        setOpenModal(true);
                                    }}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </ContentWrapper>
            <Footer/>
        </>
    );
};

Profile.propTypes = {};

export default Profile;
