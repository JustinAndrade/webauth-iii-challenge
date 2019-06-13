import React from 'react';
import './App.css';

import Login from '../src/components/Login.js';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Login />
				</header>
			</div>
		);
	}
}

export default App;
