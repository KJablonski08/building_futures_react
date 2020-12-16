import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import googleLogin from './services/googleLogin';

class GoogleSocialAuth extends Component {
	render() {
		const responseGoogle = (response) => {
			console.log(response);
		};
		return (
			<div className='App'>
				<h1>LOGIN WITH GOOGLE</h1>

				<GoogleLogin
					clientId='859307977908-gplopdge0auvv0ve7jbmokogrb5bults.apps.googleusercontent.com'
					buttonText='LOGIN WITH GOOGLE'
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
				/>
			</div>
		);
	}
}

export default GoogleSocialAuth;
