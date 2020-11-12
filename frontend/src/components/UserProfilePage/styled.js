import styled from 'styled-components';
import { fontSizes } from '../../style/theme';

export const TopProfileBar = styled.section`
	width: 100%;
	height: 100%;
	min-height: 25vh;
	padding: 2rem;
	display: flex;
	align-items: center;

	.avatar-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 20%;
		height: 100%;

		img {
			width: 9rem;
			height: 9rem;
			border-radius: 50%;
			margin-bottom: 0.8rem;
		}
	}

	.user-details-container {
		width: 80%;
		height: 100%;
		padding: 2.5rem 1.5rem;
		border-radius: 0.5rem;
		/* background: rgba(255, 255, 255, 0.5); */
		display: flex;
		align-items: flex-start;
		p {
			margin: 0.3rem 0;
			font-size: ${fontSizes.normal};
		}

		.left-side {
			width: 30%;
			height: 100%;

			h2 {
				font-weight: 400;
				font-size: ${fontSizes.large};
			}
		}

		.right-side {
			height: 100%;
			width: 40%;
			padding: 0.4rem 0;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
		}

		.tokens-container {
			width: 30%;
			padding: 1rem 2rem;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;

			p {
				margin: 0.2rem 0;
				font-size: ${fontSizes.normal};
				span {
					margin-left: 0.2rem;
				}
			}
		}
	}
`;
