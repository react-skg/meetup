import createTheme from "spectacle/lib/themes/default";

export default const theme = createTheme({
  primary: "#4286f4",
  secondary: "blue"
}, {
  primary: "Helvetica",
  secondary: { name: "Droid Serif", googleFont: true, styles: [ "400", "700i" ] }
});
