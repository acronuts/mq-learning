import React, { Fragment, useState , useEffect} from 'react';
import {SearchBar, ResultsDiv,  ResultsContentWrapper, ResultsWrapper, avatar} from './styled';
import {Container} from '../../style/Container'; 
import {Button} from '../../style/Button'
import baseUrl from '../../store/baseUrl'
import searchActionCompanies from '../../store/actions/searchActionCompanies';
import {useDispatch, useSelector} from 'react-redux'
import {
	CardWrapper,
	AvatarContainer,
	InfoContainer,
	LeftSection,
	RightSection,
	TokenSection,
    AllocateTokenSection,
    
} from '../EmployeeCard/styled';
import allocateTokenUserAction from '../../store/actions/allocateTokenUserAction';
import avatar1 from '../../assets/images/avatar-placeholder.png';
import EmployeeCard from '../EmployeeCard/index'
import ModalTokensUser from '../Modal/ModalTokensUser';
import companyReducer from '../../store/reducers/companyReducer';




const SearchBarComponentCompany=({setResults})=>{
    const [search, setSearch] = useState ('');
    //const companys= companyReducer.company.id;


    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const data = await dispatch (searchActionCompanies(search));
            setResults(data);
            
        } catch (error) {} 
    }

    return (      
        <Container>
            
            <form onSubmit = {onSubmit}>
                <SearchBar 
                    className="search_bar"
                    value={search}
                    onChange={ e => setSearch(e.target.value)} 
                    placeholder="Search"
                     
                />
            
            </form> 
         </Container> 
    )
};


export default SearchBarComponentCompany; 