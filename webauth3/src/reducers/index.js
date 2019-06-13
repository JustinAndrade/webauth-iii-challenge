import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';

const initialState = {
	users: [],
	loggingIn: false,
	error: null
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_START: {
			return {
				...state,
				error: '',
				isLoggingIn: true
			};
		}
		case LOGIN_SUCCESS: {
			return {
				...state,
				isLoggingIn: false
			};
		}
		case LOGIN_FAILURE: {
			return {
				...state,
				error: 'failed login',
				isLoggingIn: false
			};
		}
		default:
			return state;
	}
};

export default reducer;
