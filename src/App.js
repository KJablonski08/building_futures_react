import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Nav/Nav';

function App() {
	return (
		<div className='App'>
			<header>
				<Navigation />
			</header>
			<main>
				<Switch></Switch>
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
