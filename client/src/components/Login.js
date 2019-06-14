import React from 'react';
import { withRouter } from 'react-router-dom';
import api from '../helpers/api';

import './index.css';

class Login extends React.Component {
	state = {
		username: '',
		password: ''
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		console.log(this.state);

		try {
			const { username, password } = this.state;

			const result = await api.post('/auth/login', {
				username,
				password
			});

			localStorage.setItem('token', result.data.authToken);
			console.log(result.data);
			this.props.history.push('/departments');
		} catch (err) {
			console.log(err);
		}
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		return (
			<div className="main-container">
				<h2>Sign In </h2>
				<form className="default-form" onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="username"
						value={this.state.username}
						onChange={this.handleChange}
						placeholder="username"
					/>
					<input
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
						placeholder="password"
					/>
					<button type="submit">Login</button>
				</form>
			</div>
		);
	}
}

export default withRouter(Login);
