import styled from 'styled-components';
import { colors, fontSizes } from '../../style/theme';

export const TopBarHeader = styled.div`
	width: 100vw;
	height: 6rem;
	display: flex;
	background-color: rgba(255, 255, 255, 0);
	z-index: 2;
	/* position: absolute; */
`;

export const TopBarLeft = styled.div`
	width: 33%;
	display: flex;
	justify-content: flex-start;
`;

export const TopBarCenter = styled.div`
	width: 33%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const TopBarRight = styled.div`
	width: 33%;
	display: flex;
	flex-direction: row-reverse;
	justify-content: flex-start;
`;
export const MQLogoWrapper = styled.div`
	display: flex;
`;

export const MQLogo = styled.img`
	width: 5rem;
	height: 5rem;
	margin-left: 2.5rem;
	align-self: center;
`;

export const AvatarContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const Avatar = styled.img`
	width: 5rem;
	height: 4rem;
	border-radius: 0.5rem;
	align-self: center;
`;

export const UserProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-right: 0.8rem;
`;

export const UserWelcome = styled.p`
	color: ${colors.white};
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
	padding: 0.2rem 0.2rem;
	font-size: ${fontSizes.small};
	background: ${colors.purpleMain};
	color: ${colors.white};
	outline: none;
	border: none;
	border-radius: 0.4rem;
	transition: linear 0.15s;
	margin: 0.2rem;
	cursor: pointer;

	:hover {
		background: ${colors.purpleMainHover};
	}
`;

export const TokensValidText = styled.p`
	font-size: ${fontSizes.normal};
	color: ${colors.white};
	align-self: center;
`;

export const CompanyText = styled.p`
	font-size: ${fontSizes.normal};
	color: ${colors.white};
	align-self: center;
`;
