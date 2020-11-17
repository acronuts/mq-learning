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
import ModalTokens from '../Modal/ModalTokens';

//import {avatar} from '../../assets/images/avatar-placeholder.png';




const SearchBarComponent=()=>{
    const [search, setSearch] = useState ('');
    const [results, setResults] = useState([]);
    const companyId= useSelector(state => state.userReducer.company.id)
    const [tokenInput, setTokenInput] = useState(''); // from card
    const [showModal, setShowModal] = useState(false); // from card
    

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

    //other code down 

    const openModal = e => {
		setShowModal(true);
	};

	const hideModal = e => {
		setShowModal(false);
	};

	const updateField = e => {
		setTokenInput({
			...tokenInput,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};

	const handleAllocateTokenUser = e => {
		e.preventDefault();
		const getData = async () => {
			dispatch(allocateTokenUserAction(search.id, tokenInput.tokenInput));
			console.log('worked');
		};
		getData();
	};

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
            { <CardWrapper>
			<AvatarContainer>
				<img
					src={result.avatar ? result.avatar : avatar}
					alt='employee-avatar'
				/>
			</AvatarContainer>
			<InfoContainer>
				<LeftSection>
					<p>{fullName}</p>
					<p>{result.email}</p>
					<p>{result.company ? result.company.name : null}</p>
					<p>
						{result.address}, {result.zip_code} - {result.city}
					</p>
					<p>{result.country}</p>
				</LeftSection>
				<RightSection>
					<TokenSection>
						{result.available_credit ? (
							<p>
								<span>Tokens available:</span>{' '}
								{result.available_credit.total_available
									? result.available_credit.total_available
									: 0}{' '}
								tokens
							</p>
						) : (
							'loading...'
						)}
					</TokenSection>
					<AllocateTokenSection>
						<span>Allocate tokens:</span>
						<input
							onChange={updateField}
							type='number'
							name='tokenInput'
							min='0'
						/>
					</AllocateTokenSection>
					<Button save onClick={handleAllocateTokenUser}>
						save
					</Button>
					{showModal ? (
						<ModalTokens
							employee={search}
							tokenInput={tokenInput.tokenInput}
						/>
					) : null}
				</RightSection>
			</InfoContainer>
		</CardWrapper> }
            </ul>))}
            
    
        </ResultsDiv>
            
         </Container>
    )
};


export default SearchBarComponent; 