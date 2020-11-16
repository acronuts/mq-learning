import baseUrl from '../baseUrl';

export const companiesAction = () => async (dispatch, getState) => {
	// const token = getState().loginReducer.token;
	const token = getState().loginReducer.token || localStorage.getItem('token');

	const url = `${baseUrl}/backend/api/companies/`;
	const config = {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
			Authorization: `Bearer ${token}`,
		}),
	};
	const response = await fetch(url, config);
	const data = await response.json();
	return data;
};

export default companiesAction;
