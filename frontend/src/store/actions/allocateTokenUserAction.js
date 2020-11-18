import baseUrl from '../baseUrl';
import userAction from '../actions/userAction';

export const allocateTokenUserAction = (
	employeeId,
	tokenAmount,
	token
) => async (dispatch, getState) => {
	const userToken = token ? token : getState().user.token;

	const url = `${baseUrl}/backend/api/accounts/user/${employeeId}/`;
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
	dispatch(userAction());
};

export default allocateTokenUserAction;
