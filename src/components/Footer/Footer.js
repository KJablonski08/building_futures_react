import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
	return (
		<div class='footer'>
			<Navbar bg='dark' variant='dark' fixed='bottom'>
				<Nav className='mr-auto'>
					<Nav.Link href='#home'>Login</Nav.Link>
					<Nav.Link href='#pricing'>Contact</Nav.Link>
				</Nav>
				<p>Follow Us</p>
				<Nav.Link href='#home'>Facebook</Nav.Link>
				<Nav.Link href='#pricing'>Instagram</Nav.Link>
				<Form inline>
					<FormControl type='text' placeholder='Search' className='mr-sm-2' />
					<Button variant='outline-info'>Search</Button>
				</Form>
			</Navbar>
		</div>
	);
};

export default Footer;
