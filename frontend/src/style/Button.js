import styled, { css } from 'styled-components';
import { colors, fontSizes } from '../style/theme';

export const Button = styled.button`
	padding: 0.8rem 2.5rem;
	font-size: ${fontSizes.normal};
	background: ${colors.purpleMain};
	color: ${colors.white};
	outline: none;
	border: none;
	border-radius: 0.3rem;
	letter-spacing: 0.1rem;
	transition: linear 0.15s;
	cursor: pointer;

	:hover {
		background: ${colors.purpleMainHover};
	}

	${props => {
		if (props.btnNavDashboard) {
			return `
			width: 15rem;
			height: 4rem;
		`;
	}
	}}

	${props =>
		props.registerLoginBtn &&
		css`
			padding: 0.7rem 1.5rem;
			margin-top: 1.5rem;
			font-weight: 400;
			color: ${colors.white};
			font-size: ${fontSizes.small};
			background: ${colors.purpleMain};
			:hover {
				background: ${colors.purpleMainHover};
			}
		`}

	${props =>
		props.reserveBtn &&
		css`
			padding: 1rem 2rem;
			font-size: ${fontSizes.small};
			font-weight: 400;
			color: ${colors.white};
			background: ${colors.purpleMain};
			:hover {
				background: ${colors.purpleMainHover};
			}
		`}
	
		${props =>
		props.backBtn &&
		css`
			padding: 1rem 2.8rem;
			font-size: ${fontSizes.small};
			font-weight: 400;
			color: ${colors.white};
			background: ${colors.purpleMain};
			:hover {
				background: ${colors.purpleMainHover};
			}
		`}

	${props =>
		props.ReserveBtn &&
		css`
			padding: 0.7rem 1.5rem;
			letter-spacing: 0.1rem;
			font-size: ${fontSizes.small};
			margin-top: 1.3rem;
			font-size: ${fontSizes.small};
			font-weight: 300;
			border-radius: 1.5rem;
			:hover {
				background: ${colors.white};
				color: ${colors.purpleMain};
			}
		`}
`;
