import baseUrl from '../../store/baseUrl';

export const specificWorkshopAction = props => async (
	dispatch,
	getState,
	token
) => {
	const userToken = token ? token : getState().user.token;
	console.log(getState().user);

	const url = `${baseUrl}/backend/api/workshops/${props}`;
	const config = {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
			Authorization: `Bearer ${userToken}`,
		}),
	};
	const response = await fetch(url, config);
	const data = await response.json();
	return data;
};

export default specificWorkshopAction;
