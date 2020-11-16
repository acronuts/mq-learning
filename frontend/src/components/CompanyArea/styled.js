import styled from 'styled-components';
import cardBg from '../../assets/images/card-bg1.jpg';
import { colors, borderRadius } from '../../style/theme';

export const CompanyAreaWrapper = styled.section`
	width: 70%;
	height: 50%;
	margin: 0 1.2rem;
	background: url(${cardBg});
	background-position: 95%;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: ${borderRadius.borderRadiusS};
	display: flex;
	color: ${colors.white};
`;

export const LogoContainer = styled.div`
	width: 35%;
	height: 100%;
	display: flex;
	align-items: flex-start;

	img {
		padding: 0.5rem;
		border-radius: ${borderRadius.borderRadius};
		width: 100%;
		height: 100%;
	}
`;

export const InfoContainer = styled.div`
	width: 70%;
	padding: 1rem;
	color: ${colors.white};
`;
