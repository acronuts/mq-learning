import styled from 'styled-components';
import { borderRadius, colors, fontSizes } from '../../style/theme';

export const TopBarWrapper = styled.section`
	max-height: 20rem;
	width: 100%;
	padding: 3rem 0 1rem;
	color: ${colors.dimGray};
	position: relative;
	text-align: right;
	display: flex;

	.logo-container {
		width: 10%;
		display: flex;
		align-items: flex-start;
		justify-content: center;

		img {
			margin-top: 0.5rem;
			width: 4.6rem;
		}
	}

	.workshop-info-container {
		width: 90%;
		text-align: left;
		position: relative;

		h1 {
			font-weight: 500;
			font-size: ${fontSizes.exLarge};
		}
		p {
			width: 70%;
			margin: 0.2rem 0;
			font-size: ${fontSizes.normal};
		}
		p:nth-child(5) {
			text-align: right;
			width: 20%;
			position: absolute;
			top: 100%;
			transform: translateY(-100%);
			right: 0;
			font-size: ${fontSizes.medium};
		}
		i {
			margin-right: 0.5rem;
		}
	}
`;

export const Showcase = styled.section`
	width: 100%;
	height: 100%;
	min-height: 30rem;
	margin: 1rem 0;
	background: url(${props => props.banner});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
	border-radius: ${borderRadius.borderRadiusS};
	box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.75);
`;

export const MainContent = styled.section`
	width: 100%;
	height: 100%;
	min-height: 20rem;
	margin: 3rem 0;
	padding: 2rem;
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
