import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Nav/Nav';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
	return (
		<div className='App'>
			<header>
				<Navigation />
			</header>
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route component={NotFound} />
				</Switch>
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
