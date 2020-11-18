import baseUrl from '../baseUrl';
import CompanyAdminCard from '../../components/CompAdmCard';

const searchAction = (companyId, search) => async (dispatch, getState) => {
	
    //const token = getState().loginReducer.token;//
    const token = localStorage.getItem("token")
//console.log(search)
	const url = `${baseUrl}/backend/api/users/company/${companyId}?search=${search}`;
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