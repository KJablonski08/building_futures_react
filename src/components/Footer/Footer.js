import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = ({ token, setToken }) => {
	const logout = () => {
		setToken = '';
	};
	return (
		<div className='footer'>
			<Navbar bg='dark' variant='dark'>
				<Nav className='mr-auto social-links'>
					<Nav.Link>
						<Link to='/login'>Login</Link>
					</Nav.Link>
				</Nav>
				<div className='social-links'>
					<p>Follow Us</p>
					<ul className='socials'>
						<li>
							<a href='https://www.facebook.com/Building-Futures-Inc-205596549460078'>
								Facebook
							</a>
						</li>
						<li>
							<a href='https://www.instagram.com/isaackasura/'>Instagram</a>
						</li>
					</ul>
				</div>
				{/* <Form inline>
					<FormControl type='text' placeholder='Search' className='mr-sm-2' />
					<Button variant='outline-info'>Search</Button>
				</Form> */}
			</Navbar>
		</div>
	);
};

export default Footer;
