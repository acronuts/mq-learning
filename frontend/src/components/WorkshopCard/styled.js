import styled from 'styled-components';
import { colors, borderRadius, fontSizes } from '../../style/theme';

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 30%;
	height: 35rem;
	background: ${colors.white};
	border-radius: ${borderRadius.borderRadius};
	border-top: 1.5rem solid
		${props =>
			props.category === `work`
				? `${colors.workshopWork}`
				: props.category === 'self'
				? `${colors.workshopSelf}`
				: props.category === 'rela'
				? `${colors.workshopRelations}`
				: `${colors.dimGray}`};
	box-shadow: 0px 0px 8px -1px rgba(0, 0, 0, 0.75);
`;

export const BannerWrapper = styled.div`
	min-height: 12rem;
	background: url(${props => props.banner});
	background-position: center;
	background-size: 100% 100%;
	background-repeat: no-repeat;
`;

export const ContentWrapper = styled.div`
	padding: 1rem;
	height: 60%;
	display: flex;
	flex-direction: column;

	.title-section {
		height: 3.5rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid rgba(0, 0, 0, 0.35);
		display: flex;
		align-items: center;
	}

	.info-section {
		font-size: 0.9rem;
		padding-top: 0.8rem;
		height: 100%;
		display: flex;
		flex-direction: column;
		p {
			margin: 0.2rem 0;
		}

		i {
			font-size: ${fontSizes.normal};
			margin-right: 0.7rem;
			color: #a95edb;
		}

		.description {
			padding: 0 1rem;
			text-align: justify;
			height: 100%;
			color: rgba(0, 0, 0, 0.45);
		}

		.info {
			margin-top: 0.7rem;
			display: flex;
			justify-content: space-between;
			font-size: ${fontSizes.small};
		}
	}
`;

export const ReserveBtnWrapper = styled.div`
	height: 10%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0.8rem;
	border-top: 1px solid rgba(0, 0, 0, 0.25);
	position: relative;
	p {
		padding-left: 0.5rem;
		width: 70%;
		font-size: ${fontSizes.small};
		color: rgba(0, 0, 0, 0.65);
	}
`;
