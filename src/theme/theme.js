import { createMuiTheme } from "@material-ui/core";
import { colors } from "./colors";

const theme = createMuiTheme({
    typography: {
        fontFamily: "Helvetica",
        fontWeight: 300,
        fontStyle: "normal",
        color: colors.black
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
});

export default theme;
