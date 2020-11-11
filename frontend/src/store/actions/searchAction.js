import baseUrl from '../baseUrl';

const searchAction = query => async (dispatch, getState) => {
	
    //const token = getState().loginReducer.token;//
    const token = localStorage.getItem("token")
console.log(query)
	const url = `${baseUrl}/backend/api/companies/?search=${query}`;
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