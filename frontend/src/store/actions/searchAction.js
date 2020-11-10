import baseUrl from '../baseUrl';

const searchAction = name => async (dispatch, getState) => {
	
    //const token = getState().loginReducer.token;//
    const token = localStorage.getItem('token')
console.log(name)
	const url = `${baseUrl}/backend/api/companies?search=${name}`;
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

export default searchAction;