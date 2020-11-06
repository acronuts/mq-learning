import React, { useState, useEffect} from "react"; 

export const actionName = data => ({
  type: "WORKSHOPS_FILTER", 
  payload: data
})
// ^= (up)rx action , connect with file  actionTypes  "WORKSHOPS_FILTER"
// now lets define the action =v (down)




export const SearchWorkshopAction = workshopData => async (dispatch, getState) => {
  

  const [state, setState] = useState(initialState);

  return <Fragment>content</Fragment>;
}

