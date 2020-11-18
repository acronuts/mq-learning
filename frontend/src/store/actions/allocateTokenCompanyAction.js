import baseUrl from '../baseUrl';
import companiesAction from '../actions/companiesAction';

export const allocateTokenCompanyAction = (
	companyId,
	tokenAmount,
	token
) => async (dispatch, getState) => {
	const userToken = token ? token : getState().user.token;

	const url = `${baseUrl}/backend/api/accounts/company/${companyId}/`;
	const credits = JSON.stringify({
		credit: parseInt(tokenAmount),
	});
	const config = {
		method: 'POST',
		headers: new Headers({
			'Content-type': 'application/json',
			Authorization: `Bearer ${userToken}`,
		}),
		body: credits,
	};
	const response = await fetch(url, config);
	await response.json();
	dispatch(companiesAction());
};

export default allocateTokenCompanyAction;
