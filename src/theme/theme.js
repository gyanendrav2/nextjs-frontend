import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    typography: {
        fontFamily: "Helvetica",
        fontWeight: 300,
        fontStyle: "normal",
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
});

export default theme;
