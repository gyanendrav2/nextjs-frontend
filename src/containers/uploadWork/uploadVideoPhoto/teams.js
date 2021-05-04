import { Box, Grid, makeStyles } from "@material-ui/core"
import React from "react"
import PropTypes from "prop-types"
import { UserProfileRow } from "../../../components/cards/userProfileRow"
import { DeleteIcon } from "../../../components/icons/deleteIcon"
import { InputWithLabelIcon } from "../../../components/inputs/inputWithLabelIcon"
import { colors } from "../../../theme/colors"
import { images } from "../../../assets/images"

const useStyles = makeStyles({
    deleteIconWrapper: {
        color: colors.pink,
    },
    input: {
        height: "2rem",
        maxWidth: "80%",
        "& input": {
            paddingTop: 0,
            paddingBottom: 0,
        },
    },
})

export const Teams = ({ data }) => {
    const classes = useStyles()
    return (
        <Grid container>
            {data.map((item) => (
                <>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <UserProfileRow image={images.masorny1} name={item.name} position={item.jobRole} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Grid container alignItems="center" wrap="nowrap">
                            <InputWithLabelIcon value={item.email} externalclass={classes.input} />
                            <Box className={classes.deleteIconWrapper}>
                                <DeleteIcon />
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
}
