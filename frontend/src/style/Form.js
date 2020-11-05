import styled, { css } from 'styled-components';
import { colors, fontSizes } from '../style/theme';

export const Form = styled.input`
	width: 65%;
	height: 2.55rem;
	padding: 0.9rem;
	font-size: ${fontSizes.small};
	font-weight: light;
	outline: none;
	border: 1px solid rgba(0, 0, 0, 0.20);
	border-radius: 0.3rem;
	color: ${colors.dimGray};
	margin: 0.6rem 0;

	${props =>
		props.regHalfInput &&
		css`
			width: 40%;
			margin: 0.6rem 0.2rem;
		`};

	${props =>
		props.searchForm &&
		css`
			width: 15rem;
			margin: 0.6rem 0.2rem;
	`};
	
`;
