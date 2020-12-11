import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './notFound.css';

const NotFound = () => {
	return (
		<div>
			<main id='meerkat'>
				<div id='notFound'>
					<h2>404</h2>
					<h5>Oh... hello</h5>
					<p>We can't seem to find the page you're looking for either</p>
					<Link to='/'>
						<Button variant='outline-light'>Back to Home</Button>
					</Link>
				</div>
				<span id='meerkat-cred'>
					Photo by:&nbsp;
					<a
						href='https://unsplash.com/@kirjava?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
						id='meerkat-cred'>
						Pierre-Yves Miguet
					</a>
					&nbsp;on&nbsp;
					<a
						href='https://unsplash.com/s/photos/meerkat?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
						id='meerkat-cred'>
						&nbsp;Unsplash
					</a>
				</span>
			</main>
		</div>
	);
};

export default NotFound;
