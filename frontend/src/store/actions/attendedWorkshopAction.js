import baseUrl from '../baseUrl';

export const attendedWorkshopAction = props => async (dispatch, getState) => {
	const token = getState().loginReducer.token;

	const url = `${baseUrl}/backend/api/workshops/user/attended/`;
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

export default attendedWorkshopAction;
