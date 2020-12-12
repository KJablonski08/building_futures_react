import React, { useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Nav/Nav';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import PostDetail from './components/PostDetail/PostDetail';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

function App() {
	const [token, setToken] = useState('');
	return (
		<div className='App'>
			<header>
				<Navigation />
			</header>
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/posts' component={Blog} />
					<Route
						path='/posts/:post'
						render={(routerProps) => {
							return <PostDetail match={routerProps.match} />;
						}}
					/>
					<Route
						path='/login'
						render={() => <Login token={token} setToken={setToken} />}
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
