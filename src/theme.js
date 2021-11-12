import { createTheme } from "@material-ui/core";
import { blue, purple } from "@material-ui/core/colors";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#202E3A",
		},
		secondary: {
			main: "#15202B",
		},
	},
	flowerButton: {
		backgroundColor: "orange",
		color: "white",
		border: "1px solid black",
	},
	myButton: {
		backgroundColor: "red",
		color: "white",
		border: "1px solid black",
	},
});
