import styled from 'styled-components';
import { colors } from '../../style/theme';

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	width: 80%;
	margin: 1rem;
	background: ${colors.white};
	border-radius: 1.5rem;
	padding: 1rem 1rem;
`;

export const ContentWrapper = styled.div`
	display: flex;
	/* flex-direction: column; */
	height: auto;
	color: ${colors.black};
`;

export const ReserveBtnWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;
