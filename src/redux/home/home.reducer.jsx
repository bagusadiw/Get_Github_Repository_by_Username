import { HomeActionTypes } from '../config';

const INITIAL_STATE ={
	repos:[],
	message: '',
	isLoading: false,
	isError: false
}

const homeReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		
		case HomeActionTypes.GET_REPOS_BY_USERNAME_PENDING :
			return {
				...state,
				isLoading: true
			}
		case HomeActionTypes.GET_REPOS_BY_USERNAME_FULFILLED :
			return {
				...state,
				isLoading: false,
				repos: action.payload.data
			}
		case HomeActionTypes.GET_REPOS_BY_USERNAME_REJECTED :
			return {
				...state,
				isLoading: false,
				isError: true,
				message: action.payload.response.data.message
			}

		default:
			return state;
	}
}

export default homeReducer;