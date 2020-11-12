import styled from 'styled-components';
import cardBg from '../../assets/images/card-bg1.jpg';
import { colors } from '../../style/theme';

export const CompanyAreaWrapper = styled.section`
	width: 90%;
	height: 50%;
	background: url(${cardBg});
	background-position: 95%;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 1.7rem;
	display: flex;
	color: ${colors.white};
`;

export const LogoContainer = styled.div`
	width: 35%;
	height: 100%;
	border-radius: 1.5rem;
	display: flex;
	align-items: flex-start;

	img {
		padding: 0.5rem;
		border-radius: 1.5rem;
		width: 100%;
		height: 45%;
	}
`;

export const InfoContainer = styled.div`
	width: 70%;
	padding: 1rem;
	color: ${colors.white};
`;
