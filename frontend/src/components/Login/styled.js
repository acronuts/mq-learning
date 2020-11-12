import styled, { css } from 'styled-components';
import { colors, fontSizes } from '../../style/theme';

export const LoginContainer = styled.section`
	height: 80vh;
	width: 100%;
	max-height: 40rem;
	/* background: red; */
`;

export const Title = styled.div`
	text-align: center;
	width: 100%;
	margin: 5rem auto -1.2rem;

	h1 {
		color: ${colors.dimGray};
		font-size: ${fontSizes.large};
		font-weight: 300;
		letter-spacing: 0.2rem;
		font-weight: 400;
	}
`;

// export const LeftSide = styled.div`
// 	width: 50%;
// 	position: relative;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// `;

export const RegMessage = styled.div`
	margin: -3rem 0 2rem;
	text-align: center;

	p {
		color: ${colors.dimGray};
		padding: 1rem;
		font-weight: 400;
	}
`;

// export const RightSide = styled.div`
// 	width: 50%;
// 	position: relative;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;

// 	::before {
// 		content: '';
// 		position: absolute;
// 		top: 50%;
// 		left: 0;
// 		transform: translateY(-50%);
// 		width: 2px;
// 		height: 80%;
// 		background: ${colors.white};
// 		opacity: 0.7;
// 	}
// `;

export const InputsContainer = styled.div`
	display: flex;
	/* background: blue; */
	width: 70%;
	height: 45%;
	margin: 0 auto;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	div {
		display: flex;
		justify-content: center;
		width: 80%;
	}

	${props =>
		props.registration &&
		css`
			width: 85%;
			height: 55%;
		`}

	${props =>
		props.registrationVerifyCode &&
		css`
			width: 90%;
			height: 45%;
		`}
`;
