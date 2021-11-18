import React, { useState, useEffect } from 'react'

import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import { createClient } from "pexels";

import { Post } from "./Posts";

const akey = process.env.REACT_APP_PEXEL_AKEY;
const baseUrl = process.env.REACT_APP_BASE_URL;
const client = createClient(akey);
const query = "Nature";

const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(10),
	},
}));

export const Feeds = () =>
{
	const [photos, setPhotos] = useState([])
	const classes = useStyles();
	// function generatePhoto() {
	// 	client.photos.random().then((photo) => {
	// 		console.log(photo);
	// 		setPhotos(photo);
	// 	});
	// }
	const curatedPhotos = () => client.photos.curated({ per_page: 10 }).then(pics =>
	{
		console.log(pics.photos);
		setPhotos(pics.photos);
	})

	useEffect(() => {
		curatedPhotos();
	}, []);

	return (
		<Container className={classes.container}>
			{/* <Button onClick={curatedPhotos} variant="outlined">Fetch</Button> */}
			{photos.map((photo) => (
				<Post photo={photo} key={photo.id} />
			))}

			{/* {photos ? <Post photo={photos} /> : <h3>No photos yet</h3>} */}
		</Container>
	);
};
