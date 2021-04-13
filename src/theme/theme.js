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
        h5: {
            fontFamily: "Forno-Trial",
            fontHeight: "bold",
            fontSize: "1.375rem",
            lineHeight: "2.5rem",
            color: colors.black,
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
        MuiButtonBase: {
            // The properties to apply
            disableRipple: true, // No more ripple, on the whole application 💣!
        },
    },
})

export default theme
