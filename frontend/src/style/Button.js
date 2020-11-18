import styled, { css } from 'styled-components';
import { colors, fontSizes, borderRadius } from '../style/theme';

export const Button = styled.button`
	padding: 0.8rem 2.5rem;
	font-size: ${fontSizes.normal};
	background: ${colors.purpleMain};
	outline: none;
	border: none;
	border-radius: ${borderRadius.borderRadiusS};
	letter-spacing: 0.1rem;
	transition: linear 0.15s;
	cursor: pointer;
	text-align: center;
	:hover {
		background: ${colors.purpleMainHover};
	}

	${props =>
		props.btnNavDashboard &&
		css`
			width: 11rem;
			height: 3.5rem;
			margin: 0.5rem 0;
			font-size: ${fontSizes.small};
		`}

	/* Login Page */
	${props =>
		props.registerLoginBtn &&
		css`
			width: 6.5rem;
			height: auto;
			padding: 0.5rem 0.7rem;
			margin-top: 1.5rem;
			font-weight: 400;
			font-size: ${fontSizes.small};
			background: #ba3bbf;
			color: ${colors.white};
			:hover {
				background: #82298f;
			}
		`}

	/* single workshop page */
	${props =>
		props.reserveBtn &&
		css`
			padding: 1rem 2rem;
			font-size: ${fontSizes.small};
			font-weight: 400;
			background: #ba3bbf;
			color: ${colors.white};
			:hover {
				background: #82298f;
			}
		`}
		
	/* single workshop page */
	${props =>
		props.backBtn &&
		css`
			padding: 1rem 2.8rem;
			font-size: ${fontSizes.small};
			font-weight: 400;
			background: #ba3bbf;
			color: ${colors.white};
			:hover {
				background: #82298f;
			}
		`}

	${props =>
		props.moreInfoBtn &&
		css`
			padding: 0.5rem 1rem;
			font-size: ${fontSizes.small};
			font-weight: 400;
			border-radius: ${borderRadius.borderRadiusS};
			background: ${colors.purpleMainHover};
			position: absolute;
			bottom: 0.5rem;
			right: 0.5rem;
			letter-spacing: 0.05rem;

			:hover {
				background: #d59bfa;
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
			background: #ba3bbf;
			color: ${colors.white};
			:hover {
				background: #82298f;
			}
		`}

		${props =>
		props.modalBtn &&
		css`
			padding: 0.4rem 1.3rem;
			font-size: ${fontSizes.normal};
			font-weight: 300;
			background: #ba3bbf;
			color: ${colors.white};
			:hover {
				background: #82298f;
			}
		`}

		${props =>
		props.save &&
		css`
			font-size: ${fontSizes.small};
			padding: 0.5rem 1.5rem;
			background: transparent;
			border: 0.1rem solid ${colors.white};
			position: absolute;
			bottom: 1rem;
			color: ${colors.white};
			right: 1rem;
			:hover {
				background: #fff;
				color: ${colors.dimGray};
			}
		`}
`;
