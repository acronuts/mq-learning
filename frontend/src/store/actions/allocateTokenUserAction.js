import baseUrl from '../baseUrl';

export const allocateTokenUserAction = employeeId => async (
	dispatch,
	getState
) => {
	// const token = getState().loginReducer.token;
	const token = getState().loginReducer.token || localStorage.getItem('token');

	const url = `${baseUrl}/backend/api/accounts/user/${employeeId}/`;
	const config = {
		method: 'POST',
		headers: new Headers({
			'Content-type': 'application/json',
			Authorization: `Bearer ${token}`,
		}),
	};
	const response = await fetch(url, config);
	const data = await response.json();
	return data;
};

export default allocateTokenUserAction;
