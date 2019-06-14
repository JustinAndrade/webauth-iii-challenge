import React from 'react';
import { Link, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Departments from './components/Departments';

import './index.css';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<ul>
						<Link to="/login">
							<li>Login</li>
						</Link>
						<Link to="/register">
							<li>Register</li>
						</Link>
						<Link to="/departments">
							<li>Departments</li>
						</Link>
					</ul>
					<main>
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/departments" component={Departments} />
					</main>
				</header>
			</div>
		);
	}
}

export default App;
