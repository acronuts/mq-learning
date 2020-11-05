import styled from 'styled-components';
import { colors, fontSizes } from '../../style/theme';
import mockupBanner from '../../assets/images/mockup-banner.jpg';

export const TopBarWrapper = styled.section`
	max-height: 20rem;
	width: 100%;
	padding: 3rem 0 1rem;
	color: ${colors.dimGray};
	position: relative;
	text-align: right;
	display: flex;

	.logo-container {
		width: 5%;
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;

		img {
			margin-top: 0.5rem;
			width: 4.6rem;
		}
	}

	.workshop-info-container {
		width: 70%;
		padding-left: 2.5rem;
		text-align: left;

		h1 {
			font-weight: 500;
			font-size: ${fontSizes.Large};
		}
		p {
			width: 70%;
			margin: 0.2rem 0;
		}
		p:nth-child(2) {
			font-size: 1.2rem;
		}
		p:nth-child(3) {
			font-size: 1rem;
		}
	}

	.btn-container {
		width: 25%;
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
	}
`;

export const Showcase = styled.section`
	width: 100%;
	height: 100%;
	min-height: 30rem;
	margin: 1rem 0;
	background: url(${mockupBanner});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
	border-radius: 0.3rem;
	box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.75);

	::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 0.3rem;
	}
`;

export const MainContent = styled.section`
	width: 100%;
	height: 100%;
	min-height: 20rem;
	margin: 3rem 0;
	padding: 2rem;
	/* border-radius: 0.5rem; */
	color: ${colors.dimGray};
	background: #f2f2f2;
	box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.75);

	h1 {
		font-size: ${fontSizes.medium};
		font-weight: 600;
		margin: 0.5rem 0;
	}

	.time-location-container {
		padding: 0 2rem;
	}

	.workshop-details-container {
		padding: 0 2rem;
		margin: 2rem 0;
		min-height: 20rem;

		p {
			padding-right: 2rem;
			text-align: justify;
			height: 18rem;
			overflow-y: scroll;

			::-webkit-scrollbar {
				width: 0.4rem;
			}

			::-webkit-scrollbar-track {
				background: transparent;
				box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
			}

			::-webkit-scrollbar-thumb {
				background: ${colors.purpleMain};
				:hover {
					background: ${colors.purpleMainHover};
				}
			}
		}
	}

	.action-btns-container {
		margin: 0 auto;
		width: 50%;
		display: flex;
		justify-content: space-around;
	}
`;
