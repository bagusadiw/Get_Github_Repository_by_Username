import { HomeActionTypes } from '../config';
import axios from 'axios';

const API = "https://api.github.com/users/";

export const getReposByUsername = (username) => ({
	type: HomeActionTypes.GET_REPOS_BY_USERNAME,
	payload: axios.get(`${API}${username}/repos`)	
})