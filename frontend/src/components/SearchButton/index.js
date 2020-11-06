import React, { useState, Fragment } from 'react';
import Select from 'react-select'; 
import { WORKSHOPS_FILTER } from '../../store/actionTypes';



const 


const SearchForm = () => {

    return(
    
        <Fragment>

            <Select options  = { workshops}







            },
            autoFocus : True,
            isMulti : True, 
            
            
            />
              
        
        </Fragment>




    );

}; 


export default SearchForm