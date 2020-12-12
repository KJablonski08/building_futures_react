import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './nav.css';

const Navigation = () => {
	return (
		<div>
			<Navbar expand='lg' id='nav'>
				<Link to='/'>
					<Navbar.Brand>
						<img
							src={process.env.PUBLIC_URL + '/media/bf_logo.jpg'}
							id='logo'
							alt='building futures logo'
						/>
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav>
							<Link to='/about' className='nav-link'>
								About Us
							</Link>
						</Nav>
						<Nav>
							<Link to='/posts' className='nav-link'>
								Blog
							</Link>
						</Nav>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Navigation;
