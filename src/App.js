import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Nav/Nav';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import PostDetail from './components/PostDetail/PostDetail';
import PostForm from './components/PostForm/PostForm';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

function App() {
	const [token, setToken] = useState('');
	const [loggedIn, setLoggedIn] = useState(false);
	useEffect(() => {
		if (token === '' || token === null || token === undefined) {
			setLoggedIn(false);
		} else {
			setLoggedIn(true);
		}
	}, [token]);
	console.log(loggedIn);
	return (
		<div className='App'>
			<header>
				<Navigation />
			</header>
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route
						exact
						path='/posts'
						render={() => {
							return <Blog loggedIn={loggedIn} />;
						}}
					/>
					<Route
						path='/login'
						render={() => <Login token={token} setToken={setToken} />}
					/>
					<Route
						path='/posts/new'
						render={() => {
							return <PostForm token={token} />;
						}}
					/>
					<Route
						path='/posts/:post'
						render={(routerProps) => {
							return <PostDetail match={routerProps.match} />;
						}}
					/>
					<Route component={NotFound} />
				</Switch>
			</main>
			<footer>
				<Footer token={token} setToken={setToken} />
			</footer>
		</div>
	);
}

export default App;
