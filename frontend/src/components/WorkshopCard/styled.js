import styled, { css } from 'styled-components';
import { colors, borderRadius } from '../../style/theme';

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	width: 80%;
	margin: 1rem;
	background: ${colors.white};
	border-radius: ${borderRadius.borderRadiusSw};
	padding: 1rem 1rem;

	${props =>
		props.category === 'work' &&
		css`
			background: ${colors.workshopWork};
		`}

	${props =>
		props.category === 'self' &&
		css`
			background: ${colors.workshopSelf};
		`}

	${props =>
		props.category === 'rela' &&
		css`
			background: ${colors.workshopRelations};
		`}
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
