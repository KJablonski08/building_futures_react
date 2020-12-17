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
				<Nav className='mr-auto'>
					<Nav.Link>
						<Link to='/login'>Login</Link>
					</Nav.Link>
					<Nav.Link>Contact</Nav.Link>
				</Nav>
				<p>Follow Us</p>
				<Nav.Link href='https://www.facebook.com/Building-Futures-Inc-205596549460078'>
					Facebook
				</Nav.Link>
				<Nav.Link href='https://www.instagram.com/isaackasura/'>
					Instagram
				</Nav.Link>
				<Form inline>
					<FormControl type='text' placeholder='Search' className='mr-sm-2' />
					<Button variant='outline-info'>Search</Button>
				</Form>
			</Navbar>
		</div>
	);
};

export default Footer;
