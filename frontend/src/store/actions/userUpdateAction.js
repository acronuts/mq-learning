import baseUrl from '../baseUrl';
import { USER_UPDATE } from '../actionTypes';

export const userAction = token => async (dispatch, getState) => {
	const userToken = token ? token : getState().user.token;

	const url = `${baseUrl}/backend/api/users/me/`;
	const config = {
		method: 'PATCH',
		headers: new Headers({
			Accept: 'application/json',
			Authorization: `Bearer ${userToken}`,
		}),
	};
	const response = await fetch(url, config);
	const data = await response.json();
	dispatch({
		type: USER_UPDATE,
		payload: {
			user: data,
			token: userToken,
		},
	});
};
