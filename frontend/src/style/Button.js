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

	${props =>
		props.btnNavDashboard &&
		css`
			width: 12rem;
			height: 4rem;
			margin: 0.8rem 0;
			font-size: ${fontSizes.normal};
		`}

	/* Login Page */
	${props =>
		props.registerLoginBtn &&
		css`
			padding: 0.7rem 1.5rem;
			margin-top: 1.5rem;
			font-weight: 400;
			color: ${colors.white};
			font-size: ${fontSizes.small};
			background: ${colors.purpleMain};
		`}

	/* single workshop page */
	${props =>
		props.reserveBtn &&
		css`
			padding: 1rem 2rem;
			font-size: ${fontSizes.small};
			font-weight: 400;
			color: ${colors.white};
			background: ${colors.purpleMain};
		`}
		
	/* single workshop page */
	${props =>
		props.backBtn &&
		css`
			padding: 1rem 2.8rem;
			font-size: ${fontSizes.small};
			font-weight: 400;
			color: ${colors.white};
			background: ${colors.purpleMain};
		`}

	${props =>
		props.moreInfoBtn &&
		css`
			padding: 0.7rem 1.5rem;
			font-size: ${fontSizes.small};
			margin-top: 1rem;
			font-size: ${fontSizes.small};
			font-weight: 400;
			border-radius: 1.5rem;
			background: ${colors.purpleMain};
			color: ${colors.white};
			:hover {
				color: ${colors.white};
			}
		`}
		
	/* User Profile Page */
	${props =>
		props.editProfileBtn &&
		css`
			padding: 0.5rem 1rem;
			margin: 0 0.6rem;
			font-size: ${fontSizes.small};
			font-weight: 300;
		`}

		${props =>
		props.modalBtn &&
		css`
			padding: 0.4rem 1.3rem;
			font-size: ${fontSizes.normal};
			font-weight: 300;
		`}
`;
