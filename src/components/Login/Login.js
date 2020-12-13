import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import fbLogin from './services/fbLogin';
import googleLogin from './services/googleLogin';
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
			})
			.catch(console.error);
	};
	const handleChange = (event) => {
		event.preventDefault();
		setUser({ ...user, [event.target.name]: event.target.value });
	};
	const responseFacebook = async (response) => {
		let fbResponse = await fbLogin(response.accessToken);
		console.log(fbResponse);
		console.log(response);
	};

	const responseGoogle = async (response) => {
		let googleResponse = await googleLogin(response.accessToken);
		console.log(googleResponse);
		console.log(response);
	};

	return (
		<div className='login-form'>
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
				<Button variant='primary' type='submit'>
					Submit
				</Button>
				<br />
			</Form>
			<h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

			<FacebookLogin
				appId='<FACEBOOK APP ID>'
				fields='name,email,picture'
				callback={responseFacebook}
			/>
			<br />
			<br />

			<GoogleLogin
				clientId='<GOOGLE CLIENT ID>'
				buttonText='LOGIN WITH GOOGLE'
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
			/>
		</div>
	);
};

export default Login;
