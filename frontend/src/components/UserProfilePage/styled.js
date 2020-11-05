import styled from 'styled-components';
import { colors, fontSizes } from '../../style/theme';

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
			width: 70%;
			border-radius: 6rem;
			margin-bottom: 0.8rem;
		}
	}

	.user-details-container {
		width: 80%;
		height: 100%;
		padding: 2.5rem 1.5rem;
		border-radius: 0.5rem;
		/* background: rgba(255, 255, 255, 0.5); */
		margin: 0 auto;
		display: flex;
		text-align: left;
		justify-content: center;
		align-items: center;
		p {
			margin: 0.3rem 0;
			font-size: ${fontSizes.normal};
		}

		.left-side {
			width: 30%;

			h2 {
				font-weight: 400;
				font-size: ${fontSizes.large};
			}
		}

		.right-side {
			width: 40%;
			padding: 0.4rem 0;
			margin-top: 3rem;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
		}

		.tokens-container {
			width: 30%;
			height: 100%;
			margin-top: 3rem;
			padding: 1rem 2rem;
			border-radius: 0.5rem;
			background: rgba(255, 255, 255, 0.5);
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;

			p {
				margin: 0.2rem 0;
				font-size: ${fontSizes.normal};
			}
		}
	}
`;
