import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { UserProfileRow } from "../../../components/cards/userProfileRow"
import { DeleteIcon } from "../../../components/icons/deleteIcon"
import { InputWithLabelIcon } from "../../../components/inputs/inputWithLabelIcon"
import { colors } from "../../../theme/colors"
import { images } from "../../../assets/images"

const useStyles = makeStyles({
    deleteIconWrapper: {
        color: colors.pink,
        "& svg": {
            cursor: "pointer",
        },
    },
    input: {
        height: "2rem",
        maxWidth: "13rem",
        "& input": {
            paddingTop: 0,
            paddingBottom: 0,
        },
    },
    inputWrapper: {
        paddingLeft: "30%",
    },
    title: {
        fontSize: "1.375rem",
        lineHeight: "2.125rem",
        color: colors.black,
        fontWeight: 400,
        marginBottom: "1rem",
        marginTop: "1.5rem",
    },
})

export const Teams = ({ data, handleDelete }) => {
    const classes = useStyles()
    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography className={classes.title}>Team</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography className={classnames(classes.title, classes.inputWrapper)}>Email invitation</Typography>
            </Grid>
            {data.map((item, i) => (
                <>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <UserProfileRow image={images.masorny1} name={item.name} position={item.jobRole} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Grid
                            container
                            alignItems="center"
                            justify="flex-end"
                            wrap="nowrap"
                            className={classes.inputWrapper}>
                            <InputWithLabelIcon value={item.email} externalclass={classes.input} />
                            <Box className={classes.deleteIconWrapper}>
                                <DeleteIcon onClick={() => handleDelete(i)} />
                            </Box>
                        </Grid>
                    </Grid>
                </>
            ))}
        </Grid>
    )
}

Teams.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({ name: PropTypes.string, jobRole: PropTypes.string, email: PropTypes.string })
    ).isRequired,

    handleDelete: PropTypes.func.isRequired,
}
