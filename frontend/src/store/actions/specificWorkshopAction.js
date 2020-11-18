import baseUrl from '../../store/baseUrl';

export const specificWorkshopAction = async (workshopId, token) => {
	const url = `${baseUrl}/backend/api/workshops/${workshopId}`;
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
