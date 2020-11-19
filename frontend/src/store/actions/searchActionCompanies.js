import baseUrl from '../baseUrl';
import CompanyAdminCard from '../../components/CompAdmCard';
import companiesAction from '../actions/companiesAction';

const searchActionCompanies = ( search) => async (dispatch, getState) => {
	
    //const token = getState().loginReducer.token;//
    const token = localStorage.getItem("token")
//console.log(search)
	const url = `${baseUrl}/backend/api/companies/?search=${search}`;
	const config = {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
			Authorization: `Bearer ${token}`,
		}),
	};
	const response = await fetch(url, config);
	const data = await response.json();
	dispatch(companiesAction());
	return data
};

export default searchActionCompanies;