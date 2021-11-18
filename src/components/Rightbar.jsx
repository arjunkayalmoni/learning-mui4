import {
	Avatar,
	Container,
	makeStyles,
	Typography,
	Link,
	ImageList,
	ImageListItem,
	Divider,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";


const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(10),
		position: "sticky",
		top: 0,
	},
	title: {
		fontSize: 16,
		fontWeight: 500,
		color: "#555",
	},
	link: {
		marginRight: theme.spacing(2),
		color: "#555",
		fontSize: 16,
	},
	avatarGroup: {
		marginBottom: theme.spacing(10),
	},
}));

export const Rightbar = () => {
	const classes = useStyles();

	return (
		<Container className={classes.container}>
			<Typography>Online Friends</Typography>
			<AvatarGroup max={6} className={classes.avatarGroup}>
				<Avatar
					alt="Cindya"
					src="https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
				/>
				<Avatar
					alt="Johny"
					src="https://images.pexels.com/photos/5486199/pexels-photo-5486199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				/>
				<Avatar
					alt="Diana"
					src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				/>
				<Avatar
					alt="Christina"
					src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				/>
				<Avatar
					alt="Cindya"
					src="https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
				/>
				<Avatar
					alt="Albert"
					src="https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				/>
				<Avatar
					alt="Remy Sharp"
					src="https://mui.com/static/images/avatar/1.jpg"
				/>
				<Avatar
					alt="Travis Howard"
					src="https://mui.com/static/images/avatar/2.jpg"
				/>
				<Avatar
					alt="Cindy Baker"
					src="https://mui.com/static/images/avatar/3.jpg"
				/>
				<Avatar alt="Agnes Walker" src="" />
				<Avatar
					alt="Trevor Henderson"
					src="https://mui.com/static/images/avatar/6.jpg"
				/>
				<Avatar
					alt="Trevor Henderson"
					src="https://mui.com/static/images/avatar/7.jpg"
				/>
				<Avatar
					alt="Trevor Henderson"
					src="https://mui.com/static/images/avatar/8.jpg"
				/>
			</AvatarGroup>
			<Typography className={classes.title} gutterBottom>
				Gallery
			</Typography>
			<ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
				<ImageListItem>
					<img
						src="https://mui.com/static/images/image-list/breakfast.jpg"
						alt=""
					/>
				</ImageListItem>
				<ImageListItem>
					<img
						src="https://mui.com/static/images/image-list/burgers.jpg"
						alt=""
					/>
				</ImageListItem>
				<ImageListItem>
					<img
						src="https://mui.com/static/images/image-list/camera.jpg"
						alt=""
					/>
				</ImageListItem>
				<ImageListItem>
					<img
						src="https://mui.com/static/images/image-list/morning.jpg"
						alt=""
					/>
				</ImageListItem>
				<ImageListItem>
					<img
						src="https://mui.com/static/images/image-list/hats.jpg"
						alt=""
					/>
				</ImageListItem>
				<ImageListItem>
					<img
						src="https://mui.com/static/images/image-list/vegetables.jpg"
						alt=""
					/>
				</ImageListItem>
			</ImageList>
			<Typography className={classes.title} gutterBottom>
				Categories
			</Typography>
			<Link href="#" className={classes.link} variant="body2">
				Sport
			</Link>
			<Link href="#" className={classes.link} variant="body2">
				Food
			</Link>
			<Link href="#" className={classes.link} variant="body2">
				Music
			</Link>
			<Divider flexItem style={{ marginBottom: 5 }} />
			<Link href="#" className={classes.link} variant="body2">
				Movies
			</Link>
			<Link href="#" className={classes.link} variant="body2">
				Science
			</Link>
			<Link href="#" className={classes.link} variant="body2">
				Life
			</Link>
		</Container>
	);
};
