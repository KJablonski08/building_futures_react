import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './nav.css';

const Navigation = () => {
	return (
		<div>
			<Navbar expand='lg' id='nav' fixed='top'>
				<Navbar.Brand href='#home'>
					<img src={process.env.PUBLIC_URL + '/media/bf_logo.jpg'} id='logo' />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='#home'>About Us</Nav.Link>
						<Nav.Link href='#link'>Blog</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Navigation;
