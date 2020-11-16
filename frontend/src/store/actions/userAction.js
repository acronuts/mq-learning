import baseUrl from '../baseUrl';
import {USER_INFO} from '../actionTypes';

export const userAction = () => async (dispatch, getState) => {
	// const token = getState().loginReducer.token;
	const token = getState().loginReducer.token || localStorage.getItem('token');

	const url = `${baseUrl}/backend/api/users/me/`;
	const config = {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
			Authorization: `Bearer ${token}`, //we are not storing the information about the user? at leat not here
		}),
	};
	const response = await fetch(url, config);
	const data = await response.json();
	dispatch({
		type: USER_INFO,
		payload: data

	})
	return data;
};

export default userAction;
