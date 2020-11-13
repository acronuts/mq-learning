import styled, { css } from 'styled-components';
import { colors, borderRadius, fontSizes } from '../../style/theme';

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 0 auto;
	width: 30%;
	height: 33rem;
	background: ${colors.white};
	border-radius: 0.35rem;
	box-shadow: 0px 0px 8px -1px rgba(0, 0, 0, 0.75);
`;

export const BannerWrapper = styled.div`
	min-height: 12rem;
	background: url(${props => props.banner});
	background-position: center;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	border-top-left-radius: ${borderRadius.borderRadiusS};
	border-top-right-radius: ${borderRadius.borderRadiusS};
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
		}

		.subtitle {
			height: 100%;
			color: rgba(0, 0, 0, 0.45);
		}

		.info {
			margin-top: 0.7rem;
			display: flex;
			justify-content: space-between;
		}
	}
`;

export const ReserveBtnWrapper = styled.div`
	height: 10%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem;
	border-top: 1px solid rgba(0, 0, 0, 0.25);
	position: relative;

	i {
		margin: 0.5rem 0 0.5rem 1rem;
	}

	.work {
		color: ${colors.workshopWork};
	}

	.rela {
		color: ${colors.workshopRelationsHover};
	}

	.self {
		color: ${colors.workshopSelf};
	}
`;
