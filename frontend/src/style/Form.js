import styled, { css } from 'styled-components';
import { colors, fontSizes, borderRadius } from '../style/theme';

export const Form = styled.input`
	width: 30%;
	height: 2.55rem;
	padding: 0.9rem;
	font-size: ${fontSizes.small};
	font-weight: light;
	outline: none;
	border: 1px solid rgba(0, 0, 0, 0.35);
	border-radius: ${borderRadius.borderRadiusS};
	color: ${colors.dimGray};
	margin: 0.7rem 0;

	${props =>
		props.regHalfInput &&
		css`
			width: 18.5%;
			margin: 0.6rem 0.2rem;
		`};
`;
