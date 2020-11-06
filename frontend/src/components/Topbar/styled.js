import styled from 'styled-components';
import { colors, fontSizes } from '../../style/theme';

export const TopBarHeader = styled.div`
	width: 100%;
	height: 10rem;
	display: flex;
	justify-content: space-between;
	z-index: 2;
	/* background-color: red; */
	/* position: absolute; */
`;

export const TopBarLeft = styled.div`
	width: 20%;
	display: flex;
	align-items: center;
	justify-content: center;
	/* background-color: red; */
`;

export const TopBarCenter = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* background-color: blue; */
`;

export const TopBarRight = styled.div`
	width: 30%;
	display: flex;
	/* background-color: green; */
	flex-direction: row-reverse;
	justify-content: flex-start;
`;
export const MQLogoWrapper = styled.div`
	display: flex;
`;

export const MQLogo = styled.img`
	width: 7rem;
	height: auto;
	align-self: center;
`;

export const AvatarContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const Avatar = styled.img`
	width: 5rem;
	height: 5rem;
	border-radius: 5rem;
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
	padding: 0.5rem 0.4rem;
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
	font-size: ${fontSizes.medium};
	align-self: center;
`;

export const CompanyText = styled.p`
	font-size: ${fontSizes.normal};
	align-self: center;
`;
