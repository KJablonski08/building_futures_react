import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import './home.css';

const Home = () => {
	return (
		<div>
			<Jumbotron id='build'>
				<p>
					<Button variant='primary'>Learn more</Button>
				</p>
			</Jumbotron>
		</div>
	);
};

export default Home;
