import baseUrl from '../baseUrl';

export const allocateTokenCompanyAction = (companyId, tokenAmount) => async (
	dispatch,
	getState
) => {
	const token = getState().loginReducer.token || localStorage.getItem('token');

	const url = `${baseUrl}/backend/api/accounts/company/${companyId}/`;
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
	console.log('data', data);
	return data;
};

export default allocateTokenCompanyAction;
