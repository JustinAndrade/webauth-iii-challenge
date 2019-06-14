import React from 'react';
import { withRouter } from 'react-router-dom';
import api from '../helpers/api';

import './index.css';

class Register extends React.Component {
	state = {
		username: '',
		password: '',
		department: ''
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		console.log(this.state);

		try {
			const { username, password, department } = this.state;

			const result = await api.post('/auth/register', {
				username,
				password,
				department
			});

			localStorage.setItem('token', result.data.token);
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
				<h2>Register</h2>
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
					<input
						type="text"
						name="department"
						value={this.state.department}
						onChange={this.handleChange}
						placeholder="department"
					/>
					<button type="submit">Register</button>
				</form>
			</div>
		);
	}
}

export default withRouter(Register);
