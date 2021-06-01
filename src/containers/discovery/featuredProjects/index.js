import React, { useEffect, useState } from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import PropTypes from "prop-types"
import classnames from "classnames"
import CustomButton from "../../../components/buttons/customButton"
import { Categories } from "../categories/categories"
import { colors } from "../../../theme/colors"
import { Filter } from "../../../components/filter"
import { FilterIcon } from "../../../components/icons/filterIcon"

const useStyles = makeStyles({
    projectButtonContainer: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        position: "relative",
        width: "100%",
        "@media (min-width:768px) and (max-width:1024px)": {
            justifyContent: "flex-start",
        },
        "@media (max-width:767px)": {
            justifyContent: "flex-start",
        },
    },
    eachButton: {
        alignTtems: "center",
        margin: "1.25rem 0 1.25rem 1rem",
        "@media (max-width:567px)": {
            margin: "0.75rem 0 0.75rem 1rem",
        },
    },
    projectButton: {
        height: "2.5rem",
        marginRight: "0.5rem",
        marginLeft: 0,
        "@media (min-width: 768px) and (max-width:1024px)": {
            marginBottom: "0.5rem",
        },
        "@media (max-width:475px)": {
            width: "calc(50% - 0.25rem)",
            display: "flow-root",
            "& span": {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
            },
            "&:nth-child(even)": {
                marginRight: 0,
            },
        },
        "@media (min-width:476px) and (max-width:767px)": {
            width: "calc(25% - 0.5rem)",
            display: "flow-root",
            "& span": {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
            },
        },
    },
    moreButton: {
        height: "2.5rem",
        marginBottom: "0.5rem",
        marginRight: "0.5rem",
        marginLeft: 0,
        "@media (max-width:475px)": {
            width: "100%",
            marginRight: 0,
        },
    },
    activeButton: {
        backgroundColor: colors.pink,
        color: colors.black,
    },
    moreIcon: {
        fontSize: "1.2rem",
    },
    filterContainer: {
        minWidth: "5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: "0.5rem",
        position: "absolute",
        right: 0,
        "@media (max-width:475px)": {
            marginLeft: "auto",
            position: "relative",
        },
        "@media (max-width: 1200px)": {
            position: "relative",
            maxWidth: "6rem",
            marginLeft: "auto",
        },
    },

    filterText: {
        color: colors.black,
        textAlign: "center",
        marginRight: "1rem",
    },
    filterWrapper: {
        "@media (max-width:475px)": {
            paddingRight: 0,
            width: "100%",
        },
        "@media (min-width: 476px) and (max-width:1024px)": {
            width: "100%",
            paddingRight: "0.5rem",
            marginTop: "1.5rem",
        },
    },
    disableButton: {
        opacity: 0.5,
    },
})
export const SelectingCategories = ({ changeTab, category, categories }) => {
    const classes = useStyles()
    const [showCategories, setShowCategories] = useState([])
    const [showOtherCategories, setShowOtherCategories] = useState(false)
    const [extraCategories, setExtraCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState("")
    const [showFilter, setShowFilter] = useState(false)

    useEffect(() => {
        if (categories && categories.length >= 6) {
            setShowCategories(categories.slice(0, 6))
            setExtraCategories(categories.slice(6, categories.length))
        } else {
            setShowCategories(categories)
        }
    }, [categories])

    const handleShowMore = () => {
        setShowOtherCategories(!showOtherCategories)
    }

    const handleActiveButton = (eachBtn) => {
        changeTab(eachBtn)
        setActiveCategory(eachBtn)
    }

    return (
        <Box>
            <Box className={classes.projectButtonContainer}>
                {showCategories &&
                    showCategories.map((eachBtn, i) => (
                        <CustomButton
                            key={i}
                            label={eachBtn}
                            externalclass={classnames(classes.projectButton, {
                                [classes.activeButton]: eachBtn === activeCategory,
                                [classes.disableButton]: showOtherCategories,
                            })}
                            onClick={() => handleActiveButton(eachBtn, i)}
                        />
                    ))}
                <CustomButton
                    label={
                        <>
                            <MoreVertIcon className={classes.moreIcon} />
                            <Box>More</Box>
                        </>
                    }
                    externalclass={classnames(classes.moreButton)}
                    onClick={handleShowMore}
                />
                {showOtherCategories && (
                    <Categories
                        categories={extraCategories}
                        activeButton={activeCategory}
                        handleClick={handleShowMore}
                        onClick={handleActiveButton}
                    />
                )}
                {category && (
                    <Box className={classes.filterWrapper}>
                        <Box className={classes.filterContainer}>
                            <Typography className={classes.filterText}>Filter</Typography>
                            <CustomButton
                                variant="iconButton"
                                icon={<FilterIcon />}
                                onClick={() => setShowFilter(!showFilter)}
                            />
                        </Box>
                    </Box>
                )}
            </Box>
            {showFilter && <Filter />}
        </Box>
    )
}

SelectingCategories.defaultProps = {
    category: "",
}

SelectingCategories.propTypes = {
    changeTab: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    category: PropTypes.string,
}
