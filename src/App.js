import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Blog from './components/Blog/Blog';
import PostDetail from './components/PostDetail/PostDetail';
import PostForm from './components/PostForm/PostForm';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

function App() {
	const [token, setToken] = useState('');
	const [userData, setUserData] = useState({
		user_id: '',
		email: '',
		name: '',
	});
	const [loggedIn, setLoggedIn] = useState(false);
	useEffect(() => {
		if (token === '' || token === null || token === undefined) {
			setLoggedIn(false);
		} else {
			setLoggedIn(true);
		}
	}, [token]);
	return (
		<div className='App'>
			<header>
				<Navigation />
			</header>
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/gallery' component={Gallery} />
					<Route
						exact
						path='/posts'
						render={() => {
							return <Blog loggedIn={loggedIn} />;
						}}
					/>
					<Route
						path='/login'
						render={() => (
							<Login
								token={token}
								setToken={setToken}
								setUserData={setUserData}
							/>
						)}
					/>
					<Route
						path='/posts/new'
						render={() => {
							return <PostForm token={token} userData={userData} />;
						}}
					/>
					<Route
						path='/posts/:post'
						render={(routerProps) => {
							return (
								<PostDetail
									match={routerProps.match}
									userData={userData}
									token={token}
								/>
							);
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
