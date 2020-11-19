import styled from 'styled-components';
import { colors } from '../../style/theme';



export const SearchBar=styled.input`
    height: 2.55rem;
    width: 15rem; 
    border:1px solid rgba(0, 0, 0, .85); 
    border-radius: 0.3rem;
	font-family: inherit; 



`; 


export const ResultsDiv =styled.div`
    font-style: inherit

`
export const ResultsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	width: 70%;
	margin: 1rem;
	background: ${colors.white};
	border-radius: 1.5rem;
	padding: 1rem 1rem;
`

export const ResultsContentWrapper = styled.div`
	display: flex;
    width:65%; 
	/* flex-direction: column; */

	height: auto;
	color: ${colors.black};
`;