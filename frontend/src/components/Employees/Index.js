import React, { useState , useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import searchAction from'../../store/actions/searchAction';
import SearchBarComponent from '../SearchButton/';
import EmployeeCard from '../EmployeeCard'





const Employees=({user})=>{
    const [results, setResults] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const getCompanyUsers = async () => { 
            const users = await dispatch(searchAction(user.company.id, ''));
            setResults(users)
        }
        getCompanyUsers()
    }, [] ); 

    return (
        <>
             <SearchBarComponent setResults={setResults} user={user}></SearchBarComponent> 
            {results.length ? (
                 results.map(employee => (
                    <EmployeeCard employee={employee} key={employee.id} />
             ))
             ) : (
            <h4 style={message}>
                There are no employees registered for this company.
            </h4>
        )} 
    </>
        
    );
};

const message = {
	marginLeft: '40%',
	fontWeight: '400',
};

export default Employees; 