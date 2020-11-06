import baseUrl from '../../store/baseUrl';

export const specificWorkshopAction = props => async (dispatch, getState) => {
	const token =
		'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA1MDg3Mjc0LCJqdGkiOiI2OGZjYmI5ODliZTU0MjdiYTU4ZmFjN2MwMTBiZDZmYSIsInVzZXJfaWQiOjF9.whvMWyVbeEI4p9M__dSCrgvv0l8pFTIjeNnyP9YK56A';

	// const token = getState();

	const url = `${baseUrl}/backend/api/workshops/${props}`;
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

export default specificWorkshopAction;
