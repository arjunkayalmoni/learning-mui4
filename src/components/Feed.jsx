import { Container, makeStyles } from "@material-ui/core";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(10),
	},
}));

export const Feed = () => {
	const classes = useStyles();
	return (
		<Container className={classes.container}>
			<Post
				title="Choose the perfect design"
				img="https://images.pexels.com/photos/217250/pexels-photo-217250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100"
			/>
			<Post
				title="Simply Recipes Less Stress. More Joy"
				img="logo512.png"
			/>
			<Post
				title="What To Do In London"
				img="https://images.pexels.com/photos/7245535/pexels-photo-7245535.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
			/>
			<Post
				title="Recipes That Will Make You Crave More"
				img="https://images.pexels.com/photos/10243822/pexels-photo-10243822.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
			/>
			<Post
				title="Shortcut Travel Guide to Manhattan"
				img="https://images.pexels.com/photos/7078467/pexels-photo-7078467.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
			/>
			<Post
				title="Killer Actions to Boost Your Self-Confidence"
				img="https://images.pexels.com/photos/7833646/pexels-photo-7833646.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
			/>
		</Container>
	);
};
