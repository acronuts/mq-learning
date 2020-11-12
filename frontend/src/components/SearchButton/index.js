import React, { Fragment, useState , useEffect} from 'react';
import {SearchBar, ResultsDiv,  ResultsContentWrapper, ResultsWrapper} from './styled';
import {Container} from '../../style/Container'; 
import {Button} from '../../style/Button'
import baseUrl from '../../store/baseUrl'
import searchAction from '../../store/actions/searchAction';
import {useDispatch} from 'react-redux'





const SearchBarComponent=({workshop})=>{
    const [search, setSearch] = useState ('');
    const [results, setResults] = useState([]);
    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault(); 
        try {
            
            const data = await dispatch (searchAction(search));
            setResults(data);
        } catch (error) {} 
       
    }

    useEffect(() => {
        
    },  ); 
   
    return (
        
            
        <Container>Search Button test
            
            <form onSubmit = {onSubmit}>
             <SearchBar 
             
             value={search}
             onChange={ e => setSearch(e.target.value)} 
            placeholder="Search"
            /></form>
             <Button > <i class = "search_bar__submit">  Search</i></Button>

            
                    
         
            
                   
        <ResultsDiv>
            {/*results.map(result =>(<img key ={result.id} alt='ABC logo' src={result.logo}/>))*/} 
            {results.map(result =>(<ul key ={result.id}> 
         
                    
                            
                                <p>  {results.name}</p>
                                <p>  Phone: {result.phone}</p>
                                <p> Website: {result.website}</p>
                                <p> Address: {result.address}</p>
                                <p> Zip code: {result.zip_code}</p>
                                <p> City: {result.city}</p>
                                <p> Country: {result.country}</p>
                                
       
            
            
            
            
            
            
            
            </ul>))}
            
    
        </ResultsDiv>
            
         </Container>
    )
};


export default SearchBarComponent; 