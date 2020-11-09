import React, { Fragment, useState , useEffect} from 'react';
import {SearchBar} from './styled';
import {Container} from '../../style/Container'; 
import {Button} from '../../style/Button'
import {baseUrl} from '../../store/baseUrl'



const SearchBarComponent=({workshop})=>{
    const [search, setSearch] = useState ('');
    const [query, setQuery] = useState ('');
    

    const onSubmit = (e) => {
        e.preventDefault(); 
        setQuery(search); 
       
    }

    useEffect(() => {
        async function ferchdata  ()  {
            try {
                const response = await fetch (`${baseUrl}/backend/api/workshops `
                ); 
                const json = await response.json(); 
                console.log({json});

            } catch (error) {}
        }; 

    },  [query]); 

    return(
            
        <Container>Search Button test
            <Fragment>
            <form onSubmit = {onSubmit}>
             <SearchBar 
             value={search}
             onChange={ e => setSearch(e.target.value)} 
            placeholder="Search"
            />
            </form>
            </Fragment>
            <Fragment>
                <Button type='submit'> Search</Button>    
            </Fragment> 
         </Container>
    )
};


export default SearchBarComponent; 