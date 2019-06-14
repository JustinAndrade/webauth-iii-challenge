import React from 'react';
import api from '../helpers/api';

class Departments extends React.Component {
	state = {
		users: []
	};

	async componentDidMount() {
		try {
			const result = await api.get('/users');
			this.setState({
				users: result.data
			});
			console.log(result.data);
		} catch (err) {
			if (err.response.status === 401 || err.response.status === 403) {
				this.props.history.push('login');
			}
			console.log(err);
		}
	}
	render() {
		return (
			<div className="main-container">
				<h3>Users</h3>

				<ul>
					{this.state.users.map((user, i) => {
						console.log(user);
						return <li key={i}>department: {user.department}</li>;
					})}
				</ul>
			</div>
		);
	}
}

export default Departments;
