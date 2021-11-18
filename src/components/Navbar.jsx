import { useState } from "react";

import {
	alpha,
	AppBar,
	Avatar,
	Badge,
	InputBase,
	makeStyles,
	Toolbar,
	Typography,
} from "@material-ui/core";
import {
	Mail,
	Notifications,
	Search,
	SearchOutlined,
} from "@material-ui/icons";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";

const useStyles = makeStyles((theme) => ({
	appBar: {
		position: "fixed",
		paddingTop: '1px'
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
	},
	lgoLg: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	lgoSm: {
		display: "block",
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	Search: {
		display: "flex",
		alignItems: "center",
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		paddingLeft: theme.spacing(1),
		marginLeft: 0,
		width: "50%",
		[theme.breakpoints.down("sm")]: {
			display: (props) => (props.isOpen ? "flex" : "none"),
		},
	},
	input: {
		color: "white",
		marginLeft: theme.spacing(1),
		width: "100%",
	},
	searchButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	icons: {
		display: "flex",
		alignItems: "center",
		[theme.breakpoints.down("sm")]: {
			display: (props) => (props.isOpen ? "none" : "flex"),
		},
	},
	badge: {
		marginRight: theme.spacing(2),
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
	cancel: {
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
}));

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const classes = useStyles({ isOpen });

	return (
		<AppBar position="static" className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<Typography variant="h6" className={classes.lgoLg}>
					Web Admin
				</Typography>
				<Typography variant="h6" className={classes.lgoSm}>
					Mobile Admin
				</Typography>
				<div className={classes.Search}>
					<Search />
					<InputBase
						placeholder="Search....."
						className={classes.input}
					/>
					<CancelOutlinedIcon
						onClick={() => setIsOpen(false)}
						className={classes.cancel}
					/>
				</div>
				<div className={classes.icons}>
					<SearchOutlined
						className={classes.searchButton}
						onClick={() => setIsOpen(true)}
					/>
					<Badge
						badgeContent={4}
						color="secondary"
						className={classes.badge}
					>
						<Mail />
					</Badge>
					<Badge
						badgeContent={2}
						color="secondary"
						className={classes.badge}
					>
						<Notifications />
					</Badge>
					<Avatar
						alt="logged in user"
						src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					/>
				</div>
			</Toolbar>
		</AppBar>
	);
};
