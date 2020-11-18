import styled, { css } from 'styled-components';
import { colors, fontSizes, borderRadius } from '../../style/theme';
import cardBg from '../../assets/images/card-bg1.jpg';

export const CardWrapper = styled.section`
	display: flex;
	width: 78%;
	height: 12rem;
	background: url(${cardBg});
	background-position: 100%;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: ${borderRadius.borderRadius};
	color: ${colors.white};
`;

export const AvatarContainer = styled.div`
	width: 20%;

	img {
		border-top-left-radius: ${borderRadius.borderRadius};
		border-bottom-left-radius: ${borderRadius.borderRadius};
		width: 100%;
		height: 100%;
	}
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
			p {
				width: 80%;
				margin: 0.5rem 0;
				padding-bottom: 0.2rem;
				border-bottom: 1px solid ${colors.white};
			}
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

	p {
		margin: 0.5rem 0;
	}
	p,
	span {
		font-weight: 300;
	}
	span {
		margin-right: 0.5rem;
	}

	${props =>
		props.company &&
		css`
			width: 50%;
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			padding: 2.5rem 1.5rem;
			::before {
				width: 0;
			}
			p {
				width: 80%;
				margin: 0.5rem 0;
				padding-bottom: 0.2rem;
				border-bottom: 1px solid ${colors.white};
			}
		`}
`;

export const TokenSection = styled.div`
	width: 100%;
	p,
	span {
		font-size: ${fontSizes.normal};
	}
`;

export const AllocateTokenSection = styled.div`
	width: 100%;
	display: flex;
	span {
		font-size: ${fontSizes.normal};
	}
	input {
		outline: none;
		border: none;
		padding-left: 0.5rem;
		border-radius: ${borderRadius.borderRadiusS};
		width: 27%;
		height: 1.6rem;
	}
`;
