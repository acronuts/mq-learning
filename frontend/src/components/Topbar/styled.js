import styled from 'styled-components';
import { colors, fontSizes, borderRadius } from '../../style/theme';
import avatar from '../../assets/images/avatar-placeholder.png';

export const TopBarHeader = styled.div`
	width: 100%;
	height: 10rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 2;
`;

export const TopBarLeft = styled.div`
	width: 20%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TopBarCenter = styled.div`
	width: 55%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TopBarRight = styled.div`
	width: 25%;
	display: flex;
	flex-direction: row-reverse;
	justify-content: flex-start;
	align-items: center;
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
	background: url(${props => (props.user.avatar ? props.user.avatar : avatar)});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	width: 7rem;
	height: 5rem;
	border-radius: 50%;
`;

export const UserProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	margin-right: 0.8rem;
	width: 100%;
`;

export const UserWelcome = styled.p`
	font-size: ${fontSizes.normal};
	padding-top: 2rem;
	line-height: 1.5rem;
`;

export const ViewProfileBtnWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 0.5rem;
`;

export const ViewProfileBtn = styled.button`
	padding: 0.5rem 0.8rem;
	font-size: ${fontSizes.small};
	outline: none;
	border: none;
	border-radius: ${borderRadius.borderRadiusS};
	transition: linear 0.15s;
	margin: 0.2rem;
	cursor: pointer;
	background: #ba3bbf;
	color: ${colors.white};
	:hover {
		background: #82298f;
	}
`;

export const TokensValidText = styled.div`
	width: 100%;
	font-size: ${fontSizes.normal};
	justify-self: flex-end;
	display: flex;
	flex-direction: column;
	text-align: right;
	:nth-child(2) {
		padding-right: 2rem;
	}

	.hide {
		display: none;
	}
`;

export const CompanyText = styled.p`
	font-size: ${fontSizes.normal};
`;
