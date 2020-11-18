import React, { Fragment, useState , useEffect} from 'react';
import {SearchBar, ResultsDiv,  ResultsContentWrapper, ResultsWrapper, avatar} from './styled';
import {Container} from '../../style/Container'; 
import {Button} from '../../style/Button'
import baseUrl from '../../store/baseUrl'
import searchAction from '../../store/actions/searchAction';
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




const SearchBarComponent=({setResults, user})=>{
    const [search, setSearch] = useState ('');
    const companyId= user.company.id;


    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const data = await dispatch (searchAction(companyId, search));
            setResults(data);
            
        } catch (error) {} 
       
    }

    
	



    return (
       
            
        <Container>Search Button test
            
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


export default SearchBarComponent; 