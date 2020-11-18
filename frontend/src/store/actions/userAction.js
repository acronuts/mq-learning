import baseUrl from '../baseUrl';
import { USER_INFO } from '../actionTypes';

export const userAction = token => async (dispatch, getState) => {
	const userToken = token ? token : getState().user.token;

	const url = `${baseUrl}/backend/api/users/me/`;
	const config = {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
			Authorization: `Bearer ${userToken}`,
		}),
	};
	const response = await fetch(url, config);
	const data = await response.json();
	dispatch({
		type: USER_INFO,
		payload: {
			user: data,
			token: userToken,
		},
	});
};

export default userAction;
