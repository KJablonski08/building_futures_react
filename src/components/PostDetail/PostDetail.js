import React, { useState, useEffect } from 'react';
import { Spinner, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './postdetail.css';

const PostDetail = ({ match }) => {
	const [post, setPost] = useState({});
	useEffect(() => {
		fetch(`http://localhost:8000/posts/${match.params.post}`)
			.then((res) => res.json())
			.then((res) => {
				setPost(res);
			})
			.catch(console.error);
	}, []);

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
			</main>
		</div>
	);
};

export default PostDetail;
