import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './login.css';

const Login = ({ token, setToken }) => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const handleSubmit = (event) => {
		event.preventDefault();
		axios({
			method: 'POST',
			url: 'http://localhost:8000/token/login',
			data: user,
		})
			.then((res) => {
				setToken(res.data.auth_token);
				if (res.data.auth_token) {
					window.location.href = '/';
				} else {
					console.log(res.data);
				}
			})
			.catch(console.error);
	};
	const handleChange = (event) => {
		event.preventDefault();
		setUser({ ...user, [event.target.name]: event.target.value });
	};
	return (
		<div className='login-form'>
			<p>Hello from inside the Login form</p>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId='formBasicEmail'>
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
				<Form.Group controlId='formBasicCheckbox'>
					<Form.Check type='checkbox' label='Check me out' />
				</Form.Group>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default Login;
