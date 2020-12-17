import React, { useState, useEffect } from 'react';
import { Card, CardColumns, Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import './blog.css';

const Blog = ({ loggedIn }) => {
	let [posts, setPosts] = useState([]);
	useEffect(() => {
		axios
			.get('https://building-futures-django.herokuapp.com/posts/')
			.then((res) => {
				setPosts(res.data);
			})
			.catch(console.error);
	}, []);
	console.log(posts);
	return (
		<div>
			<Jumbotron id='heading'>
				<h1>Blog Posts</h1>
				<br />
				{loggedIn && (
					<Link to='posts/new'>
						<Button>New</Button>
					</Link>
				)}
			</Jumbotron>
			<div id='post-container'>
				<CardColumns>
					{posts.map((post, i) => {
						return (
							<Card key={i} id='post-card'>
								<Card.Img
									variant='top'
									src='http://www.buildingfuturesinc.com/Building_Futures,_Inc./Trip_Photos/Pages/Masai_Mara_files/Media/AEJ_3825/AEJ_3825.jpg?disposition=download'
								/>
								<Card.Body>
									<Card.Title>{post.title}</Card.Title>
									<Card.Text id='date'>
										{moment(post.timestamp).format('LLL')}
									</Card.Text>
									<Card.Text>{post.body.substring(0, 100)}...</Card.Text>
									<Link to={`/posts/${post.id}`}>
										<Button variant='primary'>Read More →</Button>
									</Link>
								</Card.Body>
							</Card>
						);
					})}
				</CardColumns>
			</div>
		</div>
	);
};

export default Blog;
