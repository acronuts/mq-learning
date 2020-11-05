import React, { useState, Fragment } from 'react';
import Select from 'react-select'; 



const options =[ 
    {label:'matias', value: 'loco'},
    {label:'joost', value: 'loca'},
    {label:'stephan', value: 'locos'},
    {label:'Romulo', value: 'locas'},
    {label:'guillaume', value: 'Demente'},
]; 


const SearchForm = () => {

    return(
    
        <Fragment>

            <Select options  = {options}  />
              
        
        </Fragment>




    );

}; 


export default SearchForm