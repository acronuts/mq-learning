import React, { useState , useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import searchActionCompany from'../../store/actions/searchActionCompanies';
import SearchBarComponentCompany from '../SearchButtonCompanies';
import CompaniesCard from '../CompaniesCard'
import Fragment from 'react'
import searchActionCompanies from '../../store/actions/searchActionCompanies';
import companiesAction from '../../store/actions/companiesAction'





const Companies=()=>{
    const [results, setResults] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const getCompany = async () => { 
            const companies= await dispatch(searchActionCompany(''));
            setResults(companies)
        }
        getCompany()
    }, [] ); 

    return (
        <>
            <SearchBarComponentCompany setResults={setResults}></SearchBarComponentCompany> 
             <>
				{results.length ? results.map(company => <CompaniesCard company={company} key={company.id} />)
				: <h4 style={message}>There are no registered Companies.</h4>
			    }   
			</> 
        </>
        
    );
};

const message = {
	marginLeft: '40%',
	fontWeight: '400',
};

export default Companies; 