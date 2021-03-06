import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './login.css';

const Login = ({ setToken, setUserData }) => {
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
	});
	const handleSubmit = (event) => {
		event.preventDefault();
		axios({
			method: 'POST',
			url: 'https://building-futures-django.herokuapp.com/api-token-auth/',
			data: user,
		})
			.then((res) => {
				setToken(res.data.token);
				setUserData({
					user_id: res.data.user_id,
					email: res.data.email,
					name: res.data.name,
				});
			})
			.catch(console.error);
	};
	const handleChange = (event) => {
		event.preventDefault();
		setUser({ ...user, [event.target.name]: event.target.value });
	};
	return (
		<div className='login-form'>
			<Form onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Label>Username (email address)</Form.Label>
					<Form.Control
						type='username'
						name='username'
						placeholder='Enter username'
						onChange={handleChange}
						value={user.username}
					/>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type='email'
						name='email'
						placeholder='Enter email'
						onChange={handleChange}
						value={user.email}
					/>
					<Form.Text className='text-muted'>
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>
				<Form.Group controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						name='password'
						placeholder='Password'
						onChange={handleChange}
						value={user.password}
					/>
				</Form.Group>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default Login;
