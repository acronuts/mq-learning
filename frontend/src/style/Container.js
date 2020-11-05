import styled, { css } from 'styled-components';

export const Container = styled.section`
	max-width: 1380px;
	margin: auto;
	overflow: hidden;
	padding: 0 2rem;

	${props =>
		props.centerLoginContainer &&
		css`
			display: flex;
			align-items: center;
			justify-content: center;
			height: 95vh;
		`}

	${props =>
		props.workshop &&
		css`
			max-width: 1100px;
		`}

	${props =>
		props.workshopCardContainer &&
		css`
			display: flex;
			align-items: center;
			justify-content: center;
			height: 80vh;
		`}
	
		
`;
