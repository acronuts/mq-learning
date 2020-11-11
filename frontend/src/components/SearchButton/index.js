import React, { Fragment, useState , useEffect} from 'react';
import {SearchBar} from './styled';
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
        
    },  []); 
   
    return (
        
            
        <Container>Search Button test
            
            <form onSubmit = {onSubmit}>
             <SearchBar 
             value={search}
             onChange={ e => setSearch(e.target.value)} 
            placeholder="Search"
            /></form>
            

            <Button type="submit"> Search</Button>
                    
             
            
                   
    
    
       {results.map(result =>(<h3 key ={result.id}> {result.name}</h3>))}
    
    
            
         </Container>
    )
};


export default SearchBarComponent; 