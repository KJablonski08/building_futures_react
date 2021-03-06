import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const PostForm = ({ token, userData, editPost }) => {
	let title = editPost ? editPost.title : '';
	let body = editPost ? editPost.body : '';
	const [post, setPost] = useState({
		author: userData.user_id,
		title: title,
		body: body,
	});
	const handleChange = (event) => {
		event.preventDefault();
		setPost({ ...post, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		axios({
			method: 'POST',
			url: 'https://building-futures-django.herokuapp.com/posts/',
			data: post,
			headers: {
				Authorization: `token ${token}`,
			},
		});
	};
	const handleEdit = (event) => {
		event.preventDefault();
		axios({
			method: 'PUT',
			url: `https://building-futures-django.herokuapp.com/posts/${editPost.id}/`,
			data: post,
			headers: {
				Authorization: `token ${token}`,
			},
		});
	};
	return (
		<div className='form'>
			<h2>Add A New Post</h2>
			<Form
				onSubmit={editPost ? handleEdit : handleSubmit}
				className='formContainer'>
				<Form.Group>
					<Form.Label htmlFor='title'>Title</Form.Label>
					<Form.Control
						type='title'
						name='title'
						onChange={handleChange}
						value={post.title}
						placeholder='Title of Post'
					/>
					<Form.Group>
						<Form.Label htmlFor='body'>Body</Form.Label>
						<Form.Control
							className='textinput'
							as='textarea'
							rows={3}
							name='body'
							onChange={handleChange}
							value={post.body}
							placeholder='Create your post here ...'
						/>
					</Form.Group>
				</Form.Group>

				<Button className='buttons' variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default PostForm;
