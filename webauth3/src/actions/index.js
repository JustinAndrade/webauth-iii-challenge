import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (creds) => (dispatch) => {
	dispatch({ type: LOGIN_START });

	return axios
		.post('http://localhost:3000/api/auth/login', creds)
		.then((res) => {
			localStorage.setItem('token', res.data.payload);

			dispatch({ type: LOGIN_SUCCESS });
		})
		.catch((err) => {
			console.log(`Login error: ${err}`);
			if (err.response && err.response.status === 403) {
				localStorage.removeItem('token');
			}
			dispatch({ type: LOGIN_FAILURE });
		});
};
