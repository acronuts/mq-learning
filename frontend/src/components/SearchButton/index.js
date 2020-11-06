import React, { useState, Fragment } from 'react';
import Select from 'react-select'; 
import { WORKSHOPS_FILTER } from '../../store/actionTypes';
import { SearchWorkshopAction } from '../../store/actions/SearchWorkshops';




const options = [ {}, {}]

const SearchForm = () => {

    return(
    
        <Fragment>

            <Select options  = options
            
            
            />
              
        
        </Fragment>




    );

}; 


export default SearchForm