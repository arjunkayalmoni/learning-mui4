import React from 'react'
import
	{	Button,
		Card,
		CardActions,
		CardActionArea,
		CardContent,
		CardMedia,
		makeStyles,
		Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	// container: {
	// 	paddingTop: theme.spacing(10),
	// },
	card: {
		marginBottom: theme.spacing(5),
		[theme.breakpoints.down("sm")]: {
			marginBottom: theme.spacing(2),
		},
	},
	media: {
		height: 250,
		[theme.breakpoints.down("sm")]: {
			height: 150,
		},
	},
}));

export const Post = ({photo}) => {
	const classes = useStyles();
	console.log(photo.src.medium);

	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					className={ classes.media }
					image={ photo.src.large }
					title={ photo.id }
				/>
				<CardContent>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, accusantium ratione. Totam accusamus modi fugiat, quia fugit ipsa corrupti rerum atque, dolorem reprehenderit earum neque, laborum nemo id saepe ipsam!
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Share
				</Button>
				<Button size="small" color="primary">
					Learn More
				</Button>
			</CardActions>
		</Card>
		// <Card className={classes.root}>
		// 	<CardActionArea>
		// 		<CardMedia
		// 			className={classes.media}
		// 			title="My Post"
		// 			src="https://images.pexels.com/photos/217250/pexels-photo-217250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
		// 		/>
		// 		<CardContent>
		// 			<Typography variant="h5">{photo.photographer}</Typography>
		// 			<Typography>
		// 				Lorem ipsum dolor sit, amet consectetur adipisicing
		// 				elit. Esse velit, odio ex molestias id ut porro eos
		// 				sunt, iste odit delectus quia nam laudantium? Cupiditate
		// 				saepe nobis animi tenetur nihil.
		// 			</Typography>
		// 		</CardContent>
		// 	</CardActionArea>
		// </Card>
	);
};
