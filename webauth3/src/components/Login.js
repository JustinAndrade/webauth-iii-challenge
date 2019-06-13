import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { login } from '../actions';

import './login.css';

class Login extends React.Component {
	state = {
		credentials: {
			username: '',
			password: ''
		}
	};

	handleChange = (e) => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value
			}
		});
	};

	handleLogin = (e) => {
		e.preventDefault();
		this.props.login(this.state.credentials).then(() => this.props.history.push('/users'));
	};

	render() {
		return (
			<div className="login">
				<h2>Sign In </h2>
				<form className="login-form" onSubmit={this.handleLogin}>
					<input
						type="text"
						name="username"
						value={this.state.credentials.username}
						onChange={this.handleChange}
						placeholder="username"
					/>
					<input
						type="password"
						name="password"
						value={this.state.credentials.password}
						onChange={this.handleChange}
						placeholder="password"
					/>
					<button>
						{this.props.isLoggingIn ? (
							<Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
						) : (
							'Log In'
						)}
					</button>
					<button>Sign Up</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggingIn: state.isLoggingIn,
		error: state.error
	};
};

export default connect(mapStateToProps, { login })(Login);
