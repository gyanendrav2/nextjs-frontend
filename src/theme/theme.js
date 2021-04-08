import { createMuiTheme } from "@material-ui/core"
import { colors } from "./colors"

const theme = createMuiTheme({
    typography: {
        fontFamily: "Helvetica",
        fontWeight: 300,
        fontStyle: "normal",
        color: colors.black,
        h4: {
            fontSize: "2rem",
            color: colors.black,
            lineHeight: "2.75rem",
            fontFamily: "Forno-Trial",
        },
        h6: {
            fontSize: "0.875rem",
            lineHeight: "1rem",
            textTransform: "uppercase",
            color: colors.lighterGray,
            fontWeight: 700,
        },
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
})

export default theme
