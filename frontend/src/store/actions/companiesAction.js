import { COMPANY_INFO } from '../actionTypes';
import baseUrl from '../baseUrl';

export const companiesAction = token => async (dispatch, getState) => {
	// const token = getState().loginReducer.token;
	const userToken = token ? token : getState().user.token;
	console.log(getState().user);

	const url = `${baseUrl}/backend/api/companies/`;
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
		type: COMPANY_INFO,
		payload: data,
	});
};

export default companiesAction;
