import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './postdetail.css';

const PostDetail = ({ match, userData, token }) => {
	const [post, setPost] = useState({});
	useEffect(() => {
		axios
			.get(`http://localhost:8000/posts/${match.params.post}`)
			.then((res) => {
				setPost(res.data);
			})
			.catch(console.error);
	}, []);
	const handleDelete = (event) => {
		event.preventDefault();
		axios({
			method: 'DELETE',
			url: `http://localhost:8000/posts/${match.params.post}`,
			headers: {
				Authorization: `token ${token}`,
			},
		});
	};
	return (
		<div className='detail'>
			<header>
				<img
					src='http://www.buildingfuturesinc.com/Building_Futures,_Inc./Welcome_files/DSC_0244.jpg'
					alt='post'
					className='post-photo'
				/>
				<br />
				<br />
				<h2>{post.title}</h2>
				<h6>{post.timestamp}</h6>
			</header>
			<main>
				<p>{post.body}</p>
				{post.author === userData.user_id && (
					<Button variant='danger' onClick={handleDelete}>
						Delete
					</Button>
				)}
			</main>
			<Link to='/posts'>
				<Button>Back to blog Homepage</Button>
			</Link>
		</div>
	);
};

export default PostDetail;
