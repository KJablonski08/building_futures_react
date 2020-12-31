import React, { useState } from 'react';
import { Button, Jumbotron, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiPlayCircle } from 'react-icons/bi';
import './home.css';

const Home = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			<Jumbotron id='build'>
				<Modal show={show} onHide={handleClose} id='modal'>
					<Modal.Body id='video-container'>
						<h2 id='walk-with-me'>When I Walk</h2>
						<video
							width='100%'
							controls
							src={process.env.PUBLIC_URL + '/media/when_i_walk.mp4'}></video>
						<Button onClick={handleClose} className='ml-auto'>
							Close
						</Button>
					</Modal.Body>
				</Modal>
				<div className='ctrbtm'>
					<button onClick={handleShow} className='text-center' id='play-btn'>
						<BiPlayCircle />
					</button>
					<h4>Watch Our Video</h4>
				</div>
			</Jumbotron>
			<Jumbotron id='about'>
				<div className='about'>
					<div class='box'>
						<i class='fas fa-quote-left fa2'></i>
						<div class='text'>
							<i class='fas fa-quote-right fa1'></i>
							<div>
								<p>
									Never doubt that a small group of thoughtful committed
									citizens can change the world. Indeed, it is the only thing
									that ever has
								</p>
								<p>-Margaret Mead</p>
								<Link to='/about' id='about-btn'>
									<Button variant='outline-light'>About Us</Button>
								</Link>
							</div>
						</div>
					</div>
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
