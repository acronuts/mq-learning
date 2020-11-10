import React, { Fragment, useState , useEffect} from 'react';
import {SearchBar} from './styled';
import {Container} from '../../style/Container'; 
import {Button} from '../../style/Button'
import baseUrl from '../../store/baseUrl'
import searchAction from '../../store/actions/searchAction';



const SearchBarComponent=({workshop})=>{
    const [search, setSearch] = useState ('');
    const [query, setQuery] = useState ('');
    const [results, setResults] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault(); 
        setQuery(search); 
       
    }

    useEffect(() => {
        async function fetchData  ()  {
            try {
                const response = await fetch (searchAction({query})); 
                const json = await response.json(); 
                console.log({json});
                setResults(
                    json.data.map( item =>{
                        return item.company.name
                        }
                        
                    )
                )

            } catch (error) {}
        }; 
        if (query !=='') {
        fetchData();
         }
    },  [query]); 
   
    return(
            
        <Container>Search Button test
            
            <form onSubmit = {onSubmit}>
             <SearchBar 
             value={search}
             onChange={ e => setSearch(e.target.value)} 
            placeholder="Search"
            />
            </form>
            </F
            <Fragment>
                <Button type='submit'> Search</Button>    
            </Fragment> 
            <Fragment>
    {results.map(item =>(<h3 key ={item}> {item}</h3>))}
            </Fragment>
         </Container>
    )
};


export default SearchBarComponent; 