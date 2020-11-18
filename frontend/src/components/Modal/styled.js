import styled from 'styled-components';
import { colors } from '../../style/theme';

export const ModalExtContainer = styled.main`
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
`;

export const ModalIntContainer = styled.section`
	width: 30%;
	height: 20%;
	padding: 1.5rem;
	border-radius: 4px;
	background: #fff;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	transition: 0.3s linear;
	i {
		cursor: pointer;
		color: #fff;
		font-size: ${props => props.theme.fontLarge};
		position: absolute;
		top: -25px;
		right: -25px;
	}
`;

export const ContentSection = styled.section`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	position: relative;
	outline: none;
	p {
		margin-bottom: 1.3rem;
		color: ${colors.dimGray};
	}

	.action-btns-container {
		width: 50%;
		display: flex;
		justify-content: space-evenly;
	}

	.hide {
		display: none;
	}
`;
