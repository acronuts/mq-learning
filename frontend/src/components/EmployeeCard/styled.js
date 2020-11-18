import styled, { css } from 'styled-components';
import { colors, fontSizes, borderRadius } from '../../style/theme';
import cardBg from '../../assets/images/card-bg1.jpg';
import avatar from '../../assets/images/avatar-placeholder.png';

export const CardWrapper = styled.section`
	display: flex;
	width: 78%;
	height: 14rem;
	background: url(${cardBg});
	background-position: 100%;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: ${borderRadius.borderRadius};
	color: ${colors.white};
`;

export const AvatarContainer = styled.div`
	width: 20%;
	background: url(${props =>
		props.employee.avatar ? props.employee.avatar : avatar});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	border-top-left-radius: ${borderRadius.borderRadius};
	border-bottom-left-radius: ${borderRadius.borderRadius};
`;

export const InfoContainer = styled.section`
	width: 80%;
	display: flex;

	p {
		margin: 0.15rem 0;
		font-weight: 300;
		font-size: ${fontSizes.normal};
	}
	span {
		font-size: 1.1rem;
		font-weight: 500;
	}

	${props =>
		props.company &&
		css`
			padding: 0.5rem 1.5rem;

			p {
				width: 80%;
				margin: 0.7rem 0 !important;
				padding: 0.4rem 0;
				font-weight: 200;
				font-size: ${fontSizes.medium};
				border-bottom: 1px solid ${colors.white};
			}

			span {
				font-size: 0.8rem;
				font-weight: 600 !important;
				margin-right: 0.5rem;
				border-bottom: none !important;
			}
		`};
`;

export const LeftSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 60%;
	padding: 1.2rem;

	${props =>
		props.company &&
		css`
			width: 50%;
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			padding: 2.5rem 1.5rem;
		`}
`;

export const RightSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 40%;
	padding: 1.2rem;
	position: relative;
	::before {
		content: '';
		position: absolute;
		top: 50%;
		left: -5%;
		transform: translateY(-50%);
		width: 2px;
		height: 65%;
		background: ${colors.white};
		opacity: 0.7;
	}

	${props =>
		props.company &&
		css`
			width: 50%;
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			padding: 2.5rem 1.5rem;
			position: relative;
			::before {
				width: 0.09rem;
				height: 80%;
				left: -2.2rem;
			}

			.actions-btn-container {
				width: 100%;
				height: 20%;
				position: absolute;
				bottom: -0.5rem;
				margin-top: 2rem;
				display: flex;
				justify-content: flex-end;
				align-items: center;

				button {
					font-size: ${fontSizes.small};
					padding: 0.7rem 2.4rem;
					background: transparent;
					border: 0.1rem solid ${colors.white};
					margin: 0 1rem;
					color: ${colors.white};
					right: 1rem;
					:hover {
						background: #fff;
						color: ${colors.dimGray};
					}
				}
			}
		`}
`;

export const TokenSection = styled.div`
	width: 100%;
	p,
	span {
		font-size: ${fontSizes.normal};
		margin: 0.5rem 0;
		font-weight: 300;
	}
`;

export const AllocateTokenSection = styled.div`
	width: 100%;
	display: flex;
	span {
		font-size: ${fontSizes.normal};
		font-weight: 300;
	}
	input {
		outline: none;
		border: none;
		margin-left: 0.8rem;
		border-radius: ${borderRadius.borderRadiusS};
		width: 27%;
		height: 1.6rem;
		padding: 0.2rem 0.5rem;
	}
`;
