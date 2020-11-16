import React, { Fragment, useState , useEffect} from 'react';
import {SearchBar, ResultsDiv,  ResultsContentWrapper, ResultsWrapper} from './styled';
import {Container} from '../../style/Container'; 
import {Button} from '../../style/Button'
import baseUrl from '../../store/baseUrl'
import searchAction from '../../store/actions/searchAction';
import {useDispatch, useSelector} from 'react-redux'




const SearchBarComponent=()=>{
    const [search, setSearch] = useState ('');
    const [results, setResults] = useState([]);
    const companyId= useSelector(state => state.userReducer.company.id)

    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const data = await dispatch (searchAction(search, companyId));
            setResults(data);
            
        } catch (error) {} 
       
    }

    useEffect(() => {
        
    },  ); 
  

   
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
                   
        <ResultsDiv>
            {/*results.map(result =>(<img key ={result.id} alt='ABC logo' src={result.logo}/>))*/} 
            {search.length > 0 && results.map(result =>(<ul key ={result.id}> 
                <p> {result.first_name}</p> 
            </ul>))}
            
    
        </ResultsDiv>
            
         </Container>
    )
};


export default SearchBarComponent; 