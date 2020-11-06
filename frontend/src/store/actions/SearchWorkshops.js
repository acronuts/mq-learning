
import baseUrl from '../baseUrl';



export const SearchWorkshopAction = props => async (dispatch, getState) => {
  const token = getState();

  const url = `${baseUrl}/backend/api/workshops/${props} `;
  const config ={
      method: 'GET',
      headers: new Headers({
          Accept: 'aplication/Json',
          Authorization: `Bearer ${token}`

      }),
  }; 

const response =await fetch (url,config); 
const data = await response.Json();
return data; 

}; 

