import { WORKSHOP_INFO } from '../actionTypes';
import baseUrl from '../baseUrl';

export const workshopAction = token => async (dispatch, getState) => {
	const userToken = token ? token : getState().user.token;
	
	const url = `${baseUrl}/backend/api/workshops/`;
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
		type: WORKSHOP_INFO,
		payload: data,
	});
};

export default workshopAction;