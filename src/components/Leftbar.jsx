import { Container, makeStyles, Typography } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import TimelineOutlinedIcon from "@material-ui/icons/TimelineOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import FeedbackOutlinedIcon from "@material-ui/icons/FeedbackOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(10),
		backgroundColor: theme.palette.primary.main,
		height: "100vh",
		color: "white",
		position: "fixed",
		width: "auto",
		[theme.breakpoints.up("sm")]: {
			backgroundColor: "white",
			color: "#555",
			border: "1px solid #ece7e7",
		},
	},
	item: {
		display: "flex",
		// flexDirection: "row",
		alignItems: "center",
		marginBottom: theme.spacing(4),
		[theme.breakpoints.up("sm")]: {
			marginBottom: theme.spacing(3),
			cursor: "pointer",
		},
	},
	text: {
		fontWeight: 500,
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
	icon: {
		marginRight: theme.spacing(1),
		[theme.breakpoints.up("sm")]: {
			fontSize: "18px",
		},
	},
}));

export const Leftbar = () => {
	const classes = useStyles();

	return (
		<Container className={classes.container}>
			<div className={classes.item}>
				<Home className={classes.icon} />
				<Typography className={classes.text}>Home</Typography>
			</div>
			<div className={classes.item}>
				<DashboardOutlinedIcon className={classes.icon} />
				<Typography className={classes.text}>Dashboard</Typography>
			</div>
			<div className={classes.item}>
				<EqualizerOutlinedIcon className={classes.icon} />
				<Typography className={classes.text}>Statistics</Typography>
			</div>
			<div className={classes.item}>
				<TimelineOutlinedIcon className={classes.icon} />
				<Typography className={classes.text}>Activity</Typography>
			</div>
			<div className={classes.item}>
				<SettingsOutlinedIcon className={classes.icon} />
				<Typography className={classes.text}>Settings</Typography>
			</div>
			<div className={classes.item}>
				<FeedbackOutlinedIcon className={classes.icon} />
				<Typography className={classes.text}>Feedback</Typography>
			</div>
			<div className={classes.item}>
				<ExitToAppOutlinedIcon className={classes.icon} />
				<Typography className={classes.text}>Logout</Typography>
			</div>
		</Container>
	);
};
