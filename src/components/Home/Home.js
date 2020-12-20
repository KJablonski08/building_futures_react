import React, { useState } from 'react';
import { Button, Jumbotron, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			<Jumbotron id='build'>
				<Modal show={show} onHide={handleClose} id='modal'>
					<Modal.Header id='walk-with-me'>
						<Modal.Title>When I Walk</Modal.Title>
					</Modal.Header>
					<Modal.Body id='video-container'>
						<video
							width='100%'
							controls
							src={process.env.PUBLIC_URL + '/media/when_i_walk.mp4'}></video>
					</Modal.Body>
					<Modal.Footer id='walk-with-me'>
						<Button variant='secondary' onClick={handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
				<Button
					variant='primary'
					onClick={handleShow}
					class='text-center'
					id='play-btn'>
					Play ▶
				</Button>
			</Jumbotron>
			<Jumbotron id='about'>
				<h4 id='quote'>
					Never doubt that a small group of thoughtful committed citizens can
					change the world. Indeed, it is the only thing that ever has
				</h4>
				<p id='quote_citation'>-Margaret Mead</p>
				<Link to='about'>
					<Button variant='outline-dark'>About Us</Button>
				</Link>
				<div className='about'>
					<h4 id='quote'>
						Never doubt that a small group of thoughtful committed citizens can
						change the world. Indeed, it is the only thing that ever has
					</h4>
					<p id='quote_citation'>-Margaret Mead</p>
					<Link to='/about' id='about-btn'>
						<Button variant='outline-dark'>About Us</Button>
					</Link>
				</div>
			</Jumbotron>
			<Jumbotron id='contact'>
				<div className='contact'>
					<h2 id='contact'>Lets build something great together...</h2>
					<h4>Building Futures, Inc., PO Box 25171, Rochester, NY 14625</h4>
				</div>
			</Jumbotron>
		</div>
	);
};

export default Home;
