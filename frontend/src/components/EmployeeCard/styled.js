import styled from 'styled-components';
import { colors, fontSizes } from '../../style/theme';
import cardBg from '../../assets/images/card-bg1.jpg';

export const CardWrapper = styled.section`
	display: flex;
	width: 85%;
	height: auto;
	margin: 1rem;
	background: url(${cardBg});
	background-position: 100%;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 1.5rem;
	color: ${colors.white};
`;

export const AvatarContainer = styled.div`
	width: 20%;

	img {
		border-top-left-radius: 1.5rem;
		border-bottom-left-radius: 1.5rem;
		width: 100%;
		height: 100%;
	}
`;

export const InfoContainer = styled.section`
	width: 80%;
	display: flex;
	p {
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
	justify-content: space-between;
	width: 60%;
	padding: 1.2rem;
`;

export const RightSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 40%;
	padding: 1.2rem;
	position: relative;
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
`;

export const TokenSection = styled.div`
	width: 100%;
	p {
		font-size: ${fontSizes.medium};
	}
`;

export const AllocateTokenSection = styled.div`
	width: 100%;
	display: flex;

	input {
		outline: none;
		border: none;
		padding-left: 0.5rem;
		border-radius: 0.5rem;
		width: 25%;
		height: 1.8rem;
	}
`;
