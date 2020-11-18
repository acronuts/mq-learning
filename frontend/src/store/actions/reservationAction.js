import baseUrl from '../../store/baseUrl';

export const ReservationAction = (workshopId, token) => async (
	dispatch,
	getState
) => {
	const userToken = token ? token : getState().user.token;

	const url = `${baseUrl}/backend/api/workshops/reserve/${workshopId}/`;
	const config = {
		method: 'POST',
		headers: new Headers({
			'Content-type': 'application/json',
			Authorization: `Bearer ${userToken}`,
		}),
	};
	const response = await fetch(url, config);
	const data = await response.json();
	return data;
};

export default ReservationAction;
