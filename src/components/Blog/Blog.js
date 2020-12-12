import React, { useState, useEffect } from 'react';
import { Card, CardColumns, Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './blog.css';

const Blog = () => {
	let [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch('http://localhost:8000/posts/')
			.then((res) => res.json())
			.then((res) => {
				setPosts(res);
			})
			.catch(console.error);
	}, []);
	return (
		<div>
			<Jumbotron id='heading'>
				<h1>Blog Posts</h1>
				<br />
				<Button variant='outline-light'>New</Button>
			</Jumbotron>
			<div id='post-container'>
				<CardColumns>
					{posts.map((post, i) => {
						return (
							<Card key={i} id='post-card'>
								<Card.Header>{post.title}</Card.Header>
								<Card.Body>
									<Card.Title>{post.title}</Card.Title>
									<Card.Text id='date'>{post.timestamp}</Card.Text>
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
