import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './postform.css';

const PostForm = ({ token }) => {
	const [post, setPost] = useState({
		author: '',
		title: '',
		body: '',
	});
	const handleChange = (event) => {
		event.preventDefault();
		setPost({ ...post, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		axios({
			method: 'POST',
			url: 'http://localhost:8000/posts/',
			data: post,
			headers: {
				Authorization: `token ${token}`,
			},
		});
	};
	return (
		<div className='form'>
			<h2>Add A New Post</h2>
			<Form onSubmit={handleSubmit} className='formContainer'>
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
					<Form.Label htmlFor='author'>Author</Form.Label>
					<Form.Control
						type='author'
						name='author'
						onChange={handleChange}
						value={post.author}
						placeholder='Author foreign key'
					/>
				</Form.Group>

				<Button className='buttons' variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default PostForm;
