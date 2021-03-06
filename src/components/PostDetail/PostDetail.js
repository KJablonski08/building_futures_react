import React, { useState, useEffect } from 'react';
import { Button, Modal, Card } from 'react-bootstrap';
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
			<Card>
				<Card.Body>
					<Card.Title>{post.title}</Card.Title>
					<Card.Text>{post.body}</Card.Text>
				</Card.Body>
				{post.author === userData.user_id && (
					<Button
						variant='outline-danger'
						onClick={handleDelete}
						className='author-only'>
						Delete
					</Button>
				)}
				{post.author === userData.user_id && (
					<Button
						variant='outline-warning'
						onClick={handleShow}
						className='author-only'>
						Edit
					</Button>
				)}
				<Link to='/posts' className='text-center'>
					<Button>Back to blog Homepage</Button>
				</Link>
				<br />
			</Card>
		</div>
	);
};

export default PostDetail;
