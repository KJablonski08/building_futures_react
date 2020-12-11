import React, { useState } from 'react';
import { Button, Jumbotron, Modal } from 'react-bootstrap';
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
				<p id='play'>
					<Button variant='primary' onClick={handleShow} id='play-btn'>
						Play
					</Button>
				</p>
			</Jumbotron>
		</div>
	);
};

export default Home;
