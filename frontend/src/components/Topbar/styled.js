import styled from 'styled-components';
import { colors, fontSizes, borderRadius } from '../../style/theme';

export const TopBarHeader = styled.div`
	width: 100%;
	height: 10rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 2;
`;

export const TopBarLeft = styled.div`
	width: 25%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TopBarCenter = styled.div`
	width: 45%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const TopBarRight = styled.div`
	width: 30%;
	display: flex;
	flex-direction: row-reverse;
	justify-content: flex-start;
`;

export const MQLogoWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	border-bottom-right-radius: 2rem;
	border-top-left-radius: 2rem;

	.logo-text {
		font-size: ${fontSizes.large};
		font-weight: 400;
		margin-left: 1.2rem;
		font-family: 'Libre Baskerville', Tahoma, sans-serif;

		span {
			margin-left: 1.5rem;
			font-size: ${fontSizes.normal};
		}

		p:nth-child(2) {
			margin-left: 1.8rem;
		}
	}
`;

export const MQLogo = styled.img`
	width: 5rem;
	height: auto;
	align-self: center;
`;

export const AvatarContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const Avatar = styled.img`
	width: 6rem;
	height: 6rem;
	border-radius: 50%;
	align-self: center;
`;

export const UserProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-right: 0.8rem;
`;

export const UserWelcome = styled.p`
	font-size: ${fontSizes.normal};
	padding-top: 1rem;
	line-height: 1.5rem;
	text-decoration: none;
`;

export const ViewProfileBtnWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export const ViewProfileBtn = styled.button`
	padding: 0.5rem 0.8rem;
	font-size: ${fontSizes.small};
	background: ${colors.purpleMain};
	color: ${colors.white};
	outline: none;
	border: none;
	border-radius: ${borderRadius.borderRadiusS};
	transition: linear 0.15s;
	margin: 0.2rem;
	cursor: pointer;

	:hover {
		background: ${colors.purpleMainHover};
	}
`;

export const TokensValidText = styled.p`
	font-size: ${fontSizes.medium};
	align-self: center;
	display: flex;
	flex-direction: column;
`;

export const CompanyText = styled.p`
	font-size: ${fontSizes.normal};
	align-self: center;
`;
