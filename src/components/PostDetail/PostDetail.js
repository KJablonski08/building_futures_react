import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PostForm from '../PostForm/PostForm';
import axios from 'axios';
import './postdetail.css';

const PostDetail = ({ match, userData, token }) => {
	const [post, setPost] = useState({});
	const [showModal, setShowModal] = useState(false);
	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);
	useEffect(() => {
		axios
			.get(
				`https://building-futures-django.herokuapp.com/posts/${match.params.post}`
			)
			.then((res) => {
				setPost(res.data);
			})
			.catch(console.error);
	}, []);
	const handleDelete = (event) => {
		event.preventDefault();
		axios({
			method: 'DELETE',
			url: `https://building-futures-django.herokuapp.com/posts/${match.params.post}`,
			headers: {
				Authorization: `token ${token}`,
			},
		});
	};
	return (
		<div className='detail'>
			{showModal && (
				<Modal
					show={handleShow}
					onHide={handleClose}
					backdrop='static'
					keyboard={false}>
					<div className='modal-form'>
						<h2>Edit this Post:</h2>
						<PostForm token={token} userData={userData} editPost={post} />
					</div>
				</Modal>
			)}
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
					<Button variant='outline-danger' onClick={handleDelete}>
						Delete
					</Button>
				)}
				{post.author === userData.user_id && (
					<Button variant='outline-warning' onClick={handleShow}>
						Edit
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
