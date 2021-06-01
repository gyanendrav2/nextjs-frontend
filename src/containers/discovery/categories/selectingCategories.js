import React, { useEffect, useState } from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import PropTypes from "prop-types"
import classnames from "classnames"
import CustomButton from "../../../components/buttons/customButton"
import { Categories } from "./categories"
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
        marginRight: "1rem",
        marginLeft: 0,
        "& span": {
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
        "@media (min-width:768px) and (max-width:1024px)": {
            marginBottom: "1.187rem",
            maxWidth: "100%",
            width: "calc(25% - 0.75rem)",
            "&:nth-child(4n)": {
                marginRight: 0,
            },
        },
        "@media (max-width:767px)": {
            maxWidth: "100%",
            width: "calc(50% - 0.25rem)",
            display: "flow-root",
            marginBottom: "1rem",
            marginRight: "0.5rem",
            "& span": {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
            },
            "&:nth-child(even)": {
                marginRight: 0,
            },
        },
    },
    moreButton: {
        height: "2.5rem",
        marginRight: "0.5rem",
        marginLeft: 0,
        "@media  (max-width:767px)": {
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
        position: "absolute",
        right: 0,
        "@media (max-width:475px)": {
            marginLeft: "auto",
            position: "relative",
            padding: "1rem 0",
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
        "@media (min-width: 476px) and (max-width:1200px)": {
            width: "100%",
            paddingRight: "0.5rem",
            marginTop: "0.5rem",
            marginBottom: "2rem",
        },
    },
    disableButton: {
        opacity: 0.5,
    },
})
export const SelectingCategories = ({ changeTab, category, categories, onFilter }) => {
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

    useEffect(() => {
        onFilter(showFilter)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showFilter])

    const handleShowMore = () => {
        setShowOtherCategories(!showOtherCategories)
    }

    const handleActiveButton = (eachBtn) => {
        changeTab(eachBtn)
        setActiveCategory(eachBtn)
    }

    return (
        <Box style={{ height: showCategories.length ? "unset" : "4.5rem" }}>
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
                    externalclass={classnames(classes.moreButton, { [classes.activeButton]: showOtherCategories })}
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
    onFilter: PropTypes.func.isRequired,
}
