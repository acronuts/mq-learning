import baseUrl from '../baseUrl';

export const allocateTokenUserAction = (employeeId, tokenAmount) => async (
	dispatch,
	getState
) => {
	const token = getState().loginReducer.token || localStorage.getItem('token');

	const url = `${baseUrl}/backend/api/accounts/user/${employeeId}/`;
	const credits = JSON.stringify({
		credit: parseInt(tokenAmount),
	});
	const config = {
		method: 'POST',
		headers: new Headers({
			'Content-type': 'application/json',
			Authorization: `Bearer ${token}`,
		}),
		body: credits,
	};
	const response = await fetch(url, config);
	const data = await response.json();
	console.log(data);
	return data;
};

export default allocateTokenUserAction;
