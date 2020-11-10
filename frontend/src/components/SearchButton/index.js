import React, { Fragment, useState , useEffect} from 'react';
import {SearchBar} from './styled';
import {Container} from '../../style/Container'; 
import {Button} from '../../style/Button'
import baseUrl from '../../store/baseUrl'
import searchAction from '../../store/actions/searchAction';



const SearchBarComponent=({workshop})=>{
    const [name, setName] = useState ('');
    //const [query, setQuery] = useState ('');
    const [results, setResults] = useState([]);

   /* const onSubmit = (e) => {
        e.preventDefault(); 
        setQuery(search); 
       
    }*/

    useEffect(() => {
        
   /*     async function fetchData  ()  {
            try {
                //const response = await fetch (searchAction(search)); // baseurl+url?${query}
                //const json = await response.json(); 
                console.log(response);
               /*setResults(
                    json.data.map( item =>{
                        return item.company.name
                        }
                        
                    )
                )

            } catch (error) {}
        }const getSearch = async () => {
  fetch(searchAction(searc))
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
}; */
const getSearch =  () => {
    fetch(searchAction(name))
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }

        if (name !=='') {
        getSearch();
         }
    },  [name]); 
   
    return(
            
        <Container>Search Button test
            
            <form >
             <SearchBar 
             value={search}
             onChange={ e => setSearch(e.target.value)} 
            placeholder="Search"
            />
            </form>
        
        
                <Button type='submit'> Search</Button>    
        
            
    {results.map(item =>(<h3 key ={item}> {item}</h3>))}
        
         </Container>
    )
};


export default SearchBarComponent; 