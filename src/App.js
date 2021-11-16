import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Person } from "@material-ui/icons";
import { Navbar } from "./components/Navbar";
import { Leftbar } from "./components/Leftbar";
import { Grid } from "@material-ui/core";
import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";

// const useStyles = makeStyles({
// 	root: {
// 		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
// 		border: 0,
// 		borderRadius: 3,
// 		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
// 		color: "white",
// 		height: 48,
// 		padding: "0 30px",
// 	},
// });

const useStyles = makeStyles((theme) => ({
	right: {
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
}));

function App() {
	const classes = useStyles();
	return (
		<div>
			<Navbar />
			<Grid container spacing={2}>
				<Grid item xs={2} sm={2} md={2}>
					<Leftbar />
				</Grid>
				<Grid item xs={10} sm={7} md={8}>
					<Feed />
				</Grid>
				<Grid item sm={3} md={2} classNam={classes.right}>
					<Rightbar />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
